//payroll-calculator.js
import {getTaxLevel} from '../../utils/util.js';

Page({
  data: {
    index: 0,
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
    income: 0,
    results: {},
    paymentDetail: [
      {
        name: '养老保险',
        rate: 0.08,
        amount: 800
      },
      {
        name: '医疗保险',
        rate: 0.02,
        amount: 200
      },
      {
        name: '失业保险',
        rate: 0.01,
        amount: 100
      },
      {
        name: '住房公积金',
        rate: 0.12,
        amount: 1200
      }
    ]
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindKeyInput: function(e) {
    this.setData({
      income: e.detail.value
    })
  },
  generateResult: function(e) {
    let city = this.data.cities[this.data.index];
    let rate = this.data.cityRate[city];

    let income = this.data.income;
    let houseFund = Math.min(income, rate.base) * (rate.housefund / 100);
    let workFund = Math.min(income, rate.base) * (rate.workfund / 100);
    let medFund = Math.min(income, rate.base) * (rate.medfund / 100);
    let ageFund = Math.min(income, rate.base) * (rate.agefund / 100);

    let incomeBefore = income - houseFund - workFund - medFund - ageFund;
    let taxLevel = getTaxLevel(incomeBefore - 3500)
    let tax = (taxLevel.rate * (incomeBefore - 3500)) - taxLevel.quota;
    let incomeTotal = incomeBefore - tax;

    this.setData({
      results: {
        houseFund: houseFund.toFixed(2),
        workFund: workFund.toFixed(2),
        medFund: medFund.toFixed(2),
        ageFund: ageFund.toFixed(2),
        incomeTotal: incomeTotal.toFixed(2),
        incomeBefore: incomeBefore.toFixed(2),
        tax: tax.toFixed(2)
      }
    })
  },
  clear: function(e) {
    this.setData({
      results: {}
    })
    this.setData({
      income: 0
    })
  }
})
