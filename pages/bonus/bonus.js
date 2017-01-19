import {getTaxLevel, formatNumber} from '../../utils/util.js';

Page({
  data: {
    bonus: '',
    result: '',
    tax: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      bonus: e.detail.value
    });
    this.getResult();
  },
  getResult: function () {
    let base = this.data.bonus / 12;
    let level = getTaxLevel(base);
    
    let tax = this.data.bonus * level.rate - level.quota;
    let result = this.data.bonus - tax;

    this.setData({
      tax: formatNumber(tax),
      result: formatNumber(result)
    })
  }
})