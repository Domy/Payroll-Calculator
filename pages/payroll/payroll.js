import { getTaxLevel, formatNumber } from '../../utils/util.js';
import { on, emit } from '../../utils/event.js';
import { cityRatio, paymentList, fundRatioList } from '../../utils/constant.js';
var format = formatNumber

Page({
    data: {
        currentCity: '',
        preTaxIncome: '', // 税前月薪

        socialInsurance: true, // 是否缴纳社保
        housingFund: true, // 是否缴纳公积金
        paymentList: [], // 缴纳方式
        insuranceIndex: 0,
        insuranceBase: '',
        fundIndex: 0,
        fundBase: '',

        fundRatioList: [],
        fundRatioIndex: 0,

        cityRatio: {}
    },

    onLoad () {
        this.setData({
            cityRatio: cityRatio,
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

    switchSocialInsurance (e) {
        this.setData({
            socialInsurance: e.detail.value
        });
    },

    switchHousingFund (e) {
        this.setData({
            housingFund: e.detail.value
        });
    },

    bindInsuranceChange (e) {
        this.setData({
            insuranceIndex: e.detail.value
        });
    },

    bindFundChange (e) {
        this.setData({
            fundIndex: e.detail.value
        });
    },

    bindFundRatioChange (e) {
        this.setData({
            fundRatioIndex: e.detail.value
        });
    },

    onShareAppMessage () { // 用户点击右上角分享
        return {
            title: '税后工资计算器',
            desc: '税后工资、年终奖计算器',
            path: '/pages/payroll/payroll'
        }
    },

    bindIncomeInput (e) {
        let value = e.detail.value || 0

        this.setData({
            income: parseFloat(value)
        })
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

    bindFundInput (e) {
        let value = e.detail.value || 0

        value = value > this.data.preTaxIncome ?
            this.data.preTaxIncome :
            parseFloat(value)

        this.setData({
            fundBase: value
        })
    }
})
