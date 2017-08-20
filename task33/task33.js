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
	}
}