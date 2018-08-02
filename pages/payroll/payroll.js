import { on, emit } from '../../utils/event.js';
import { paymentList, fundRatioList } from '../../utils/constant.js';

Page({
    data: {
        currentCity: '',
        preTaxIncome: '', // 税前月薪

        socialInsurance: true, // 是否缴纳社保
        housingFund: true, // 是否缴纳公积金
        paymentList: [], // 缴纳方式
        insuranceIndex: 0, // 社保缴纳方式
        insuranceBase: '', // 社保缴纳基数
        fundIndex: 0, // 公积金缴纳方式
        fundBase: '', // 公积金缴纳基数

        fundRatioList: [],
        fundRatioIndex: 0, // 公积金缴纳比例

        preTaxIncomeWarn: false
    },

    onLoad () {
        this.setData({
            paymentList: paymentList,
            fundRatioList: fundRatioList
        })
    },
    onShow () {
        var self = this
        var app = getApp()

        this.setData({
            preTaxIncome: '',
            currentCity: app.globalData.currentCity
        })

        on('changeCity', self, function (data) {
            self.setData({
                currentCity: data
            })
        })

        this.changeBase()
    },

    bindPreTaxIncomeInput (e) {
        this.setData({
            preTaxIncome: e.detail.value,
            preTaxIncomeWarn: false
        })

        this.changeBase()
    },

    changeBase () {
        if (this.data.socialInsurance) {
            if (this.data.insuranceIndex == 0) {
                this.setData({
                    insuranceBase: this.data.preTaxIncome
                })
            } else {
                this.setData({
                    insuranceBase: ''
                })
            }
        } else {
            this.setData({
                insuranceBase: 0
            })
        }
        if (this.data.housingFund) {
            if (this.data.fundIndex == 0) {
                this.setData({
                    fundBase: this.data.preTaxIncome
                })
            } else {
                this.setData({
                    fundBase: ''
                })
            }
        } else {
            this.setData({
                fundBase: 0
            })
        }
    },

    switchSocialInsurance (e) {
        this.setData({
            socialInsurance: e.detail.value,
            insuranceIndex: 0
        });
        this.changeBase()
    },

    bindInsuranceChange (e) {
        this.setData({
            insuranceIndex: e.detail.value
        });
        if (this.data.insuranceBase) {
            this.setData({
                insuranceBaseWarn: false
            });
        }
        this.changeBase()
    },

    bindInsuranceInput (e) {
        this.setData({
            insuranceBase: e.detail.value,
            insuranceBaseWarn: false
        })
    },

    switchHousingFund (e) {
        this.setData({
            housingFund: e.detail.value,
            fundIndex: 0
        });
        this.changeBase()
    },

    bindFundChange (e) {
        this.setData({
            fundIndex: e.detail.value
        });
        if (this.data.fundBase) {
            this.setData({
                fundBaseWarn: false
            });
        }
        this.changeBase()
    },

    bindFundInput (e) {
        this.setData({
            fundBase: e.detail.value,
            fundBaseWarn: false
        })
    },

    bindFundRatioChange (e) {
        this.setData({
            fundRatioIndex: e.detail.value
        });
    },

    result () {
        console.log('currentCity:', this.data.currentCity)
        console.log('preTaxIncome:', this.data.preTaxIncome)
        console.log('insuranceBase:', this.data.insuranceBase)
        console.log('fundBase:', this.data.fundBase)
        console.log('fundRatio:', this.data.fundRatioList[this.data.fundRatioIndex])

        if (!this.data.preTaxIncome) {
            this.setData({
                preTaxIncomeWarn: true
            });
        }
        if (!this.data.insuranceBase) {
            this.setData({
                insuranceBaseWarn: true
            });
        }
        if (!this.data.fundBase) {
            this.setData({
                fundBaseWarn: true
            });
        }

        
    },

    onShareAppMessage () {
        return {
            title: '税后工资计算器',
            desc: '税后工资、年终奖计算器',
            path: '/pages/payroll/payroll'
        }
    }
})
