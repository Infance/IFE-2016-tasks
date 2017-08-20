  /* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");  //自定义初始时间
  var datStr = '';
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);  //Math.random() 返回0~1之间的随机数
    dat.setDate(dat.getDate() + 1); //月中的一天+1，从1开始加的，new Date;
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: "北京",
  nowGraTime: "day"
};

var formgratime = document.getElementById("form-gra-time");
var cityselect = document.getElementById("city-select");
var aqichartwrap = document.getElementsByClassName("aqi-chart-wrap")[0];
var gratime = document.getElementsByClassName("gra-time");
/**
 * 渲染图表    做表出来
 */
function renderChart() {
  var color='',text='';
  for(var x in chartData){
    color ="#" + Math.floor(Math.random()*0xFFFFFF).toString(16);  //设定随机颜色
    text += "<div title ="+x+":"+chartData[x]+" style="+"\"height:"+chartData[x]+";background-color:"+color+"\";></div>";
  }
  aqichartwrap.innerHTML = text;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 
   if (pageState.nowGraTime == this.value) {
    return;
   }else{
    pageState.nowGraTime = this.value;
  }
  // 设置对应数据
   initAqiChartData();
  // 调用图表渲染函数
  renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
   if (pageState.nowSelectCity == this.value) {
    return;
   }else{
    pageState.nowSelectCity = this.value;
  }
  // 设置对应数据
   initAqiChartData();
  // 调用图表渲染函数
  renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  for (var i = 0; i < gratime.length; i++) {
    gratime[i].addEventListener("click",graTimeChange,false);
  }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var text = "";
  for(var x in aqiSourceData){
    text += "<option value = \""+x+"\">"+x+"</option>";
  }
  cityselect.innerHTML = text;
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  cityselect.addEventListener("change",citySelectChange,false);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  var nowcitydata = aqiSourceData[pageState.nowSelectCity];  //对数组进行降维  星期，月份，日是要重新定义的，所以从城市角度降维
  // 将原始的源数据处理成图表需要的数据格式,现在的数据都在aqiSourceData中
  // 处理好的数据存到 chartData 中,nowcitydata是当前城市92天的降水数组，变量是时间   横轴时间，纵轴降雨量注定了数组要这么处理
  if(pageState.nowGraTime == "day"){
    chartData = nowcitydata;    //#
  }
  if(pageState.nowGraTime == "week"){   //pageState.nowGratime 是个字符串，和一个字符串'week'进行比较
    chartData = {};   //在#中，全局变量chartData被重新赋值了，则其值变为了nowcitydata，这一句是清空原
    var countsum=0, countday=0, week=0;
    for(var x in nowcitydata){
      countsum += nowcitydata[x];
      countday ++;
      var a=new Date(x);
      if(a.getDay() == 6){           //2016-01-01 这种格式的也能getDay()获取到星期，星期数0-6；
         week ++;
         chartData[week] = Math.floor(countsum/countday);
         countsum = 0;
         countday = 0;
      }
    }
    if(countday !== 0){
      week++;
      chartData[week] = Math.floor(countsum/countday);   //countsum和countday都是在for循环里定义的，不算函数里的变量
    }  //保证最后一周即使不满七天也会算一周；
  }
  if(pageState.nowGraTime == "month"){
     chartData = {};
     var month = 0,countsum = 0,countday = 0;
     for(var i in nowcitydata){
        countsum += nowcitydata[i];      
        countday++;
        var a=new Date(i);
        if(a.getMonth() !== month){          //等同于if((new Date(i)).getMonth!==month)    获得的月份是0-11
          month++;
          chartData[month] = Math.floor(countsum/countday);
          countday = 0;
          countsum = 0;
         }
       }
     if(countday !== 0){
      month++;
      chartData[month] = Math.floor(countsum/countday);
     }
  }
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm();
  initCitySelector();
  initAqiChartData();
  renderChart();
}

init();