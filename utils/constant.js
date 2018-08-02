const cityRatio = {
    '北京市': {
        base: 7706 * 3,
        housefund: 12,
        workfund: 0.2,
        medfund: 2,
        agefund: 8
    },
    '上海市': {
        base: 6504 * 3,
        housefund: 7,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '广州市': {
        base: 6764 * 3,
        housefund: 5,
        workfund: 0.2,
        medfund: 2,
        agefund: 8
    },
    '深圳市': {
        base: 7480 * 3,
        housefund: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '成都市': {
        base: 5000 * 3,
        housefund: 0,
        workfund: 0.4,
        medfund: 2,
        agefund: 8
    },
    '杭州市': {
        base: 5000 * 3,
        housefund: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '武汉市': {
        base: 5000 * 3,
        housefund: 8,
        workfund: 0.3,
        medfund: 2,
        agefund: 8
    },
    '天津市': {
        base: 5265 * 3,
        housefund: 11,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '南京市': {
        base: 5000 * 3,
        housefund: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '重庆市': {
        base: 5000 * 3,
        housefund: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '西安市': {
        base: 5000 * 3,
        housefund: 5,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '长沙市': {
        base: 5000 * 3,
        housefund: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '青岛市': {
        base: 5000 * 3,
        housefund: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '沈阳市': {
        base: 5000 * 3,
        housefund: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '大连市': {
        base: 5000 * 3,
        housefund: 12,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '厦门市': {
        base: 5000 * 3,
        housefund: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '苏州市': {
        base: 5000 * 3,
        housefund: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '宁波市': {
        base: 5000 * 3,
        housefund: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '无锡市': {
        base: 5000 * 3,
        housefund: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '长春市': {
        base: 4500 * 3,
        housefund: 7,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '哈尔滨市': {
        base: 4500 * 3,
        housefund: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '呼和浩特市': {
        base: 4500 * 3,
        housefund: 6,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '包头市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '太原市': {
        base: 4500 * 3,
        housefund: 6,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '石家庄市': {
        base: 4500 * 3,
        housefund: 10,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '郑州市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 0.3,
        medfund: 2,
        agefund: 8
    },
    '济南市': {
        base: 4500 * 3,
        housefund: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '温州市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '泰州市': {
        base: 4500 * 3,
        housefund: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '绍兴市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '嘉兴市': {
        base: 4500 * 3,
        housefund: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '昆山市': {
        base: 4500 * 3,
        housefund: 8,
        workfund: 5,
        medfund: 2,
        agefund: 8
    },
    '张家港市': {
        base: 4500 * 3,
        housefund: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '合肥市': {
        base: 4500 * 3,
        housefund: 12,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '南昌市': {
        base: 4500 * 3,
        housefund: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '扬州市': {
        base: 4500 * 3,
        housefund: 0,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '贵阳市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '昆明市': {
        base: 4500 * 3,
        housefund: 12,
        workfund: 0.6,
        medfund: 2,
        agefund: 8
    },
    '兰州市': {
        base: 4500 * 3,
        housefund: 12,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '西宁市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '银川市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '乌鲁木齐市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 0.5,
        medfund: 9,
        agefund: 8
    },
    '佛山市': {
        base: 4500 * 3,
        housefund: 12,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '珠海市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 0.2,
        medfund: 2,
        agefund: 8
    },
    '东莞市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 0.2,
        medfund: 0,
        agefund: 8
    },
    '福州市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 1,
        medfund: 2,
        agefund: 8
    },
    '汕头市': {
        base: 4500 * 3,
        housefund: 12,
        workfund: 0.2,
        medfund: 2,
        agefund: 8
    },
    '潮州市': {
        base: 4500 * 3,
        housefund: 5,
        workfund: 1,
        medfund: 0,
        agefund: 8
    },
    '唐山市': {
        base: 4500 * 3,
        housefund: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    },
    '廊坊市': {
        base: 4500 * 3,
        housefund: 8,
        workfund: 0.5,
        medfund: 2,
        agefund: 8
    }
}

const paymentList = ['按照工资', '自定义']

const fundRatioList = ['12%', '11%', '10%', '9%', '8%', '7%', '6%', '5%']

export {
    cityRatio,
    paymentList,
    fundRatioList
}