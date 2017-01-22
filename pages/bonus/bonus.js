import {getTaxLevel, formatNumber} from '../../utils/util.js';
import {on, emit} from '../../utils/event.js';

Page({
  data: {
    bonus: '',
    result: '',
    tax: '',
    city: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      bonus: parseFloat(e.detail.value || 0)
    });
    this.getResult();
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
      self.getResult()
    })
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