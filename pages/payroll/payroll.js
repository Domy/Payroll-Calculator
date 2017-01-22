import {getTaxLevel, formatNumber} from '../../utils/util.js';
import {on, emit} from '../../utils/event.js';

var format = formatNumber

Page({
  data: {
    index: 0,
    houseFundBase: '',
    medFundBase: '',
    cityRate: {
      '北京市': {
        base: 7086 * 3,
        housefund: 12,
        workfund: 0.2,
        medfund: 2,
        agefund: 8
      },
      '上海市': {
        base: 5939 * 3,
        housefund: 7,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
      },
      '深圳市': {
        base: 6054 * 3,
        housefund: 13,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
      },
      '广州市': {
        base: 5525 * 3,
        housefund: 10,
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
      desc: '税后工资、年终奖计算器', // 分享描述
      path: '/pages/payroll/payroll' // 分享路径
    }
  },

  onShow: function() {
    var self = this
    var app = getApp()

    this.setData({
      city: app.globalData.city
    })

    on('changeCity', self, function(data) {
      self.setData({
        city: data
      })
      self.generateResult()
    })
  },
  bindIncomeInput: function(e) {
    let value = e.detail.value || 0

    this.setData({
      income: parseFloat(value)
    })
    this.getBase()
    this.generateResult()
  },
  bindHouseInput: function (e) {
    let value = e.detail.value

    value = value > this.data.income
    ? this.data.income
    : parseFloat(value)

    this.setData({
      houseFundBase: value
    })

    this.generateResult()
  },

  bindMedInput: function (e) {
    let value = e.detail.value

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

  generateResult: function(e) {
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
  clear: function(e) {
    this.setData({
      results: {}
    })
    this.setData({
      income: ''
    })
  }
})
