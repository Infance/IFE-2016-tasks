 var div = document.createElement('div');
function turnLef(){
	var square = document.getElementById('square'),
	    array = ['top','left','bottom','right'];
	    square = document.getElementById('square');
	for(var i = 0;i<array.length;i++){
		if (square.className == array[i]) {
			if(i == 3){
				square.className = array[0];
			}else{
			square.className = array[i+1];
		}
		break;
	}
   }
 }

function turnRig(){
	var square = document.getElementById('square'),
	    array = ['top','right','bottom','left'];	    
	for(var i = 0;i<array.length;i++){
		if (square.className == array[i]) {
			if(i == 3){
				square.className = array[0];
			}else{
			square.className = array[i+1];
		}
		break;
	}
   }
}

function turnBac(){
	var square = document.getElementById('square'),
	    array = ['top','right','bottom','left'];
	for(var i = 0;i<array.length;i++){
		if (square.className == array[i]) {
			if(i == 3){
				square.className = array[1];
			}else{
			square.className = array[i+2];
		}
		break;
	}
   }
}

//获取square的纵坐标
function getIndex(x){
     for (var i = 0; i < x.parentNode.children.length; i++) {
     	 if(x.parentNode.children[i] == x){
     	 	return i;
     	 }
     }
}



function go(){
	var square = document.getElementById('square'),
	    i = getIndex(square);
	switch(square.className){
		case 'top':
         if(square.parentNode.previousSibling.previousSibling.children[i]){
         square.className = '';
         square.id = '';        	
         square.parentNode.previousSibling.previousSibling.children[i].className = 'top';
         square.parentNode.previousSibling.previousSibling.children[i].id = 'square';
         square.parentNode.previousSibling.previousSibling.children[i].appendChild(div);
         }
         break;
        case 'bottom':
        if(square.parentNode.nextSibling.nextSibling.children[i]){
	        square.className = '';
	        square.id = '';        	
        	square.parentNode.nextSibling.nextSibling.children[i].className = 'bottom';
        	square.parentNode.nextSibling.nextSibling.children[i].id = 'square';
        	square.parentNode.nextSibling.nextSibling.children[i].appendChild(div);
        }
        break;
        case 'left':
        if(square.previousSibling.previousSibling){
	        square.className = '';
	        square.id = '';
        	square.previousSibling.previousSibling.className = 'left';
        	square.previousSibling.previousSibling.id = 'square';
            square.previousSibling.previousSibling.appendChild(div);
        }
        break;
        case 'right':
        if(square.nextSibling.nextSibling){
	        square.className = '';
	        square.id = '';        	
        	square.nextSibling.nextSibling.className = 'right';
        	square.nextSibling.nextSibling.id = 'square';
            square.nextSibling.nextSibling.appendChild(div);
        }

	}

}

//style.top取不到style标签里的值，只能取到内联样式，所以先设置内联样式
(function initStyle(){
	var square = document.querySelector('#square');
    square.style.top = 0;
    square.style.left = 0;
    square.style.transform = 'rotate(0deg)';
    })();


function ttop(){
	var square = document.querySelector('#square');
	if (square.style.top == '0px') {
		return;
	}else{
		square.style.top = (parseInt(square.style.top)-46)+'px';
	}
}


function tbottom(){
	var square = document.querySelector("#square");
	if(square.style.top === "414px"){
		return;
	}else{
	square.style.top = (parseInt(square.style.top)+46)+'px';
	}
}

function tleft(){
	var square = document.querySelector('#square');
	if(square.style.left == '-46px'){
		return;
	}else{
		square.style.left = (parseInt(square.style.left)-46)+'px';
	}
}


function tright(){
	var square = document.querySelector('#square');
	if(square.style.left == '368px'){
		return;
	}else{
		square.style.left = (parseInt(square.style.left)+46)+'px';
	}
}

function mleft(){
	var square = document.querySelector('#square');
	square.style.transform = "rotate(90deg)";
    tleft();
}

function mright(){
	var square = document.querySelector('#square');
	square.style.transform = "rotate(270deg)";
	tright();
}

function mtop(){
	var square = document.querySelector("#square");
	square.style.transform = "rotate(180deg)";
	ttop();
}

function mbottom(){
	var square = document.querySelector("#square");
	square.style.transform = "rotate(0deg)";
	tbottom();
}


function instru(){
	var input = document.getElementsByTagName('input')[0];
	if(input.value === ''){
		return;
	}
	switch(input.value){
		case 'TUN LEF':
			turnLef();
	        break;
	    case 'TUN RIG':
	        turnRig();
	        break;
	    case 'TUN BAC':
	        turnBac();
	        break;
	    case 'GO':
	        go();
	        break;
	    case "TRA LEF":
	        tleft();
	        break;
	    case 'TRA TOP':
	        ttop();
	        break;
	    case 'TRA RIG':
	        tright();
	        break;
	    case 'TRA BOT':
	        tbottom();
	        break;
	    case 'MOV LEF':
	        mleft();
	        break;
	    case 'MOV RIG':
	        mright();
	        break;
	    case 'MOV TOP':
	        mtop();
	        break;
	    case 'MOV BOT':
	        mbottom();
	        break;
	} 
}