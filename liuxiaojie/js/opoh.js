
	
var oPoh=document.getElementById("pro_hot");
ajaxGet("js/h1.json",function(res){
	
	var _json = JSON.parse(res);
				var str = "";
				for( var i in _json ){
					str += `<a href="">
				           <img src="${_json[i].src}">
			               </a>`;
				}
				oPoh.innerHTML = str;
});

var oPt=document.getElementById("pct_r_t");
ajaxGet("js/p.json",function(res){
	
	var _json = JSON.parse(res);
				var str = "";
				for(var i=0;i<_json.Left.length;i++){
					str += `<a href="">
				           <img src="${_json.Left[i].src}">
			               </a>`;
				}
                
				oPt.innerHTML = str;
});
