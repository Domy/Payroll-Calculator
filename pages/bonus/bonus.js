import { getTaxLevel, formatNumber as format } from '../../utils/util.js';
import { on, emit } from '../../utils/event.js';

Page({
    data: {
        bonus: '',
        result: '',
        tax: '',
        currentCity: ''
    },
    bindInput(e) {
        this.setData({
            bonus: parseFloat(e.detail.value || 0)
        });
        this.generateResult();
    },
    onShow() {
        let {
            globalData
        } = getApp();

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

    generateResult() {
        let base = this.data.bonus / 12;
        let level = getTaxLevel(base);

        let tax = this.data.bonus * level.rate - level.quota;
        let result = this.data.bonus - tax;

        this.setData({
            tax: format(tax),
            result: format(result)
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
