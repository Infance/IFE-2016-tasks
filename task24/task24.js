var traverBtn = document.getElementsByTagName('button')[0],
    searchBtn = document.getElementsByTagName('button')[1],
    del = document.getElementById('del'),
    add = document.getElementById('add'),
    addtext = document.getElementById('addtext'),
    _root = document.getElementById('container'),
    input = document.getElementById('input'),
    delqueue=[],
    traversal = [],
    found = false,
    currentNode,
    nowNode;

traverBtn.addEventListener('click',traversalEvent,false);
searchBtn.addEventListener('click',searchEvent,false);

/*层次遍历,将数据按顺序存入栈中*/
function traversalBF(node){
	if(node){
    for (var i = 0; i < node.children.length; i++) {
      traversalBF(node.children[i]);
    }
    traversal.push(node);
  }
}



/*颜色改变*/
function show(){
  if(traversal.length){
   nowNode = traversal.shift();
   nowNode.style.backgroundColor = 'blue';
   var timer = setTimeout(function(){
   	nowNode.style.backgroundColor = 'white';
   	show();
   },50);
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
  reset();
	traversalBF(_root);
    searchShow();
}




(function select(){
  traversalBF(_root);
  for (var i = 0; i < traversal.length; i++) {
      traversal[i].addEventListener('click',function(){
        event.target.style.backgroundColor = 'red';
      },false);
  }
  traversal = [];
})();



function deleteEle(){
  traversalBF(_root);
  for (var i = 0; i < traversal.length; i++) {
    if(traversal[i].style.backgroundColor == 'red'){
      delqueue.push(traversal[i]);
    }
  }
  for (var j = 0; j < delqueue.length; j++) {
      delqueue[j].parentNode.removeChild(delqueue[j]);
  }
  traversal = [];
  delqueue = [];
}

del.addEventListener('click',deleteEle,false);



function addNode(){
  traversalBF(_root);
  for (var i = 0; i < traversal.length; i++) {
      if(traversal[i].style.backgroundColor == 'red'){
        if(addtext.value){
          var div = document.createElement('div');
          div.innerHTML = addtext.value;
          traversal[i].appendChild(div);
          traversal[i].style.backgroundColor = 'white';
          addtext.value = '';
        }
      }
  }
  traversal = [];
}


add.addEventListener('click',addNode,false);