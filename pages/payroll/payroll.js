import { on, emit } from '../../utils/event.js';
import { getTaxLevel, formatNumber as format } from '../../utils/util.js';
import { cityRatioList, paymentList, fundRatioList } from '../../utils/constant.js';

Page({
    data: {
        cityRatioList: {},
        currentCity: '',
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
            paymentList: paymentList,
            fundRatioList: fundRatioList
        });
    },
    onShow() {
        this.init();
        let app = getApp()['globalData'];
        let data = this.data;

        on('changeCity', this, function (value) {
            this.setData({
                currentCity: value
            });
        });
        
        emit('updateCityRatio', data.cityRatioList[app.currentCity]);

        this.setData({
            currentCity: app.currentCity,
            fundRatioIndex: data.fundRatioList.indexOf(app.currentCityRatio.fundRatio)
        });
    },

    init() {
        this.setData({
            preTaxIncome: '',
            insuranceIndex: '0',
            insuranceBase: '',
            fundIndex: '0',
            fundBase: ''
        });
    },

    bindPreTaxIncomeInput(e) {
        this.setData({
            preTaxIncome: e.detail.value
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
    },

    bindInsuranceInput(e) {
        this.setData({
            insuranceBase: e.detail.value
        });
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
    },

    bindFundInput(e) {
        this.setData({
            fundBase: e.detail.value
        });
    },

    bindFundRatioChange(e) {
        this.setData({
            fundRatioIndex: e.detail.value
        });
    },

    openResult() {
        let app = getApp();
        if (this.data.preTaxIncome === '') {
            app.openToast('请输入税前工资');
            return;
        } else if (this.data.insuranceBase === '') {
            app.openToast('请输入社保基数');
            return;
        } else if (this.data.fundBase === '') {
            app.openToast('请输入公积金基数');
            return;
        }

        wx.showToast({
            title: '计算中',
            icon: 'loading',
            duration: 2000,
            mask: true
        });

        let currentCityRatio = app.globalData.currentCityRatio;

        let insuranceBase = Math.min(this.data.insuranceBase, currentCityRatio.cardinalNumber);
        let fundBase = Math.min(this.data.fundBase, currentCityRatio.cardinalNumber);

        
        let medFund = insuranceBase * (currentCityRatio.medfund / 100);
        let ageFund = insuranceBase * (currentCityRatio.agefund / 100);
        let workFund = insuranceBase * (currentCityRatio.workfund / 100);
        let houseFund = fundBase * (this.data.fundRatioList[this.data.fundRatioIndex] / 100);
        let sumFund = houseFund + workFund + medFund + ageFund;

        let incomeBefore = this.data.preTaxIncome - sumFund;
        let taxLevel = getTaxLevel(incomeBefore - 3500);
        let tax = (taxLevel.rate * (incomeBefore - 3500)) - taxLevel.quota;
        let incomeTotal = incomeBefore - tax;

        this.setData({
            results: {
                preTaxIncome: format(this.data.preTaxIncome), // 税前工资
                afterTaxIncome: format(incomeTotal), // 税后工资

                personalIncomeTax: format(tax), // 个人所得税
                personalInsurance: format(sumFund), // 个人缴纳社保
                personalMedical: format(medFund), // 个人医疗保险
                personalEndowment: format(ageFund), // 个人养老保险
                personalUnemployment: format(workFund), // 个人失业保险
                personalHousingFund: format(houseFund), // 个人缴纳公积金

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

        // console.log(format(this.data.preTaxIncome), 'preTaxIncome');
        // console.log(incomeBefore, 'incomeBefore');
        // console.log(incomeTotal, 'incomeTotal');
        
        // console.log(tax);
        // console.log(sumFund);
        // console.log(medFund);
        // console.log(ageFund);
        // console.log(workFund);
        // console.log(houseFund);

        emit('generateResult', this.data.results);

        wx.navigateTo({
            url: '../result/result'
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
