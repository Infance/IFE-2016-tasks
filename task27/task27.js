var input = document.getElementsByTagName('input'),
    account = input[0],
    passWord = input[1],
    rePassWord = input[2],
    mail = input[3],
    phone = input[4],
    tips = document.getElementsByClassName('con-word');


/*获取中文字符实际字符长度*/   
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


/*获焦事件函数*/
function showTips(){
	switch(event.target){
		case account:
		    event.target.parentNode.nextSibling.nextSibling.textContent = '必填，长度为4~16个字符';
		    event.target.parentNode.nextSibling.nextSibling.style.color = '#999';
	        break;
	    case passWord:
	        event.target.parentNode.nextSibling.nextSibling.textContent = '密码为字母和数字组合';
	        event.target.parentNode.nextSibling.nextSibling.style.color = '#999';
	        break;
	    case rePassWord:
            event.target.parentNode.nextSibling.nextSibling.textContent = '再次输入相同密码';
            event.target.parentNode.nextSibling.nextSibling.style.color = '#999';
            break;
        case mail:
            event.target.parentNode.nextSibling.nextSibling.textContent = '请输入可用邮箱';
            event.target.parentNode.nextSibling.nextSibling.style.color = '#999';
            break;
        case phone:
            event.target.parentNode.nextSibling.nextSibling.textContent = '请输入可用手机号码';
            event.target.parentNode.nextSibling.nextSibling.style.color = '#999';
            break;
	}
}


/*失焦点事件函数*/
function showResult(){
	switch(event.target){
		case account:
		     if(!account.value){
		     	account.parentNode.nextSibling.nextSibling.textContent ='帐号不能为空';
		     	account.parentNode.nextSibling.nextSibling.style.color = 'red';
		     	account.style.borderColor = 'red';
		     }else{
				if(strLength(account.value)>=4 && strLength(account.value)<=16){
			       account.parentNode.nextSibling.nextSibling.textContent = '格式正确';
			       account.parentNode.nextSibling.nextSibling.style.color = 'green';
			       account.style.borderColor = 'green';		       
				  }else{
				   account.parentNode.nextSibling.nextSibling.textContent = '账户长度必须为4~16个字符';
				   account.parentNode.nextSibling.nextSibling.style.color = 'red';
			       account.style.borderColor = 'red';
	                   }
		     }
		     break;
		case passWord:
		    var repass =  /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{8,12}$/;  //必须同时包含字母和数字的正则表达式
		    if(!passWord.value){
		    	passWord.parentNode.nextSibling.nextSibling.textContent = '密码不能为空';
		    	passWord.parentNode.nextSibling.nextSibling.style.color = 'red';
		    	passWord.style.borderColor = 'red';
		    }else{
		    	if(repass.test(passWord.value)){
		    		passWord.parentNode.nextSibling.nextSibling.textContent = '密码可用';
		    		passWord.parentNode.nextSibling.nextSibling.style.color = 'green';
		    		passWord.style.borderColor = 'green';
		    	}else{
		    		passWord.parentNode.nextSibling.nextSibling.textContent = '密码格式不正确';
		    		passWord.parentNode.nextSibling.nextSibling.style.color = 'red';
		    		passWord.style.borderColor = 'red';
		    	}
		    }
		    break;
		case rePassWord:
		    if(!rePassWord.value){
		    	rePassWord.parentNode.nextSibling.nextSibling.textContent = '请再次输入密码';
		    	rePassWord.parentNode.nextSibling.nextSibling.style.color = 'red';
                rePassWord.style.borderColor = 'red';
		    }else{
		    	if(rePassWord.value == passWord.value){
		    		rePassWord.parentNode.nextSibling.nextSibling.textContent = '输入正确';
		    		rePassWord.parentNode.nextSibling.nextSibling.style.color = 'green';
		    		rePassWord.style.borderColor = 'green';
		    	}else{
		    		rePassWord.parentNode.nextSibling.nextSibling.textContent = '两次密码输入不同';
		    		rePassWord.parentNode.nextSibling.nextSibling.style.color = 'red';
		    		rePassWord.style.borderColor = 'red';
		    	}
		    }
		    break;
		case mail:
		    var remail = /^[0-9a-zA-Z]{1,12}@[0-9a-zA-Z]{1,12}.com$/;
		    if(!mail.value){
		    	mail.parentNode.nextSibling.nextSibling.textContent = '邮箱不能为空';
		    	mail.parentNode.nextSibling.nextSibling.style.color = 'red';
		    	mail.style.borderColor = 'red';
		    }else{
		    	if(remail.test(mail.value)){
		    		mail.parentNode.nextSibling.nextSibling.textContent = '邮箱可用';
		    		mail.parentNode.nextSibling.nextSibling.style.color = 'green';
		    		mail.style.borderColor = 'green';
		    	}else{
		    		mail.parentNode.nextSibling.nextSibling.textContent = '邮箱格式不正确';
		    		mail.parentNode.nextSibling.nextSibling.style.color = 'red';
		    		mail.style.borderColor = 'red';
		    	}
		    }
		case phone:
		    var rephone = /^1\d{10}$/;
		    if(!phone.value){
		    	phone.parentNode.nextSibling.nextSibling.textContent = '手机号码不能为空';
		    	phone.parentNode.nextSibling.nextSibling.style.color = 'red';
		    	phone.style.borderColor = 'red';
		    }else{
		    	if(rephone.test(phone.value)){
		    		phone.parentNode.nextSibling.nextSibling.textContent ='手机号码可用';
		    		phone.parentNode.nextSibling.nextSibling.style.color = 'green';
		    		phone.style.borderColor = 'green';
		    	}else{
		    		phone.parentNode.nextSibling.nextSibling.textContent = '请输入正确的手机号码';
		    		phone.parentNode.nextSibling.nextSibling.style.color = 'red';
		    		phone.style.borderColor = 'red';
		    	}
		    }
		    break;
	}
}


/*表单提交验证*/
function check(){
	var num = [];
	for (var i = 0; i < tips.length; i++) {
		if(tips[i].style.color == 'green'){
			num.push(tips[i]);
		}
	}
	if(num.length !== 5){
		alert('提交失败');
	}else{
		alert('提交成功');
	}
	
}




/*绑定事件*/
(function init(){
	for (var i = 0; i < input.length; i++) {
		input[i].addEventListener('focus',showTips);
		input[i].addEventListener('blur',showResult);
	}
})();