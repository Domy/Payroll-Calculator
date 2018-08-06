Page({
    data: {
        results: {
            preTaxIncome: '', // 税前工资
            afterTaxIncome: '', // 税后工资

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
        let app = getApp();

        this.setData({
            results: app.globalData.results
        });

        console.log(this.data.results)
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
