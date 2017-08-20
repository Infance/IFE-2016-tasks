
(function downpull(){
	var container = document.getElementById('container');
		container.addEventListener('click',function(){
			if(event.target.children[1].className == 'down-show'){
				event.target.children[1].className = 'down-hidden';
				event.target.children[0].className = 'right-arrow';
			}else if(event.target.children[1].className == 'down-hidden'){
				event.target.children[1].className = 'down-show';
				event.target.children[0].className = 'down-arrow';
			}
		  },false);
	})();

