import { getTaxLevel, formatNumber } from '../../utils/util.js';
import { on, emit } from '../../utils/event.js';

var format = formatNumber

Page({
    data: {
        index: 0,
        houseFundBase: '',
        medFundBase: '',
        cityRate: {
            '北京市': {
                base: 7706 * 3,
                housefund: 12,
                workfund: 0.2,
                medfund: 2,
                agefund: 8
            },
            '上海市': {
                base: 6504 * 3,
                housefund: 7,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '广州市': {
                base: 6764 * 3,
                housefund: 5,
                workfund: 0.2,
                medfund: 2,
                agefund: 8
            },
            '深圳市': {
                base: 7480 * 3,
                housefund: 5,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '成都市': {
                base: 5000 * 3,
                housefund: 0,
                workfund: 0.4,
                medfund: 2,
                agefund: 8
            },
            '杭州市': {
                base: 5000 * 3,
                housefund: 12,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '武汉市': {
                base: 5000 * 3,
                housefund: 8,
                workfund: 0.3,
                medfund: 2,
                agefund: 8
            },
            '天津市': {
                base: 5265 * 3,
                housefund: 11,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '南京市': {
                base: 5000 * 3,
                housefund: 8,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '重庆市': {
                base: 5000 * 3,
                housefund: 5,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '西安市': {
                base: 5000 * 3,
                housefund: 5,
                workfund: 1,
                medfund: 2,
                agefund: 8
            },
            '长沙市': {
                base: 5000 * 3,
                housefund: 12,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '青岛市': {
                base: 5000 * 3,
                housefund: 12,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '沈阳市': {
                base: 5000 * 3,
                housefund: 5,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '大连市': {
                base: 5000 * 3,
                housefund: 12,
                workfund: 1,
                medfund: 2,
                agefund: 8
            },
            '厦门市': {
                base: 5000 * 3,
                housefund: 5,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '苏州市': {
                base: 5000 * 3,
                housefund: 8,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '宁波市': {
                base: 5000 * 3,
                housefund: 12,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '无锡市': {
                base: 5000 * 3,
                housefund: 8,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '长春市': {
                base: 4500 * 3,
                housefund: 7,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '哈尔滨市': {
                base: 4500 * 3,
                housefund: 8,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '呼和浩特市': {
                base: 4500 * 3,
                housefund: 6,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '包头市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 1,
                medfund: 2,
                agefund: 8
            },
            '太原市': {
                base: 4500 * 3,
                housefund: 6,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '石家庄市': {
                base: 4500 * 3,
                housefund: 10,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '郑州市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 0.3,
                medfund: 2,
                agefund: 8
            },
            '济南市': {
                base: 4500 * 3,
                housefund: 12,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '温州市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '泰州市': {
                base: 4500 * 3,
                housefund: 8,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '绍兴市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '嘉兴市': {
                base: 4500 * 3,
                housefund: 8,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '昆山市': {
                base: 4500 * 3,
                housefund: 8,
                workfund: 5,
                medfund: 2,
                agefund: 8
            },
            '张家港市': {
                base: 4500 * 3,
                housefund: 8,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '合肥市': {
                base: 4500 * 3,
                housefund: 12,
                workfund: 1,
                medfund: 2,
                agefund: 8
            },
            '南昌市': {
                base: 4500 * 3,
                housefund: 12,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '扬州市': {
                base: 4500 * 3,
                housefund: 0,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '贵阳市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '昆明市': {
                base: 4500 * 3,
                housefund: 12,
                workfund: 0.6,
                medfund: 2,
                agefund: 8
            },
            '兰州市': {
                base: 4500 * 3,
                housefund: 12,
                workfund: 1,
                medfund: 2,
                agefund: 8
            },
            '西宁市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '银川市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '乌鲁木齐市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 0.5,
                medfund: 9,
                agefund: 8
            },
            '佛山市': {
                base: 4500 * 3,
                housefund: 12,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '珠海市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 0.2,
                medfund: 2,
                agefund: 8
            },
            '东莞市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 0.2,
                medfund: 0,
                agefund: 8
            },
            '福州市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 1,
                medfund: 2,
                agefund: 8
            },
            '汕头市': {
                base: 4500 * 3,
                housefund: 12,
                workfund: 0.2,
                medfund: 2,
                agefund: 8
            },
            '潮州市': {
                base: 4500 * 3,
                housefund: 5,
                workfund: 1,
                medfund: 0,
                agefund: 8
            },
            '唐山市': {
                base: 4500 * 3,
                housefund: 8,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            },
            '廊坊市': {
                base: 4500 * 3,
                housefund: 8,
                workfund: 0.5,
                medfund: 2,
                agefund: 8
            }
        },
        income: '',
        results: {}
    },

    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: '税后工资计算器', // 分享标题
            desc: '税后工资、年终奖计算器', // 分享描述
            path: '/pages/payroll/payroll' // 分享路径
        }
    },

    onShow: function () {
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
    bindIncomeInput: function (e) {
        let value = e.detail.value || 0

        this.setData({
            income: parseFloat(value)
        })
        this.getBase()
        this.generateResult()
    },

    bindHouseInput: function (e) {
        let value = e.detail.value || 0

        value = value > this.data.income
            ? this.data.income
            : parseFloat(value)

        this.setData({
            houseFundBase: value
        })

        this.generateResult()
    },

    bindMedInput: function (e) {
        let value = e.detail.value || 0

        value = value > this.data.income
            ? this.data.income
            : parseFloat(value)

        this.setData({
            medFundBase: value
        })

        this.generateResult()
    },

    getBase: function (e) {
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

    generateResult: function (e) {
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
    clear: function (e) {
        this.setData({
            results: {}
        })
        this.setData({
            income: ''
        })
    }
})
