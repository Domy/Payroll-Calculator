import { getTaxLevel, formatNumber } from '../../utils/util.js';
import { on, emit } from '../../utils/event.js';

Page({
    data: {
        currentCity: '',
        bonus: '',
        result: '',
        tax: ''
    },
    bindKeyInput: function (e) {
        this.setData({
            bonus: parseFloat(e.detail.value || 0)
        });
        this.getResult();
    },
    onShow: function () {
        var self = this
        var app = getApp()

        this.setData({
            currentCity: app.globalData.currentCity
        })
        on('changeCity', self, function (data) {
            self.setData({
                currentCity: data
            })
            self.getResult()
        })
    },

    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: '税后工资计算器', // 分享标题
            desc: '税后工资、年终奖计算器', // 分享描述
            path: '/pages/payroll/payroll' // 分享路径
        }
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
