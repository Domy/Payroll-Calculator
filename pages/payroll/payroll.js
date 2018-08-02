import { on, emit } from '../../utils/event.js';
import { paymentList, fundRatioList } from '../../utils/constant.js';

Page({
    data: {
        currentCity: '',
        preTaxIncome: '', // 税前月薪

        socialInsurance: true, // 是否缴纳社保
        housingFund: true, // 是否缴纳公积金
        paymentList: [], // 缴纳方式
        insuranceIndex: 0, // 社保缴纳方式
        insuranceBase: '', // 社保缴纳基数
        fundIndex: 0, // 公积金缴纳方式
        fundBase: '', // 公积金缴纳基数

        fundRatioList: [],
        fundRatioIndex: 0 // 公积金缴纳比例
    },

    onLoad () {
        this.setData({
            paymentList: paymentList,
            fundRatioList: fundRatioList
        })
    },

    onShow () {
        var self = this
        var app = getApp()

        this.setData({
            currentCity: app.globalData.currentCity
        })

        on('changeCity', self, function (data) {
            self.setData({
                currentCity: data
            })
        })
    },

    bindPreTaxIncomeInput (e) {
        let app = getApp()
        let value = e.detail.value

        this.setData({
            preTaxIncome: parseFloat(value)
        })

        if (this.data.insuranceIndex == 0) {
            console.log(this.data.preTaxIncome)
            this.setData({
                insuranceBase: this.data.preTaxIncome
            })
        }
    },

    switchSocialInsurance (e) {
        this.setData({
            socialInsurance: e.detail.value
        });
    },

    bindInsuranceChange (e) {
        this.setData({
            insuranceIndex: e.detail.value
        });
    },

    bindInsuranceInput (e) {
        let value = e.detail.value || 0

        value = value > this.data.preTaxIncome ?
            this.data.preTaxIncome :
            parseFloat(value)

        this.setData({
            insuranceBase: value
        })
    },

    switchHousingFund (e) {
        this.setData({
            housingFund: e.detail.value
        });
    },

    bindFundChange (e) {
        this.setData({
            fundIndex: e.detail.value
        });
    },

    bindFundInput (e) {
        let value = e.detail.value || 0

        value = value > this.data.preTaxIncome ?
            this.data.preTaxIncome :
            parseFloat(value)

        this.setData({
            fundBase: value
        })
    },

    bindFundRatioChange (e) {
        this.setData({
            fundRatioIndex: e.detail.value
        });
    },

    onShareAppMessage () {
        return {
            title: '税后工资计算器',
            desc: '税后工资、年终奖计算器',
            path: '/pages/payroll/payroll'
        }
    }
})
