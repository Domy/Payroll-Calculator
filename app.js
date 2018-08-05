import { on } from 'utils/event.js';

App({
    globalData: {
        userInfo: null,
        currentCity: '北京市',
        currentCityRatio: {}
    },
    onLaunch() {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);

        on('changeCity', this, (data) => {
            this.globalData.currentCity = data;
        });

        on('updateCityRatio', this, (data) => {
            this.globalData.currentCityRatio = data;
        });
    },
    onShow() {

    },
    onHide() {

    },
    getUserInfo(cb) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo);
        } else {
            //调用登录接口
            wx.login({
                success() {
                    wx.getUserInfo({
                        success(res) {
                            that.globalData.userInfo = res.userInfo;
                            typeof cb == "function" && cb(that.globalData.userInfo);
                        }
                    });
                }
            });
        }
    },
    openToast(msg) {
        wx.showToast({
            title: msg,
            icon: 'none',
            duration: 2000
        });
    }
})