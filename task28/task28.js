/*input选择事件函数*/
var inSchool = document.getElementsByClassName('selkey')[0],
    unSchool = document.getElementsByClassName('selkey')[1],
    student = document.getElementsByClassName('student')[0],
    unstudent = document.getElementsByClassName('unstudent')[0];
function showSchool(){
		student.style.display = 'block';
		unstudent.style.display = 'none';
}

function showCompany(){
	   student.style.display = 'none';
	   unstudent.style.display = 'block';

}

inSchool.addEventListener('click',showSchool,false);
unSchool.addEventListener('click',showCompany,false);

/*初始化选择框*/
var  nowCity = '北京',
	city = document.getElementById('city'),
	school = document.getElementById('school'),
	data = {
		'北京':['北京大学','清华大学','北京外国语大学','北京师范大学','中国人民大学'],
		'上海':['复旦大学','上海大学','上海海事大学','上海外国语学院','上海交通大学'],
		'武汉':['武汉大学','华中科技大学','华中师范大学','武汉理工大学','江汉大学']
	 },
	schoolData = [];

(function showData(){
	var text3 = '';
	for(var i in data){
		text3 += "<option value = \""+i+"\">"+i+"</option>";
         }
        city.innerHTML = text3;
    schoolData = data[nowCity];
    var text4 = '';
    for(var x in schoolData){
    	 text4 +="<option value = \""+schoolData[x]+"\">"+schoolData[x]+"</option>";
    }
       school.innerHTML = text4;
})();


/*城市选择框变化事件*/
function seleChange(){
	    if(nowCity == city.value){
    	return;
    }else{
    	nowCity = city.value;
    	schoolData = data[nowCity];
    	var text2 ='';
    	for(var j in school){
    		text2 += "<option value = \""+schoolData[j]+"\">"+schoolData[j]+"</option>";
    	}
    	school.innerHTML = text2;    		
    }
}

city.addEventListener('click',seleChange,false);
