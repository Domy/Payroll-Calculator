import { getTaxLevel, formatNumber as format } from '../../utils/util.js';
import { on, emit } from '../../utils/event.js';

Page({
    data: {
        bonus: '',
        result: '',
        tax: '',
        currentCity: ''
    },

    onShow() {
        let { globalData } = getApp();

        on('changeCity', this, function (value) {
            this.setData({
                currentCity: value
            });
        });

        this.setData({
            currentCity: globalData.currentCity
        });

        this.generateResult();
    },

    bindInput(e) {
        this.setData({
            bonus: parseFloat(e.detail.value)
        });
        this.generateResult();
    },

    generateResult() {
        var { openToast } = getApp();

        if (this.data.bonus === '') {
            openToast('请输入奖金数进行计算');
            return;
        }

        var base = this.data.bonus / 12;
        var level = getTaxLevel(base);

        if (this.data.bonus > 1000) {
            var tax = this.data.bonus * level.rate - level.quota;
        } else {
            var tax = 0;
        }

        var result = this.data.bonus - tax;

        this.setData({
            tax: format(tax || 0),
            result: format(result || 0)
        })
    },

    onShareAppMessage() {
        return {
            title: '税后工资计算器',
            desc: '税后工资、年终奖计算器',
            path: '/pages/payroll/payroll'
        };
    }
})
