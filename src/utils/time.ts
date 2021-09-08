export const ONE_HOUR = 60 * 60 * 1000;     // 一小时的ms值
export const ONE_DAY = 24 * ONE_HOUR;       // 一天的ms值

// 获取当前时间戳
export const getCurrentTime = function(): number{
    // 创建一个新的Date对象，并调用getTime()方法获取当前时间的时间戳
    return new Date().getTime();
}

// 获取当天时间
export const getTodayTime = function(): number {
    return floorToDate(new Date());
}

export const floorToDate = function(time: any): number{
    const t = new Date(time);
    t.setHours(0,0,0,0);
    return t.getTime();
}

export const floorToMinute = function(time: any): number{
    const t = new Date(time);
    t.setSeconds(0,0);
    return t.getTime();
}

export const lessThanADay = function(
    later: number,
    earlier: number = getCurrentTime()
){
    return later - earlier < ONE_DAY;
}

