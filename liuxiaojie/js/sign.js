function $id(id){
	return document.getElementById(id);
}

//密码
var flagPwd=null;
$id("pwd_1").onblur=function(){
	reg=/^.{6}$/;
	if(reg.test($id("pwd_1").value)){
		$id("pre_a").innerHTML="正确";
		flagPwd=true;
	
	}else{
		$id("pre_a").innerHTML="错误";
		flagPwd=false;
	}
}

$id("pwd_2").onblur=function(){
	if($id("pwd_1").value==$id("pwd_2").value){
		console.log("正确")
	    flagPwd=true;
	}
}

//公司名字
var flagName=null;
$id("use_name").onblur=function(){
	reg= /[^\u4E00-\u9FA5]{1,4}$/;
	if(reg.test($id("use_name"))){
		
		$id("uname").innerHTML="正确";
		 flagName=true;
	}else{
		$id("uname").innerHTML="中文命名";
		   flagName=false;
	}
}

//手机号码
var flagTel=null;
$id("tel").onblur=function(){
	reg=/^1.{10}$/;
	if(reg.test($id("tel").value)){
		$id("otel").innerHTML="正确";
		flagTel="true";
	}else{
		$id("otel").innerHTML="错误";
		flagTel="false";
	}
}

$id("next").onclick=function(){
	if(flagPwd && flagName && flagTel ){

      var _json={
      	"name":$id("tel").value,
      	"pwd": $id("pwd_1").value
      }
        document.cookie="userInfo="+JSON.stringify(_json);
      
        setTimeout(function(){
	 		location.href="login.html"
        	
        },2000)
        alert("登录成功")
	}
}









