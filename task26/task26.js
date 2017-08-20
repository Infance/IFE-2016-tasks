var account = document.getElementsByTagName('input')[0],
    name = document.getElementsByTagName('input')[1],
    webname = document.getElementsByTagName('input')[2],
    check1 = document.getElementsByTagName('button')[0],
    check2 = document.getElementsByTagName('button')[1],
    check3 = document.getElementsByTagName('button')[2],
    tips1 = document.getElementsByClassName('con-word')[0];

function output1(){
	if(strLength(account.value)>=4 && strLength(account.value)<=16){
       tips1.textContent = '格式正确';
       tips1.style.color = '#999';
	}else{
	   tips1.textContent = '名称长度必须为4~16个字符';
       tips1.style.color = 'red';
	}
}

function strLength(str){
	var realLength = 0;
	for (var i = 0; i < str.length; i++) {
		charCode = str.charCodeAt(i);
		if(charCode>=0 && charCode<=128){
			realLength += 1;
		}else{
			realLength += 2;
		}
	}
	return realLength;
}