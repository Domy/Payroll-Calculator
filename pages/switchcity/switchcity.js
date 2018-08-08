import { letterIndexes, getCityList } from '../../utils/city.js'
import { emit } from '../../utils/event.js'

Page({
    data: {
        searchLetter: [],
        showLetter: '',
        winHeight: 0,
        tHeight: 0,
        bHeight: 0,
        startPageY: 0,
        cityList: [],
        isShowLetter: false,
        scrollTop: 0,
        city: ''
    },
    onLoad() {
        // 生命周期函数--监听页面加载
        var sysInfo = wx.getSystemInfoSync();
        var winHeight = sysInfo.windowHeight;

        //添加要匹配的字母范围值
        //1、更加屏幕高度设置子元素的高度
        var itemH = winHeight / letterIndexes.length;
        var tempObj = [];
        for (var i = 0; i < letterIndexes.length; i++) {
            var temp = {};
            temp.name = letterIndexes[i];
            temp.tHeight = i * itemH;
            temp.bHeight = (i + 1) * itemH;

            tempObj.push(temp);
        }

        this.setData({
            winHeight: winHeight,
            itemH: itemH,
            searchLetter: tempObj,
            cityList: getCityList()
        });
    },
    searchStart(e) {
        var showLetter = e.currentTarget.dataset.letter;
        var pageY = e.touches[0].pageY;
        this.setScrollTop(this, showLetter);
        this.nowLetter(pageY, this);
        this.setData({
            showLetter: showLetter,
            startPageY: pageY,
            isShowLetter: true,
        });
    },
    searchMove(e) {
        var pageY = e.touches[0].pageY;
        var startPageY = this.data.startPageY;
        var tHeight = this.data.tHeight;
        var bHeight = this.data.bHeight;
        if (startPageY - pageY > 0) { //向上移动
            if (pageY < tHeight) {
                this.nowLetter(pageY, this);
            }
        } else { //向下移动
            if (pageY > bHeight) {
                this.nowLetter(pageY, this);
            }
        }
    },
    searchEnd(e) {
        var that = this;
        setTimeout(function () {
            that.setData({
                isShowLetter: false
            });
        }, 1000);

    },
    nowLetter(pageY, that) { //当前选中的信息
        var letterData = this.data.searchLetter;
        var bHeight = 0;
        var tHeight = 0;
        var showLetter = '';
        for (var i = 0; i < letterData.length; i++) {
            if (letterData[i].tHeight <= pageY && pageY <= letterData[i].bHeight) {
                bHeight = letterData[i].bHeight;
                tHeight = letterData[i].tHeight;
                showLetter = letterData[i].name;
                break;
            }
        }

        this.setScrollTop(that, showLetter);

        that.setData({
            bHeight: bHeight,
            tHeight: tHeight,
            showLetter: showLetter,
            startPageY: pageY
        });
    },
    setScrollTop(that, showLetter) {
        var scrollTop = 0;
        var cityList = that.data.cityList;
        var cityCount = 0;
        var initialCount = 0;
        for (var i = 0; i < cityList.length; i++) {
            if (showLetter == cityList[i].initial) {
                scrollTop = initialCount * 30 + cityCount * 41;
                break;
            } else {
                initialCount++;
                cityCount += cityList[i].cityInfo.length;
            }
        }

        that.setData({
            scrollTop: scrollTop
        });
    },
    bindCity(e) {
        var city = e.currentTarget.dataset.city;
        emit('changeCity', city);
        wx.navigateBack();
    }
})
