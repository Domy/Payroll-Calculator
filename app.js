import { on, emit } from 'utils/event.js';
import { cityList } from 'utils/city.js'

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
        wx.request({
            url: 'https://apis.map.qq.com/ws/location/v1/ip',
            data: {
                key: 'LPHBZ-W2KWU-6WZVP-2AABD-EDPWF-ENFYJ'
            },
            success({data}) {
                let city = data.result.ad_info.city;
                if (cityList.find(item => item.city === city)) {
                    emit('changeCity', city);
                } else {
                    wx.showModal({
                        content: '您当前所在的城市数据缺失，系统默认切换为北京市。如您知道当地的社保、公积金缴纳基数和比例等信息，请反馈，我们会第一时间更新数据，谢谢！',
                        showCancel: false,
                        success: function (res) {
                            if (res.confirm) {
                                console.log('用户点击确定')
                            }
                        }
                    });
                }              
            }
        })
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
            duration: 3000
        });
    }
})