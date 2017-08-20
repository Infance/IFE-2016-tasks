function input(){         
    var ul = document.getElementById('tag');
    var datain = document.getElementById('datain');
    if(/[,\s\n]/.test(datain.value) || event.keyCode == 13){
      if(ul.children.length === 0 || ul.children.length < 0){
        var li = document.createElement('li');
        li.innerHTML= datain.value.trim().match(/[^,\n\s]*/);
        ul.appendChild(li);
        li.addEventListener('mouseover',function(){  
		this.innerHTML = '删除'+this.innerHTML;  //循环里的函数可以访问到循环中的所有li,而不是当次循环的li,所以在函数内部要用this来确保是当次循环的li
		this.style.backgroundColor = 'red';
    	});
    	li.addEventListener('mouseout',function(){
    		this.innerHTML = this.innerHTML.replace('删除','');
    		this.style.backgroundColor = '#D361DE';
    	});
    	li.addEventListener('click',function(){
    		this.parentNode.removeChild(this);
    	 });
    	}else{
      	if(ul.textContent.indexOf(datain.value.trim().match(/[^,\n\s]*/)) == -1){  
      	//这个A.indexOf(B)  datain.value取的结果有[,],所以要去掉  
      		var lis = document.createElement('li');
				lis.innerHTML =datain.value.trim().match(/[^,\n\s]*/);   
			if(ul.children.length<=10){
				ul.appendChild(lis);
				lis.addEventListener('mouseover',function(){  
					this.innerHTML = '删除'+this.innerHTML;  //循环里的函数可以访问到循环中的所有li,而不是当次循环的li,所以在函数内部要用this来确保是当次循环的li
					this.style.backgroundColor = 'red';
				});
				lis.addEventListener('mouseout',function(){
					this.innerHTML = this.innerHTML.replace('删除','');
					this.style.backgroundColor = '#D361DE';
				});
				lis.addEventListener('click',function(){
					this.parentNode.removeChild(this);
				 });
			}else{
			   	ul.removeChild(ul.firstChild);
			   	    	ul.appendChild(lis);
				lis.addEventListener('mouseover',function(){  
					this.innerHTML = '删除'+this.innerHTML;  //循环里的函数可以访问到循环中的所有li,而不是当次循环的li,所以在函数内部要用this来确保是当次循环的li
					this.style.backgroundColor = 'red';
				});
				lis.addEventListener('mouseout',function(){
					this.innerHTML = this.innerHTML.replace('删除','');
					this.style.backgroundColor = '#D361DE';
				});
				lis.addEventListener('click',function(){
					this.parentNode.removeChild(this);
				 });
         }
       }
    }
     datain.value = "";   
  }
}


var data= document.getElementById('datain');
data.addEventListener('keyup',input,false);

function teas(){         
    var ul = document.getElementById('favorite');
    var datain = document.getElementById('likes');
    var temp = datain.value.trim().split(/[,\n\s]/);
    for (var i = 0 ,a={},b = []; i < temp.length; i++){   //去重，新建一个数组b =[]  把不重复的元素存里面。
       if(!a[temp[i]]){
            b.push(temp[i]);
            a[temp[i]]=1;          //初始的肯定是取不到值，是null,就是false,这样把取过的a[temp[i]]设为1后，取到过的就不会执行函数了，因为1转boolean是ture，取非就是false
        } 
     }
    for(var n=0;n<b.length;n++){ 
       var li = document.createElement('li');
       li.innerHTML =b[n].trim();
       if(ul.children.length<=10){
    	ul.appendChild(li); 
       }else{
       	    ul.removeChild(ul.firstChild);
       	    ul.appendChild(li);
       }
     }
    datain.value = '';   
}

var tea = document.getElementById('confir');
tea.addEventListener('click',teas,false);