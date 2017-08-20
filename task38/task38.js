var data = {'小明':[80,90,70,240],'小红':[90,60,90,240],'小亮':[60,100,70,230]};

/*渲染表格*/
function render(){
	var table = document.getElementsByTagName('table')[0],
	    tbody = document.getElementsByTagName('tbody'),
	    th = document.getElementsByTagName('th');
	    td = document.getElementsByTagName('td');
	table.style.borderCollapse = 'collapse';
	for (var i = 0; i < th.length; i++) {
		th[i].style.backgroundColor = 'black';
		th[i].style.fontWeight =  'bold';
		th[i].style.color = 'white';
		th[i].style.width = '180px';
		th[i].style.height = '50px';
		th[i].style.border = '2px solid grey';
	}
	for (var j = 0; j < td.length; j++) {
		td[j].style.width = '180px';
		td[j].style.height = '50px';
		td[j].style.border = '2px solid grey';
		td[j].style.textAlign = 'center';
	}
}

/*插入数据*/
function addData(){
	var tbody = document.getElementsByTagName('tbody')[0];
	for(var x in data){
       var tr = document.createElement('tr');
		tr.innerHTML = '<td>'+x+'</td><td>'+data[x][0]+'</td><td>'+data[x][1]+'</td><td>'+data[x][2]+'</td><td>'+data[x][3]+'</td>';
        tbody.appendChild(tr);
	}
	render();
}

addData();


/*重建数组*/
function sortup(list){
	var datanum = [],
	    datad = [],
	    datal = {},
	    td = document.getElementsByTagName('td'),
	    datax = ['小明','小红','小亮'];
	   for (var z = 0; z < td.length; z++) {
	   	td[z].parentNode.parentNode.removeChild(td[z].parentNode);
	   }
	   for (var i = 0; i < datax.length; i++) {
	   	datanum.push(data[datax[i]][list]);
	   }
	   datanum.sort(function(a,b){
	   	return b-a;
	   });
    for (var j = 0; j < datanum.length; j++) {
    	 for (var x = 0; x < datax.length; x++) {
    	 	if(data[datax[x]][list] == datanum[j]){
              datad.push(datax[x]);
    	 	}
    	 }
    }
    for (var y = 0; y < datad.length; y++) {
    	datal[datad[y]] = data[datad[y]];
    }
    data = datal;
    addData();
}



function sortdown(list){
	var datanum = [],
	    datad = [],
	    datal = {},
	    td = document.getElementsByTagName('td'),
	    datax = ['小明','小红','小亮'];
	   for (var z = 0; z < td.length; z++) {
	   	td[z].parentNode.parentNode.removeChild(td[z].parentNode);
	   }
	   for (var i = 0; i < datax.length; i++) {
	   	datanum.push(data[datax[i]][list]);
	   }
	   datanum.sort(function(a,b){
	   	return a-b;
	   });
    for (var j = 0; j < datanum.length; j++) {
    	 for (var x = 0; x < datax.length; x++) {
    	 	if(data[datax[x]][list] == datanum[j]){
              datad.push(datax[x]);
    	 	}
    	 }
    }
    for (var y = 0; y < datad.length; y++) {
    	datal[datad[y]] = data[datad[y]];
    }
    data = datal;
    addData();
}