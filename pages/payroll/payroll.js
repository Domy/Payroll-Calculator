import { on, emit } from '../../utils/event.js';
import { cityRatioList, paymentList, fundRatioList } from '../../utils/constant.js';

Page({
    data: {
        currentCity: '',

        cityRatioList: {},
        // currentCityRatio: {},
        preTaxIncome: '', // 税前月薪

        insurance: true, // 是否缴纳社保
        housingFund: true, // 是否缴纳公积金
        paymentList: [], // 缴纳方式
        insuranceIndex: 0, // 社保缴纳方式
        insuranceBase: '', // 社保缴纳基数
        fundIndex: 0, // 公积金缴纳方式
        fundBase: '', // 公积金缴纳基数

        fundRatioList: [],
        fundRatioIndex: 0 // 公积金缴纳比例
    },

    onLoad() {
        this.setData({
            cityRatioList: cityRatioList,
            paymentList: paymentList,
            fundRatioList: fundRatioList
        });
    },
    onShow() {
        let self = this;
        let app = getApp();
        let data = this.data;

        this.setData({
            currentCity: app.globalData.currentCity,
            preTaxIncome: '',
            fundRatioIndex: data.fundRatioList.indexOf(data.cityRatioList[app.globalData.currentCity].fundRatio)
        });

        on('changeCity', self, function (value) {
            self.setData({
                currentCity: value
            });
        });

        console.log(data.cityRatioList[app.globalData.currentCity]);

        this.changeBase();
    },

    bindPreTaxIncomeInput(e) {
        this.setData({
            preTaxIncome: e.detail.value
        });

        this.changeBase();
    },

    changeBase() {
        if (this.data.insurance) {
            if (this.data.insuranceIndex == 0) {
                this.setData({
                    insuranceBase: this.data.preTaxIncome
                });
            } else {
                this.setData({
                    insuranceBase: ''
                });
            }
        } else {
            this.setData({
                insuranceBase: 0
            })
        }
        if (this.data.housingFund) {
            if (this.data.fundIndex == 0) {
                this.setData({
                    fundBase: this.data.preTaxIncome
                });
            } else {
                this.setData({
                    fundBase: ''
                });
            }
        } else {
            this.setData({
                fundBase: 0
            });
        }
    },

    switchInsurance(e) {
        this.setData({
            insurance: e.detail.value,
            insuranceIndex: 0
        });
        this.changeBase();
    },

    bindInsuranceChange(e) {
        this.setData({
            insuranceIndex: e.detail.value
        });
        this.changeBase();
    },

    bindInsuranceInput(e) {
        this.setData({
            insuranceBase: e.detail.value
        });
    },

    switchHousingFund(e) {
        this.setData({
            housingFund: e.detail.value,
            fundIndex: 0
        });
        this.changeBase();
    },

    bindFundChange(e) {
        this.setData({
            fundIndex: e.detail.value
        });
        this.changeBase();
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

        // wx.navigateTo({
        //     url: '../result/result'
        // });
    },

    onShareAppMessage() {
        return {
            title: '税后工资计算器',
            desc: '税后工资、年终奖计算器',
            path: '/pages/payroll/payroll'
        };
    }
})
