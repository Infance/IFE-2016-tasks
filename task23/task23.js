var traverBtn = document.getElementsByTagName('button')[0],
    searchBtn = document.getElementsByTagName('button')[1],
    _root = document.getElementById('container'),
    input = document.getElementById('input'),
    traversal = [],
    found = false,
    currentNode,
    nowNode;

traverBtn.addEventListener('click',traversalEvent,false);
searchBtn.addEventListener('click',searchEvent,false);

/*层次遍历,将数据按顺序存入栈中*/
function traversalBF(node){
	var queue = [];
	if(node){
		queue.push(node);
		currentNode = queue.shift();
		while(currentNode){
			for (var i = 0; i < currentNode.children.length; i++) {
				queue.push(currentNode.children[i]);
			}
			traversal.push(currentNode);
			currentNode = queue.shift();
		}
	}
};

/*颜色改变*/
function show(){
  if(traversal){
   nowNode = traversal.shift();
   nowNode.style.backgroundColor = 'blue';
   var timer = setTimeout(function(){
   	nowNode.style.backgroundColor = 'white';
   	show();
   },1000);
  }
}

function reset(){
	if(traversal.length){
		nowNode.style.backgroundColor = 'white';
		traversal = [];
		clearTimeout(timer);
	}
}

/*事件函数*/
function traversalEvent(){
	reset();
	traversalBF(_root);
	show();
}


/*查找动画*/
function searchShow(){
	if(traversal.length == 0 && !found){
   	alert('未找到该值');
   }	
  if(traversal){
   nowNode = traversal.shift();
   if(input.value){
   if(nowNode.childNodes[0].nodeValue.toLowerCase().indexOf(input.value) !== -1){
      nowNode.style.backgroundColor = 'yellow';
      found = true;
   }else{	
       nowNode.style.backgroundColor = 'blue';    
	   var timers = setTimeout(function(){
	   	nowNode.style.backgroundColor = 'white';
	   	searchShow();
	   },50);
   }
  }
 } 
}


function searchEvent(){
	traversalBF(_root);
    searchShow();
}