var rightin = document.getElementById('rightin'),
    ul = document.getElementById('queue'),
    leftin = document.getElementById('leftin'),
    rightout = document.getElementById('rightout'),
    leftout = document.getElementById('leftout'),
    bubble = document.getElementById('bubble');   

function rightIn(){
	var datain = document.getElementById('datain').value;   //这是把输入框的内容赋值给datain datain并不能代表输入框内容   datain只是一个值
	if(datain>=10 && datain<=100){
	var li = document.createElement('li');
	if(document.querySelectorAll('li').length>=60){
		alert('不得添加60个以上');
	}else{
	li.innerHTML = "";
	ul.appendChild(li);
	li.style.height=document.getElementById('datain').value+'px';
	li.addEventListener('click',function(){
        ul.removeChild(this);
	});
     }
   }else{
   	alert("输入数字只能大于10小于100");
   }
	document.getElementById('datain').value="";   //点击后清空输入框内容
}

function leftIn(){
	var datain = document.getElementById('datain');  //这里的datain就是input元素了，所以后面设置value值能起到清空功能
	if(datain.value>10 && datain.value<100){
	var li = document.createElement('li');
	if(document.querySelectorAll('li').length>=60){    //判断已经存在的元素个数，如果已经存在60个以上，就弹出提示
          alert("不得添加60个以上");
	}else{
	li.innerHTML = "";
	ul.insertBefore(li,ul.firstChild);
	li.style.height=document.getElementById('datain').value+'px';
	li.addEventListener('click',function(){
        ul.removeChild(this);
	});
     }
  }
	datain.value="";
}

function rightOut(){
	ul.removeChild(ul.lastChild);
}

function leftOut(){
	ul.removeChild(ul.firstChild);
}

function bubbleSort(){
	var i = document.querySelectorAll('li').length-1;
	var j = 0;
	var timer = setInterval(function(){
		var li=document.querySelectorAll('li');
		if(i<1){
			clearInterval(timer);
		}
		if(j == i){
			i--;
			j = 0;
		}
		if(li[j].style.height>li[j+1].style.height){
			li[j].parentNode.insertBefore(li[j+1],li[j]);
		}
		j++;
	},50);
}


function initEvent(){
	rightin.addEventListener('click',rightIn,false);
    leftin.addEventListener('click',leftIn,false);
    rightout.addEventListener('click',rightOut,false);
    leftout.addEventListener('click',leftOut,false);
    bubble.addEventListener('click',bubbleSort,false);
}

initEvent();