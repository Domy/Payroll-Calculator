import {getTaxLevel, formatNumber} from '../../utils/util.js';
import {on, emit} from '../../utils/event.js';

var format = formatNumber

Page({
  data: {
    index: 0,
    houseFundBase: '',
    medFundBase: '',
    cities: ['北京', '上海', '广州', '深圳'],
    cityRate: {
      '北京': {
        base: 7086 * 3,
        housefund: 12,
        workfund: 0.2,
        medfund: 2,
        agefund: 8
      },
      '上海': {
        base: 5939 * 3,
        housefund: 7,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
      },
      '深圳': {
        base: 6054 * 3,
        housefund: 13,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
      },
      '广州': {
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
  onShow: function() {
    var self = this
    var app = getApp()

    this.setData({
      city: app.globalData.city
    })

    on('changeCity', self, function(data) {
      console.log(data)
      self.setData({
        city: data
      })
      self.generateResult()
    })
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
    this.generateResult()
  },
  bindIncomeInput: function(e) {
    let value = e.detail.value

    this.setData({
      income: value
    })
    this.generateResult()
  },
  bindHouseInput: function (e) {
    this.setData({
      houseFundBase: parseFloat(e.detail.value)
    })
    this.generateResult()
  },
  bindMedInput: function (e) {
    this.setData({
      medFundBase: parseFloat(e.detail.value)
    })
    this.generateResult()
  },
  generateResult: function(e) {
    let data = this.data
    let city = data.cities[data.index];
    let rate = data.cityRate[city];

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

    let houseFundBase = data.houseFundBase 
    ? Math.min(income, data.houseFundBase)
    : Math.min(income, rate.base)
    let houseFund = houseFundBase * (rate.housefund / 100);
    
    
    let medFundBase = data.medFundBase 
    ? Math.min(income, data.medFundBase)
    : Math.min(income, rate.base)
    
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
