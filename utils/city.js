const cityList = [{
    'initial': 'B',
    'city': '北京市',
  }, {
    'initial': 'C',
    'city': '成都市',
  }, {
    'initial': 'C',
    'city': '重庆市',
  }, {
    'initial': 'C',
    'city': '长沙市',
  }, {
    'initial': 'D',
    'city': '大连市',
  }, {
    'initial': 'G',
    'city': '广州市',
  }, {
    'initial': 'H',
    'city': '杭州市',
  }, {
    'initial': 'S',
    'city': '苏州市',
  }, {
    'initial': 'N',
    'city': '宁波市',
  }, {
    'initial': 'N',
    'city': '南京市',
  }, {
    'initial': 'Q',
    'city': '青岛市',
  }, {
    'initial': 'S',
    'city': '上海市',
  }, {
    'initial': 'S',
    'city': '沈阳市',
  }, {
    'initial': 'S',
    'city': '深圳市',
  }, {
    'initial': 'T',
    'city': '天津市',
  }, {
    'initial': 'W',
    'city': '武汉市',
  }, {
    'initial': 'W',
    'city': '无锡市',
  }, {
    'initial': 'X',
    'city': '西安市',
  }, {
    'initial': 'X',
    'city': '厦门市',
  }, {
    'initial': 'B',
    'city': '包头市',
  }, {
    'initial': 'C',
    'city': '长春市',
  }, {
    'initial': 'C',
    'city': '潮州市',
  }, {
    'initial': 'D',
    'city': '东莞市',
  }, {
    'initial': 'F',
    'city': '佛山市',
  }, {
    'initial': 'F',
    'city': '福州市',
  }, {
    'initial': 'G',
    'city': '贵阳市',
  }, {
    'initial': 'H',
    'city': '哈尔滨市',
  }, {
    'initial': 'H',
    'city': '合肥市',
  }, {
    'initial': 'H',
    'city': '呼和浩特市',
  }, {
    'initial': 'J',
    'city': '济南市',
  }, {
    'initial': 'J',
    'city': '嘉兴市',
  }, {
    'initial': 'K',
    'city': '昆山市',
  }, {
    'initial': 'K',
    'city': '昆明市',
  }, {
    'initial': 'L',
    'city': '廊坊市',
  }, {
    'initial': 'L',
    'city': '兰州市',
  }, {
    'initial': 'N',
    'city': '南昌市',
  }, {
    'initial': 'S',
    'city': '石家庄市',
  }, {
    'initial': 'S',
    'city': '汕头市',
  }, {
    'initial': 'S',
    'city': '绍兴市',
  }, {
    'initial': 'T',
    'city': '唐山市',
  }, {
    'initial': 'T',
    'city': '太原市',
  }, {
    'initial': 'T',
    'city': '泰州市',
  }, {
    'initial': 'W',
    'city': '乌鲁木齐市',
  }, {
    'initial': 'W',
    'city': '温州市',
  }, {
    'initial': 'X',
    'city': '西宁市',
  }, {
    'initial': 'Y',
    'city': '银川市',
  }, {
    'initial': 'Z',
    'city': '珠海市',
  }, {
    'initial': 'Z',
    'city': '张家港市',
  }, {
    'initial': 'Z',
    'city': '郑州市',
  }]

//城市检索的首字母
const letterIndexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']

//对城市信息进行分组
function getCityList() {
    var tempObj=[];
    for (var i = 0; i < letterIndexes.length; i++) {
        var initial = letterIndexes[i];
        var cityInfo = [];
        var tempArr = {};
        tempArr.initial = initial;
        for (var j = 0; j < cityList.length; j++) {
            if (initial == cityList[j].initial) {
                cityInfo.push(cityList[j]);
            }
        }
        tempArr.cityInfo = cityInfo;
        tempObj.push(tempArr);
    }
    return tempObj;
}

export {
    letterIndexes,
    getCityList
}
