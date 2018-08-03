import { cityRatio } from '../../utils/constant.js';
import { getTaxLevel, formatNumber } from '../../utils/util.js';
var format = formatNumber;

Page({
    data: {
        cityRatio: {}
    },

    onLoad() {
        this.setData({
            cityRatio: cityRatio,
        });
    },

    getBase() {
        let data = this.data;
        let city = data.city;
        let rate = data.cityRatio[city];

        if (!rate) {
            rate = data.cityRatio['北京市'];
        }

        let income = data.preTaxIncome;

        let insuranceBase = Math.min(income, rate.base);
        let fundBase = Math.min(income, rate.base);

        this.setData({
            fundBase: fundBase,
            insuranceBase: insuranceBase
        });
    },

    generateResult() {
        let data = this.data;
        let income = data.preTaxIncome;

        let city = data.city;
        let rate = data.cityRatio[city];

        if (!rate) {
            rate = data.cityRatio['北京市'];
        }

        let insuranceBase = data.insuranceBase;
        let fundBase = data.fundBase;

        let houseFund = fundBase * (rate.housefund / 100);
        let workFund = insuranceBase * (rate.workfund / 100);
        let medFund = insuranceBase * (rate.medfund / 100);
        let ageFund = insuranceBase * (rate.agefund / 100);
        let sumFund = houseFund + workFund + medFund + ageFund;

        let incomeBefore = income - sumFund;
        let taxLevel = getTaxLevel(incomeBefore - 3500);
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
        });
    },

    goBack() {
        wx.navigateBack();
    },

    onShareAppMessage() { // 用户点击右上角分享
        return {
            title: '税后工资计算器',
            desc: '税后工资、年终奖计算器',
            path: '/pages/result/result'
        };
    }
})
