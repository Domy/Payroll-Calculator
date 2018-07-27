import citys from 'citylist.js'

//城市检索的首字母
var searchLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']

//对城市信息进行分组
function cityList() {
    var tempObj=[];
    for (var i = 0; i < searchLetter.length; i++) {
        var initial = searchLetter[i];
        var cityInfo = [];
        var tempArr = {};
        tempArr.initial = initial;
        for (var j = 0; j < citys.length; j++) {
            if (initial == citys[j].initial) {
                cityInfo.push(citys[j]);
            }
        }
        tempArr.cityInfo = cityInfo;
        tempObj.push(tempArr);
    }
    return tempObj;
}

module.exports = {
    searchLetter: searchLetter,
    cityList: cityList
}
