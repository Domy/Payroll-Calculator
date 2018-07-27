Page({
    data: {
    },

    onShow () {
    },

    onShareAppMessage () {
        // 用户点击右上角分享
        return {
            title: '税后工资计算器', // 分享标题
            desc: '税后工资、年终奖计算器', // 分享描述
            path: '/pages/payroll/payroll' // 分享路径
        }
    }
})
