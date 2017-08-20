var calendar = (function(){
	//创建一个类
	function _calendar(container){
		this.container = container;
		this.date = new Date();
		this.mainEle = null;
		this.selectedEle = null;

		//初始化类
		this.init();
	}


	_calendar.prototype = {

		init:function(){   

             var self = this;
			//日历外框
			this.mainEle = $("<div class='calendar'></div>").appendTo(this.container).css({'width':'350px','height':'380px','border':'1px solid black'});
            
            //日历抬头
            $('<p><strong class="title"></strong><strong class="left-arrow"><-</strong><strong class="right-arrow">-></strong></p>').appendTo(this.mainEle);
            $('p').css({'text-align':'center','margin':'0','padding':'5px','color':'white','backgroundColor':'red'});
            $('.title').css({'text-align':'center','color':'white'});
            $('.left-arrow').css({'float':'left','cursor':'pointer'}).click(function(){
            	self.preMonth();
            });
            $('.right-arrow').css({'float':'right','cursor':'pointer'}).click(function(){
            	self.nextMonth();
            });

            //日历主体
            //星期
            $('<ul><li style="color:red;">日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li style="color:red;">六</li></ul>').appendTo($('div.calendar'));
    		$('ul').css({'margin':'0','padding':'0'});
        	$('li').css({'width':'50px','height':'50px','line-height':'50px','float':'left','backgroundColor':'white','list-style':'none','text-align':'center'});
 			//日期放在渲染函数里了


 			this.renderByDate(this.date);

         
 			//点击选择日期
 			this.mainEle.click(function(){
 				if ($(event.target).hasClass('odate')) {
 					var odate = $('div.odate'),
 					    selectedIndex = odate.index($(self.selectedEle)),
 					    oindex = odate.index($(event.target)),
 					 	dat = new Date(self.date);
 					dat.setDate(dat.getDate() + oindex - selectedIndex);
 					self.selectdate(dat);
 				}
 			});

		},

        
		renderAgain:function(){
			var divo = [],
			    num = 0;
			for(var i = -1;i>-8;i--){
				divo.push($('div.odate').eq(i));
			}
			$(divo).each(function(){
				if(this.css('color') == 'rgb(211, 211, 211)'){
                    num++;
				}else{
					return
				}
			});
            var a= $('div.odate');
			if(num == 7){
				for(var j = -1;j>-8;j--){
					a.eq(j).remove();
				}
				$('div.odate').css({'height':'60px','line-height':'60px'});
			}else{
				return;
			}

			
		},

		preMonth:function(){
			var dat = new Date(this.date);
			dat.setMonth(dat.getMonth()-1);
			this.renderByDate(dat);
		},

		nextMonth:function(){
			var dat = new Date(this.date);
			dat.setMonth(dat.getMonth()+1);
			this.renderByDate(dat);
		},


		renderByDate:function(date){

			$('.title').text(date.getFullYear()+'年'+(date.getMonth()+1)+'月');

			//清除前面的
			$('div.odate').remove();

			for(var i=0;i<42;i++){
				$('<div class="odate"></div>').css({'color':'black','width':'50px','height':'50px','float':'left','text-align':'center','line-height':'50px'}).appendTo(this.mainEle);
			}

		

			//获取第一个要显示的日子
			var day = new Date(date);
			  day.setDate(1);
			  day.setDate(day.getDate()-day.getDay());
            
            var odate = $('div.odate');
			for(var i=0;i<42;i++){
                 odate.eq(i).text(day.getDate());
                 
                 //不同月份变色
                 if(day.getMonth()!==date.getMonth()){
                   odate.eq(i).css({'color':'lightgrey','backgroundColor':'white'});
                 }else{

                //选中变色
                if(day.getDate()==date.getDate()){
                	
                	this.selectedEle = odate.eq(i);
                	this.selectedEle.css({'backgroundColor':'red','color':'white'});
                }else{
                	odate.eq(i).css({'backgroundColor':'white','color':'black'});
                }


                //周末变色
                 if(day.getDay()==0 || day.getDay() == 6){
                 	  if(day.getDate()!==date.getDate()){
                  	 	odate.eq(i).css('color','red');
                  	 	}
               }       
                
			}

			 day.setDate(day.getDate()+1);

		 }
			this.renderAgain();

 

        /*var    divoo = [];
        odate.each(function(){
        	if(this.css('color') !== 'lightgrey'){
        		divoo.push[this];
        	}
        });

        var  otext = $(divoo).text();
        var  lasDate = this.getLastDate(date);
		if(otext.indexOf(lasDate.getDate()) == -1){


			for(var i=0;i<7;i++){
               $('<div class="odate"></div>');
               $('div.odate').eq()
			}
			$('div.odate').css({'color':'black','width':'50px','height':'40px','float':'left','text-align':'center','line-height':'40px'});
		}*/



         this.date = date;

		},


		//获取每月最后一天
       /* getLastDate:function(date){
        	var dat = new Date(date);
        	dat.setMonth(dat.getMonth()+1);
        	dat.setDate(1);
        	dat = new Date(dat.getTime()-1000*60*60*24);
        	return dat;
        },*/


		selectdate:function(date){
			if(date.getMonth()==this.date.getMonth()){
				var oindex = $('div.odate').index(this.selectedEle),
				    nindex = oindex+date.getDate()-this.date.getDate();
				    $('div.odate').eq(nindex).css({'backgroundColor':'red','color':'white'});
				    if(this.date.getDay()==0 || this.date.getDay()==6){
				    	this.selectedEle.css({'backgroundColor':'white','color':'red'});
				    }else{
				    	this.selectedEle.css({'backgroundColor':'white','color':'black'});
				    }
				   this.selectedEle = $('div.odate').eq(nindex)
				   this.date = date;
			}else{
				this.renderByDate(date);
			}
		}

	}
   

   //返回类
   return _calendar;
})();


//实例化类（创造一个日历）
var calendar = new calendar($('div.container'));