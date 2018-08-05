import { on, emit } from '../../utils/event.js';
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
        fundRatioIndex: '0' // 公积金缴纳比例
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
            currentCityRatio: app.currentCityRatio,
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
        var app = getApp();
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

        console.log('currentCity:', this.data.currentCity);
        console.log('preTaxIncome:', this.data.preTaxIncome);
        console.log('insuranceBase:', this.data.insuranceBase);
        console.log('fundBase:', this.data.fundBase);
        console.log('fundRatio:', this.data.fundRatioList[this.data.fundRatioIndex]);

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
