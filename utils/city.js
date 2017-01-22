import cityObj from 'citylist.js'

//城市检索的首字母
var searchLetter = ["B", "C", "D", "G", "H", "N", "Q", "S", "T", "W", "X"]

//对城市信息进行分组
function cityList() {
    var tempObj=[];
    for (var i = 0; i < searchLetter.length; i++) {
        var initial = searchLetter[i];
        var cityInfo = [];
        var tempArr = {};
        tempArr.initial = initial;
        for (var j = 0; j < cityObj.length; j++) {
            if (initial == cityObj[j].initial) {
                cityInfo.push(cityObj[j]);
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
