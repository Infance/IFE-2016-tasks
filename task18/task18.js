var rightin = document.getElementById('rightin'),
    ul = document.getElementById('queue'),
    leftin = document.getElementById('leftin'),
    rightout = document.getElementById('rightout'),
    leftout = document.getElementById('leftout');

function rightIn(){
	var datain = document.getElementById('datain').value;   //这是把输入框的内容赋值给datain datain并不能代表输入框内容   datain只是一个值
	var li = document.createElement('li');
	li.innerHTML = datain;
	ul.appendChild(li);
	li.addEventListener('click',function(){
        ul.removeChild(this);
	});
	document.getElementById('datain').value="";   //点击后清空输入框内容
}

function leftIn(){
	var datain = document.getElementById('datain');  //这里的datain就是input元素了，所以后面设置value值能起到清空功能
	var li = document.createElement('li');
	li.innerHTML = datain.value;
	ul.insertBefore(li,ul.firstChild);
	li.addEventListener('click',function(){
        ul.removeChild(this);
	});
	datain.value="";
}

function rightOut(){
	ul.removeChild(ul.lastChild);
}

function leftOut(){
	ul.removeChild(ul.firstChild);
}


function initEvent(){
	rightin.addEventListener('click',rightIn,false);
    leftin.addEventListener('click',leftIn,false);
    rightout.addEventListener('click',rightOut,false);
    leftout.addEventListener('click',leftOut,false);
}

initEvent();