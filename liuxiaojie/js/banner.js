/*function $id(id){
		return document.getElementById(id);
	}
	var oUl = $id("img-list");
	var imgList = oUl.children;
	var ulist = $id("banner-nav-list").children;
   	var timer = null;
   	timer = setInterval( autoPlay , 2000 );
   	var index = 0;
   	function autoPlay(){
   		index++;
   		startMove( oUl , { "left" : -imgList[0].offsetWidth*index },function (){
	 		//第四张图片运动完成后index == 4   oUl的left值重新变成0  
	 		if( index==4 ){
	 			oUl.style.left = 0;
	 			index = 0;
	 		}
   		} );
   		
   		for( var i = 0 ; i < ulist.length ; i++ ){
   			ulist[i].className = "";
   		}
   		//当index值为4时  应该 1数字高亮
   		ulist[index==4?0:index].className = "active";	
   	}
   	
   	$("banner").onmouseover = function(){
   		clearInterval(timer);
   	}
   	$("banner").onmouseout = function(){
   		timer = setInterval( autoPlay , 2000 );
   	}*/
   	