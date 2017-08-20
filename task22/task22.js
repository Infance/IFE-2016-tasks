var preOrderBtn = document.getElementsByTagName('button')[0],
    inOrderBtn = document.getElementsByTagName('button')[1],
    postOrderBtn = document.getElementsByTagName('button')[2],
    bfOrderBtn = document.getElementsByTagName('button')[3],
    root = document.getElementById('container'),
    _last = document.getElementById('_last'),
    traversal = [],
    nowNode = null,
    timer,
    currentNode;

/*前序遍历*/
function preOrder(node){
	if (node) {
		traversal.push(node);
		preOrder(node.children[0]);
		preOrder(node.children[1]);
	}
}

/*中序遍历*/
function inOrder(node){
	if(node){
		inOrder(node.children[0]);
		traversal.push(node);
		inOrder(node.children[1]);
	}
}

/*后序遍历*/
function postOrder(node){
	if(node){
		postOrder(node.children[0]);
		postOrder(node.children[1]);
		traversal.push(node);
	}
}

/*层次遍历*/
function bfOrder(node){
	var queue = [];
	queue.push(node);
	currentNode = queue.shift();
	while(currentNode){
		for (var i = 0,length = currentNode.children.length; i < length; i++) {
			queue.push(currentNode.children[i]);
        }
        traversal.push(currentNode);
        currentNode = queue.shift();
	}
}

/*显示颜色动画*/
function show(){
    if(traversal){
    	nowNode = traversal.shift();
    	nowNode.style.backgroundColor = 'blue';
	    timer = setTimeout(function(){
    	nowNode.style.backgroundColor = 'white';
    	show();
        },1000);
  }
}


/*如果栈里还有数字，说明遍历未结束，改变颜色，清除计时器，清空数组*/
function reset(){
	if(traversal.length>0){
		nowNode.style.backgroundColor = 'white';
		clearTimeout(timer);
		traversal = [];
	}
}

/*按钮事件*/
function preOrderEvent(){
	reset();
	preOrder(root);
	show();
}

function inOrderEvent(){
	reset();
	inOrder(root);
	show();
}

function postOrderEvent(){
	reset();
	postOrder(root);
	show();
}

function bfOrderEvent(){
	reset();
	bfOrder(root);
	show();
}

/*绑定事件*/

preOrderBtn.addEventListener('click',preOrderEvent,false);
inOrderBtn.addEventListener('click',inOrderEvent,false);
postOrderBtn.addEventListener('click',postOrderEvent,false);
bfOrderBtn.addEventListener('click',bfOrderEvent,false);

