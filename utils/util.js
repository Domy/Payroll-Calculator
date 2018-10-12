function formatTime(date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    let num = Number(n).toFixed(2)
    if (num * 100 % 100 === 0) {
        return parseInt(num)
    } else {
        return num
    }
}


function getTaxLevel(n) {
    if (n <= 0) {
        return {
            rate: 0,
            quota: 0
        };
    } else if (n < 3000) {
        return {
            rate: 0.03,
            quota: 0
        };
    } else if (n < 12000) {
        return {
            rate: 0.10,
            quota: 210
        };
    } else if (n < 25000) {
        return {
            rate: 0.20,
            quota: 1410
        };
    } else if (n < 35000) {
        return {
            rate: 0.25,
            quota: 2660
        };
    } else if (n < 55000) {
        return {
            rate: 0.30,
            quota: 4410
        };
    } else if (n < 80000) {
        return {
            rate: 0.35,
            quota: 7160
        };
    } else {
        return {
            rate: 0.45,
            quota: 15160
        };
    }
}

export {
    formatTime,
    formatNumber,
    getTaxLevel
}
