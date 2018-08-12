import { on, emit } from '../../utils/event.js';
import { getTaxLevel, formatNumber as format } from '../../utils/util.js';
import { cityRatioList, thresholdList, paymentList, fundRatioList } from '../../utils/constant.js';

Page({
    data: {
        cityRatioList: {},
        currentCity: '',
        thresholdList: [], // 起征点
        thresholdIndex: '0',
        preTaxIncome: '', // 税前月薪

        insurance: true, // 是否缴纳社保
        housingFund: true, // 是否缴纳公积金
        paymentList: [], // 缴纳方式
        insuranceIndex: '0', // 社保缴纳方式
        insuranceBase: '', // 社保缴纳基数
        fundIndex: '0', // 公积金缴纳方式
        fundBase: '', // 公积金缴纳基数

        fundRatioList: [],
        fundRatioIndex: '0', // 公积金缴纳比例

        results: {
            // preTaxIncome: '', // 税前工资
            // afterTaxIncome: '', // 税后工资

            // personalIncomeTax: '', // 个人所得税
            // personalInsurance: '', // 个人缴纳社保
            // personalMedical: '', // 个人医疗保险
            // personalEndowment: '', // 个人养老保险
            // personalUnemployment: '', // 个人失业保险
            // personalHousingFund: '', // 个人缴纳公积金

            // companyCost: '', // 公司雇佣成本

            // companyInsurance: '', // 公司缴纳社保
            // companyMedical: '', // 公司医疗保险
            // companyEndowment: '', // 公司养老保险
            // companyUnemployment: '', // 公司失业保险
            // companyIndustrialInjury: '', // 公司工伤保险
            // companyMaternity: '', // 公司生育保险
            // companyHousingFund: '' // 公司缴纳公积金
        }
    },

    onLoad() {
        this.setData({
            cityRatioList: cityRatioList,
            thresholdList: thresholdList,
            paymentList: paymentList,
            fundRatioList: fundRatioList
        });
    },

    onShow() {
        let { globalData } = getApp();
        let data = this.data;

        on('changeCity', this, function (value) {
            this.setData({
                currentCity: value
            });
        });

        emit('updateCityRatio', data.cityRatioList[globalData.currentCity]);

        this.setData({
            currentCity: globalData.currentCity,
            fundRatioIndex: data.fundRatioList.indexOf(globalData.currentCityRatio.fundRatio)
        });
        this.generateResult();
    },

    bindThresholdChange(e) {
        this.setData({
            thresholdIndex: e.detail.value
        });
        this.generateResult();
    },

    bindPreTaxIncomeInput(e) {
        this.setData({
            preTaxIncome: parseFloat(e.detail.value)
        });

        if (this.data.insurance && this.data.insuranceIndex === '0') {
            this.setData({
                insuranceBase: this.data.preTaxIncome
            });
        }
        if (this.data.housingFund && this.data.fundIndex === '0') {
            this.setData({
                fundBase: this.data.preTaxIncome
            });
        }
        this.generateResult();
    },

    switchInsurance(e) {
        this.setData({
            insurance: e.detail.value,
            insuranceIndex: '0'
        });
        if (this.data.insurance) {
            this.setData({
                insuranceBase: this.data.preTaxIncome
            });
        } else {
            this.setData({
                insuranceBase: 0
            })
        }
        this.generateResult();
    },

    bindInsuranceChange(e) {
        this.setData({
            insuranceIndex: e.detail.value
        });
        if (this.data.insuranceIndex === '0') {
            this.setData({
                insuranceBase: this.data.preTaxIncome
            });
        }
        if (this.data.insuranceIndex === '1') {
            this.setData({
                insuranceBase: ''
            });
        }
        this.generateResult();
    },

    bindInsuranceInput(e) {
        this.setData({
            insuranceBase: parseFloat(e.detail.value)
        });
        this.generateResult();
    },

    switchHousingFund(e) {
        this.setData({
            housingFund: e.detail.value,
            fundIndex: '0'
        });
        if (this.data.housingFund) {
            this.setData({
                fundBase: this.data.preTaxIncome
            });
        } else {
            this.setData({
                fundBase: 0
            });
        }
        this.generateResult();
    },

    bindFundChange(e) {
        this.setData({
            fundIndex: e.detail.value
        });
        if (this.data.fundIndex === '0') {
            this.setData({
                fundBase: this.data.preTaxIncome
            });
        }
        if (this.data.fundIndex === '1') {
            this.setData({
                fundBase: ''
            });
        }
        this.generateResult();
    },

    bindFundInput(e) {
        this.setData({
            fundBase: parseFloat(e.detail.value)
        });
        this.generateResult();
    },

    bindFundRatioChange(e) {
        this.setData({
            fundRatioIndex: e.detail.value
        });
        this.generateResult();
    },

    generateResult() {
        var { globalData, openToast } = getApp();

        if (this.data.preTaxIncome === '') {
            openToast('请输入税前工资进行计算');
            return;
        } else if (this.data.insurance && this.data.insuranceBase === '') {
            openToast('请输入社保基数进行计算');
            return;
        } else if (this.data.housingFund && this.data.fundBase === '') {
            openToast('请输入公积金基数进行计算');
            return;
        } else if (this.data.insuranceBase > this.data.preTaxIncome) {
            openToast('缴纳基数的上限不能超过税前工资，请重新输入');
            return;
        } else if (this.data.fundBase > this.data.preTaxIncome) {
            openToast('缴纳基数的上限不能超过税前工资，请重新输入');
            return;
        }

        var currentCityRatio = globalData.currentCityRatio;
        var threshold = this.data.thresholdList[this.data.thresholdIndex];

        if (this.data.preTaxIncome > 1000) {
            var insuranceBase = Math.min(this.data.insuranceBase, currentCityRatio.upperLimit);
            var fundBase = Math.min(this.data.fundBase, currentCityRatio.upperLimit);
        } else {
            var insuranceBase = this.data.insuranceBase;
            var fundBase = this.data.fundBase;
        }

        var medFund = insuranceBase * (currentCityRatio.medfund / 100);
        var ageFund = insuranceBase * (currentCityRatio.agefund / 100);
        var workFund = insuranceBase * (currentCityRatio.workfund / 100);
        var houseFund = fundBase * (this.data.fundRatioList[this.data.fundRatioIndex] / 100);
        var insuranceSum = workFund + medFund + ageFund;

        var incomeBefore = this.data.preTaxIncome - (insuranceSum + houseFund);
        var taxLevel = getTaxLevel(incomeBefore - threshold);
        var tax = (taxLevel.rate * (incomeBefore - threshold)) - taxLevel.quota;
        var incomeTotal = incomeBefore - tax;

        this.setData({
            results: {
                preTaxIncome: format(this.data.preTaxIncome || 0), // 税前工资
                afterTaxIncome: format(incomeTotal || 0), // 税后工资

                personalIncomeTax: format(tax || 0), // 个人所得税
                personalInsuranceSum: format(insuranceSum || 0), // 个人缴纳社保
                personalMedical: format(medFund || 0), // 个人医疗保险
                personalEndowment: format(ageFund || 0), // 个人养老保险
                personalUnemployment: format(workFund || 0), // 个人失业保险
                personalHousingFund: format(houseFund || 0), // 个人缴纳公积金

                companyCost: format(), // 公司雇佣成本

                companyInsurance: format(), // 公司缴纳社保
                companyMedical: format(), // 公司医疗保险
                companyEndowment: format(), // 公司养老保险
                companyUnemployment: format(), // 公司失业保险
                companyIndustrialInjury: format(), // 公司工伤保险
                companyMaternity: format(), // 公司生育保险
                companyHousingFund: format() // 公司缴纳公积金
            }
        });
    },

    onShareAppMessage() {
        return {
            title: '税后工资计算器',
            desc: '税后工资、年终奖计算器',
            path: '/pages/payroll/payroll'
        };
    }
})
