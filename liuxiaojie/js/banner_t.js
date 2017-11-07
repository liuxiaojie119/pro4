$(".tab li").mouseover(function(){
	    $("#products1").show();
	    
		$(".tab-item").addClass("active")
		        .siblings()
		        .removeClass("active");

})

$(".tab").mouseout(function(e){
	  var e=e ||event;
	  e.stopPropagation();
		$(".tab li").removeClass("active");
        $("#products1").hide();
	})