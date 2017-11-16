$(document).ready(function(){
	$("[name='username']").focusin(function(){
		$(this).after("<em class='xoahet' style='display: none;'>Tài khoản phải trên 7 ký tự và không tồn tại khoảng trắng.</em>");
		$(this).siblings("em").css("display", "inline").fadeOut(2000);
		$("b.nhaploi").remove();	
	});
	$("[name='username']").focusout(function(){
		$("em.xoahet").remove();
		if ($(this).val().length == 0 || $(this).val().length <= 7) {
			$(this).parent().siblings("span").css("display","none");
		}else {
			$(this).parent().siblings("span").css("display","inline-block");
		}
	});
	$("[name='username']").keyup(function(){
		for (var i = 0; i < $(this).val().length; i++) {
			if ($(this).val()[i] === " ") {
				$(this).after("<span class='checkchoi'>Không được chứa ký tự khoảng trắng.</span>");
				$(this).css("background", "pink");
				$("span.checkchoi").css({"color": "red"});
				$(this).parent().siblings("span").css("display","none");
			}else {
				$("span").remove(".checkchoi");
				$(this).css("background", "none");
				if ($(this).val().length > 7) {
					$(this).parent().siblings("span").css("display","inline-block");
				}else {
					$(this).parent().siblings("span").css("display","none");
				}
			}
		}        
    });
    $("[name='password']").focusin(function(){
		$(this).after("<em class='xoahet' style='display: none;'>Mật khẩu phải trên 7 ký tự và không tồn tại khoảng trắng.</em>");
		$(this).siblings("em").css("display", "inline").fadeOut(2000);	
		$("b.nhaploi").remove();	
	});
	$("[name='password']").focusout(function(){
		$("em.xoahet").remove();
		if ($(this).val().length == 0 || $(this).val().length <= 7) {
			$(this).parent().siblings("span").css("display","none");
		}else {
			$(this).parent().siblings("span").css("display","inline-block");
		}
	});
	$("[name='password']").keyup(function(){
		for (var i = 0; i < $(this).val().length; i++) {
			if ($(this).val()[i] === " ") {
				$(this).after("<span class='checkchoi'>Không được chứa ký tự khoảng trắng.</span>");
				$(this).css("background", "pink");
				$("span.checkchoi").css({"color": "red"});
				$(this).parent().siblings("span").css("display","none");
			}else {
				$("span").remove(".checkchoi");
				$(this).css("background", "none");
				if ($(this).val().length > 7) {
					$(this).parent().siblings("span").css("display","inline-block");
				}else {
					$(this).parent().siblings("span").css("display","none");
				}
			}
		}        
    });
    $("[name='fullName']").focusin(function(){
		$(this).after("<em class='xoahet' style='display: none;'>Tên phải trên 7 ký tự và không tồn tại khoảng trắng.</em>");
		$(this).siblings("em").css("display", "inline").fadeOut(2000);	
		$("b.nhaploi").remove();	
	});
	$("[name='fullName']").focusout(function(){
		$("em.xoahet").remove();
		if ($(this).val().length == 0 || $(this).val().length <= 7) {
			$(this).parent().siblings("span").css("display","none");
		}else {
			$(this).parent().siblings("span").css("display","inline-block");
		}
	});
	$("[name='fullName']").keyup(function(){
		for (var i = 0; i < $(this).val().length; i++) {
			if ($(this).val()[i] === " ") {
				$(this).after("<span class='checkchoi'>Không được chứa ký tự khoảng trắng.</span>");
				$(this).css("background", "pink");
				$("span.checkchoi").css({"color": "red"});
				$(this).parent().siblings("span").css("display","none");
			}else {
				$("span").remove(".checkchoi");
				$(this).css("background", "none");
				if ($(this).val().length > 7) {
					$(this).parent().siblings("span").css("display","inline-block");
				}else {
					$(this).parent().siblings("span").css("display","none");
				}
			}
		}        
    });
    $("[name='email']").focusin(function(){
		$(this).after("<em class='xoahet' style='display: none;'>Email phải trên 7 ký tự và không tồn tại khoảng trắng.</em>");
		$(this).siblings("em").css("display", "inline").fadeOut(2000);		
		$("b.nhaploi").remove();
	});
	$("[name='email']").focusout(function(){
		$("em.xoahet").remove();
		if ($(this).val().length == 0 || $(this).val().length <= 7) {
			$(this).parent().siblings("span").css("display","none");
		}else {
			$(this).parent().siblings("span").css("display","inline-block");
		}
	});
	$("[name='email']").keyup(function(){
		for (var i = 0; i < $(this).val().length; i++) {
			if ($(this).val()[i] === " ") {
				$(this).after("<span class='checkchoi'>Không được chứa ký tự khoảng trắng.</span>");
				$(this).css("background", "pink");
				$("span.checkchoi").css({"color": "red"});
				$(this).parent().siblings("span").css("display","none");
			}else {
				$("span").remove(".checkchoi");
				$(this).css("background", "none");
				if ($(this).val().length > 7) {
					$(this).parent().siblings("span").css("display","inline-block");
				}else {
					$(this).parent().siblings("span").css("display","none");
				}
			}
		}        
    });
    $("[name='reppassword']").keyup(function(){
    	if ($("[name='reppassword']").val().length > 0 && $("[name='reppassword']").val() == $("[name='password']").val()) {
    		$(this).parent().siblings("span").css("display","inline-block");
    		$("[name='reppassword']").css("background", "none");
    	}else {
    		$(this).parent().siblings("span").css("display","none");	
    	}
    });
    $("[name='reppassword']").focusout(function(){
    	if ($(this).val() != $("[name='password']").val()) {
    		$(this).after("<span class='suapass'>Nhập sai mật khẩu, nhập lại!.</span>");
    		$(this).css("background", "pink");
    		$("span.suapass").css("color", "red");
    	}else {
    		$("[name='reppassword']").css("background", "none");
    	}
    });
    $("[name='reppassword']").focusin(function(){
    	$("span.suapass").remove();
    	if ($("[name='reppassword']").val().length > 0 && $("[name='reppassword']").val() == $("[name='password']").val()) {
    		$(this).parent().siblings("span").css("display","inline-block");
    		$("[name='reppassword']").css("background", "none");
    	}
    	$("b.nhaploi").remove();
    });
    $("[name='birthDay']").focusout(function(){
    	if ($(this).val().length > 0) {
    		$(this).parent().siblings("span").css("display","inline-block");
    	}
    	$("b.nhaploi").remove();
    });

    $("#bntSubmitmember").click(function(){
	for (var i = 0; i < 6; i++) {
		if ($("span.glyphicon-ok").eq(i).css("display") == "none") {
			$("span.glyphicon-ok").eq(i).after("<b class='nhaploi' style='color: red;'>Nhập sai!</b>");
		}
	}
	if ($("span.glyphicon-ok").css("display") == "inline-block") {
			var REGISTER_URL = "https://youtube-api-challenger.appspot.com/members";
			var username = $("input[name=username]").val();
			var password = $("input[name=password]").val();
			var fullName = $("input[name=fullName]").val();
			var email = $("input[name=email]").val();
			var birthday = 15066499900231;
			var gender = 1;

			var object = {
				"data":{
				    "type":"Member",
				     "attributes":{
				        "username": username,
				        "password": password,
				        "fullName": fullName,
				        "email": email,
				        "birthDay": birthday,
				        "gender": gender
			      	}
			    }
			};
			$.ajax({
				url: REGISTER_URL,
				type: "POST",
				data: JSON.stringify(object),
				success: function(response){
					console.log(response);
					alert("Đăng ký thành công, xin đăng nhập!");
				},
				error: function(jqXHR, exception){			
					var jsonObject = JSON.parse(jqXHR.responseText);						
					alert(jsonObject.errors[0].title + " " + jsonObject.errors[0].detail);
				}
			});
		}
	});
});
// var app = angular.module('myApp', []);
// app.controller('formCtrl', function($scope, $http) {
// 	$scope.submit = function(){
// 		$scope.sendData.data.type = "MemberLogin";
//     	console.log($scope.sendData);
//     	$http({
//     		method: "POST",
//     		url: "https://youtube-api-challenger.appspot.com/authentication",
//     		data: $scope.sendData
//     	}
//     	).then(function(reponse){
//     		$scope.user = reponse.data.records;
//     	}).then(function mySuccess(reponse){
//     		$scope.user = response.data;
//     	}), function myError(response) {
//     		$scope.user = response.statusText;
//     	}
// 	}
 
// });
