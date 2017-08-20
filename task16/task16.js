/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var pattern1 = /^[a-zA-Z\u4E00-\u9FA5]+$/;  //匹配英文和汉字
var pattern2 = /[\d*]/;  //匹配数字
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var cityName = document.getElementById("aqi-city-input").value.trim();
    var cityName1 = document.getElementById("aqi-city-input").value;
    var cityNum = document.getElementById("aqi-value-input").value.trim();
    var cityNum1 = document.getElementById("aqi-value-input").value;
	   if (!pattern1.test(cityName)) {
	   	alert("城市必须是中文或者英文！");
	   	cityName1 = ''; //清除输入城市
	   	return;
	   }
	  if (!pattern2.test(cityNum)) {
	  	alert("空气质量必须是数字！");
	  	cityNum1 = ''; //清除输入数字
	  	return;
	  }
	  if (pattern1.test(cityName) && pattern2.test(cityNum)) {
	    aqiData[cityName] = cityNum;
	  }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
   var table = document.getElementById("aqi-table");
   table.style.collapse = "collapse";
   var tr = '<tr>'+'<td>'+"城市"+'</td>'+'<td>'+"空气质量"+'</td>'+'<td>'+"操作"+'</td>'+'</tr>';
   for(var x in aqiData){
   	tr += '<tr>'+'<td>'+ x +'</td>'+'<td>'+ aqiData[x] +'</td>'+'<td>'+"<button onclick='delBtnHandle(\""+x+"\")'>"+'删除'+"</button>"+'</td>'+'</tr>';
   }
   table.innerHTML = tr;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
 function clearText(){   //点击确认添加按钮后清空输入框
 	document.getElementById("aqi-city-input").value = "";  
 	document.getElementById("aqi-value-input").value = "";
 }
function addBtnHandle() {     //点击按钮促发的事件函数会执行的操作
  addAqiData();
  renderAqiList();
  clearText();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(cityName) {
  // do sth.
  delete aqiData[cityName];
  renderAqiList();
}

function init() {
  var addbtn = document.getElementById("add-btn");
  addbtn.addEventListener("click",addBtnHandle,false);// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
}

init();
