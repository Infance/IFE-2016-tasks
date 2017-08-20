
var table = document.getElementsByTagName('table')[0],
    test =document.getElementById('test');
window.onscroll=function(){
	var header = document.getElementById('header');
	if(document.body.scrollTop <= 1457){
		header.style.position = 'fixed';
		console.log('yes');
	}else{
		console.log('It\'s me');
        header.style.position = '';
	}
};

function test1(){
	alert(document.body.scrollTop);
}