import { cityRatio } from '../../utils/constant.js';
import { getTaxLevel, formatNumber } from '../../utils/util.js';
var format = formatNumber;

Page({
    data: {
        cityRatio: {},
        currentCity: '',

        results: {
            afterTaxIncome: '', // 税后工资
            preTaxIncome: '', // 税前工资

            personalIncomeTax: '', // 个人所得税
            personalInsurance: '', // 个人缴纳社保
            personalMedical: '', // 个人医疗保险
            personalEndowment: '', // 个人养老保险
            personalUnemployment: '', // 个人失业保险
            personalHousingFund: '', // 个人缴纳公积金

            companyCost: '', // 公司雇佣成本

            companyInsurance: '', // 公司缴纳社保
            companyMedical: '', // 公司医疗保险
            companyEndowment: '', // 公司养老保险
            companyUnemployment: '', // 公司失业保险
            companyIndustrialInjury: '', // 公司工伤保险
            companyMaternity: '', // 公司生育保险
            companyHousingFund: '' // 公司缴纳公积金
        }
    },

    onLoad() {
        var app = getApp();

        this.setData({
            cityRatio: cityRatio,
            currentCity: app.globalData.currentCity
        });

        this.generateResult();
    },

    generateResult() {
        let city = this.data.currentCity;
        let rate = this.data.cityRatio[city];

        if (!rate) {
            rate = this.data.cityRatio['北京市'];
        }

        let insuranceBase = Math.min(this.data.insuranceBase, rate.base);  // ?
        let fundBase = Math.min(this.data.fundBase, rate.base);  // ?

        let houseFund = fundBase * (rate.housefund / 100);
        let workFund = insuranceBase * (rate.workfund / 100);
        let medFund = insuranceBase * (rate.medfund / 100);
        let ageFund = insuranceBase * (rate.agefund / 100);
        let sumFund = houseFund + workFund + medFund + ageFund;

        let incomeBefore = this.data.preTaxIncome - sumFund;
        let taxLevel = getTaxLevel(incomeBefore - 3500);
        let tax = (taxLevel.rate * (incomeBefore - 3500)) - taxLevel.quota;
        let incomeTotal = incomeBefore - tax;

        this.setData({
            results: {
                afterTaxIncome: format(), // 税后工资
                preTaxIncome: format(), // 税前工资

                personalIncomeTax: format(), // 个人所得税
                personalInsurance: format(), // 个人缴纳社保
                personalMedical: format(), // 个人医疗保险
                personalEndowment: format(), // 个人养老保险
                personalUnemployment: format(), // 个人失业保险
                personalHousingFund: format(), // 个人缴纳公积金

                companyCost: format(), // 公司雇佣成本

                companyInsurance: format(), // 公司缴纳社保
                companyMedical: format(), // 公司医疗保险
                companyEndowment: format(), // 公司养老保险
                companyUnemployment: format(), // 公司失业保险
                companyIndustrialInjury: format(), // 公司工伤保险
                companyMaternity: format(), // 公司生育保险
                companyHousingFund: format() // 公司缴纳公积金
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
