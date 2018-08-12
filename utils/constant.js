const cityRatioList = {
    '北京市': {
        cityName: '北京市',
        upperLimit: 8467 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.2,
        medfund: 2,
        agefund: 8
    },
    '上海市': {
        cityName: '上海市',
        upperLimit: 7132 * 3,
        lowerLimit: 2500,
        fundRatio: 7,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '广州市': {
        cityName: '广州市',
        upperLimit: 8218 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.2,
        medfund: 2,
        agefund: 8
    },
    '深圳市': {
        cityName: '深圳市',
        upperLimit: 8261 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '成都市': {
        cityName: '成都市',
        upperLimit: 6990 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.4,
        medfund: 2,
        agefund: 8
    },
    '杭州市': {
        cityName: '杭州市',
        upperLimit: 4699 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '武汉市': {
        cityName: '武汉市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 0.3,
        medfund: 2,
        agefund: 8
    },
    '天津市': {
        cityName: '天津市',
        upperLimit: 5265 * 3,
        lowerLimit: 2500,
        fundRatio: 11,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '南京市': {
        cityName: '南京市',
        upperLimit: 6057 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '重庆市': {
        cityName: '重庆市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '西安市': {
        cityName: '西安市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '长沙市': {
        cityName: '长沙市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '青岛市': {
        cityName: '青岛市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '沈阳市': {
        cityName: '沈阳市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '大连市': {
        cityName: '大连市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '厦门市': {
        cityName: '厦门市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '苏州市': {
        cityName: '苏州市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '宁波市': {
        cityName: '宁波市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '无锡市': {
        cityName: '无锡市',
        upperLimit: 5000 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '长春市': {
        cityName: '长春市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 7,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '哈尔滨市': {
        cityName: '哈尔滨市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '呼和浩特市': {
        cityName: '呼和浩特市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 6,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '包头市': {
        cityName: '包头市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '太原市': {
        cityName: '太原市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 6,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '石家庄市': {
        cityName: '石家庄市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 10,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '郑州市': {
        cityName: '郑州市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.3,
        medfund: 2,
        agefund: 8
    },
    '济南市': {
        cityName: '济南市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '温州市': {
        cityName: '温州市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '泰州市': {
        cityName: '泰州市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '绍兴市': {
        cityName: '绍兴市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '嘉兴市': {
        cityName: '嘉兴市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '昆山市': {
        cityName: '昆山市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 5,
        medfund: 2,
        agefund: 8
    },
    '张家港市': {
        cityName: '张家港市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '合肥市': {
        cityName: '合肥市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '南昌市': {
        cityName: '南昌市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '扬州市': {
        cityName: '扬州市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 10,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '贵阳市': {
        cityName: '贵阳市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '昆明市': {
        cityName: '昆明市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.6,
        medfund: 2,
        agefund: 8
    },
    '兰州市': {
        cityName: '兰州市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '西宁市': {
        cityName: '西宁市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '银川市': {
        cityName: '银川市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '乌鲁木齐市': {
        cityName: '乌鲁木齐市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.5,
        medfund: 9,
        agefund: 8
    },
    '佛山市': {
        cityName: '佛山市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '珠海市': {
        cityName: '珠海市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.2,
        medfund: 2,
        agefund: 8
    },
    '东莞市': {
        cityName: '东莞市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 0.2,
        medfund: 0,
        agefund: 8
    },
    '福州市': {
        cityName: '福州市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '汕头市': {
        cityName: '汕头市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 12,
        workfund: 0.2,
        medfund: 2,
        agefund: 8
    },
    '潮州市': {
        cityName: '潮州市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 5,
        workfund: 1,
        medfund: 0,
        agefund: 8
    },
    '唐山市': {
        cityName: '唐山市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '廊坊市': {
        cityName: '廊坊市',
        upperLimit: 4500 * 3,
        lowerLimit: 2500,
        fundRatio: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    }
}

const thresholdList = [3500, 4800]

const paymentList = ['按照工资', '自定义']

const fundRatioList = [12, 11, 10, 9, 8, 7, 6, 5]

export {
    cityRatioList,
    thresholdList,
    paymentList,
    fundRatioList
}