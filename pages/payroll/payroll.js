import { getTaxLevel, formatNumber } from '../../utils/util.js';
import { on, emit } from '../../utils/event.js';
import cityRate from '../../utils/cityRate.js';
var format = formatNumber

Page({
    data: {
        socialInsurance: true, // 是否缴纳社保
        housingFund: true, // 是否缴纳公积金
        paymentType: ['按照工资', '按最低标准', '自定义'], // 缴纳方式
        insuranceIndex: 0,
        fundIndex: 0,
        ratioRange: ['12%', '10%', '9%', '8%', '7%', '6%', '5%'],
        ratioIndex: 0,

        houseFundBase: '',
        medFundBase: '',
        cityRate: {},
        income: '',
        results: {}
    },

    onLoad () {
        this.setData({
            cityRate: cityRate
        })
    },

    onShow () {
        var self = this
        var app = getApp()

        this.setData({
            city: app.globalData.city
        })

        on('changeCity', self, function (data) {
            self.setData({
                city: data
            })
            self.generateResult()
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

    bindRatioChange (e) {
        this.setData({
            ratioIndex: e.detail.value
        });
    },

    onShareAppMessage () {
        // 用户点击右上角分享
        return {
            title: '税后工资计算器', // 分享标题
            desc: '税后工资、年终奖计算器', // 分享描述
            path: '/pages/payroll/payroll' // 分享路径
        }
    },

    bindIncomeInput (e) {
        let value = e.detail.value || 0

        this.setData({
            income: parseFloat(value)
        })
        this.getBase()
        this.generateResult()
    },

    bindHouseInput (e) {
        let value = e.detail.value || 0

        value = value > this.data.income ?
            this.data.income :
            parseFloat(value)

        this.setData({
            houseFundBase: value
        })

        this.generateResult()
    },

    bindMedInput (e) {
        let value = e.detail.value || 0

        value = value > this.data.income ?
            this.data.income :
            parseFloat(value)

        this.setData({
            medFundBase: value
        })

        this.generateResult()
    },

    getBase () {
        let data = this.data
        let city = data.city
        let rate = data.cityRate[city]

        if (!rate) {
            rate = data.cityRate['北京市']
        }

        let income = data.income

        let houseFundBase = Math.min(income, rate.base)
        let medFundBase = Math.min(income, rate.base)

        this.setData({
            houseFundBase: houseFundBase,
            medFundBase: medFundBase
        })
    },

    generateResult () {
        let data = this.data
        let income = data.income;

        if (income > 1000000) {
            this.setData({
                results: {
                    ageFund: '有',
                    medFund: '钱',
                    workFund: '就是',
                    houseFund: '任性',
                    incomeTotal: '计较这个干啥',
                    incomeBefore: '计较这个干啥',
                    tax: '不在乎',
                    sum: '无所谓'
                }
            })
            return
        }

        let city = data.city
        let rate = data.cityRate[city]

        if (!rate) {
            rate = data.cityRate['北京市']
        }

        let medFundBase = data.medFundBase
        let houseFundBase = data.houseFundBase

        let houseFund = houseFundBase * (rate.housefund / 100)
        let workFund = medFundBase * (rate.workfund / 100);
        let medFund = medFundBase * (rate.medfund / 100);
        let ageFund = medFundBase * (rate.agefund / 100);
        let sumFund = houseFund + workFund + medFund + ageFund;

        let incomeBefore = income - sumFund;
        let taxLevel = getTaxLevel(incomeBefore - 3500)
        let tax = (taxLevel.rate * (incomeBefore - 3500)) - taxLevel.quota;
        let incomeTotal = incomeBefore - tax;

        this.setData({
            results: {
                houseFund: format(houseFund),
                workFund: format(workFund),
                medFund: format(medFund),
                ageFund: format(ageFund),
                incomeTotal: format(incomeTotal),
                incomeBefore: format(incomeBefore),
                tax: format(tax),
                sum: format(sumFund)
            }
        })
    },
    clear () {
        this.setData({
            results: {}
        })
        this.setData({
            income: ''
        })
    }
})
