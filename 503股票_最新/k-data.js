var code="hq_str_sh"+"000001";
var api="http://hq.sinajs.cn/list=sh"+"000001";
document.write('<scr'+'ipt src='+api+'></scr'+'ipt>');

/*var elements=eval(code).split(",");*/

var data = [[20111213, 11.98, 11.96, 12.00, 11.60, 11.66, 51058775, 602149216], [20111214, 11.66, 11.65, 11.83, 11.55, 11.68, 30408111, 356305057], [20111215, 11.68, 11.65, 11.76, 11.40, 11.41, 43356655, 502325991]];

//昨收 开盘 最高 最低 收盘 成交量 成交额

function getKLData() {
    var result = {};
    var ks = [];
    for (var i = 0; i < data.length; i++) {
        var rawData = data[i];
        //20111215,11.68,11.65,11.76,11.40,11.41,43356655,502325991
        //日期,昨收,开盘价,高,低，收,量，额
        var item = {
            quoteTime: rawData[0],
            preClose: rawData[1],
            open: rawData[2],
            high: rawData[3],
            low: rawData[4],
            close: rawData[5],
            volume: rawData[6],
            amount: rawData[7]
        };
        if (ks.length == 0) {
            result.low = item.low;
            result.high = item.high;
        } else {
            result.high = Math.max(result.high, item.high);
            result.low = Math.min(result.low, item.low);
        }
        ks.push(item);
    }
    result.ks = ks;
    return result;
}