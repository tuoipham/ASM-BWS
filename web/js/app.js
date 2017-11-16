var LOGIN_API = "https://youtube-api-challenger.appspot.com/authentication";
var MEMBER_API = "https://youtube-api-challenger.appspot.com/members";
var app = angular.module('my-app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {	
	$routeProvider
		.when("/member/login",{			
			templateUrl: "pages/login.html"
		})
  		.when("/member/register", {      		
    		templateUrl: "pages/register.html"
  		})
        .when("/youtube", {
            templateUrl: "pages/youtube.html"
        })
		.otherwise({
     		redirectTo: '/youtube',
  		});
}]);

app.controller('authenticationController', function ($scope, $http) {
    var secretToken = localStorage.getItem("secretToken");
    var userId = localStorage.getItem("userId");
    $http({
        method : "GET",
        url : MEMBER_API + "/" + userId,
        headers: {
			"Authorization": secretToken
		}
    }).then(function mySuccess(response) {
        $scope.loggedInUsername = response.data.data.attributes.usernamelogin;
        $scope.isLoggedIn = true;
    }, function myError(response) {
        $scope.isLoggedIn = false;
        console.log(response.statusText);
    });

    $scope.handleLogout = function () {
    	if(confirm("Bạn có chắc muốn thoát khỏi hệ thống?")){
            localStorage.removeItem("secretToken");
            localStorage.removeItem("userId");
            $scope.isLoggedIn = false;
            alert("Logout thành công.");
		}
    };
});

// Youtube video page controller.
app.controller('youtubeController', function($scope, $http){
    var videoFrame = document.getElementById("video-frame");
    $scope.loadVideo = function(keyword){
        var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&videoEmbeddable=true&videoSyndicated=true&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
        $http({
            method : "GET",
            url : YOUTUBE_API
        }).then(function mySuccess(response) {
			$scope.listVideo = response.data.items;
        }, function myError(response) {
            console.log(response.statusText);
        });
	}
    $scope.showVideo = function (videoId) {
        videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
        $scope.isShowing = true;
    }
    $scope.closeModal = function(){
        videoFrame.src = "";
        $scope.isShowing = false;
	}
    $scope.loadVideo('Khởi my');
});

// End of youtube video page controller.

// Login page controller.
app.controller('loginController', function($scope, $http){
	$scope.loginData = {
		"data": {
			"type": "MemberLogin",
			"attributes": {
				"username": "",
				"password": "",
			}
		}
	};

	$scope.handleLogin = function(){
		$http({
	        method : "POST",
	        url : LOGIN_API,
	        data: JSON.stringify($scope.loginData)
	    }).then(function mySuccess(response) {
	    	alert("Đăng nhập thành công.");
	        localStorage.setItem("secretToken", response.data.data.attributes.secretToken);
            localStorage.setItem("userId", response.data.data.attributes.userId);
            window.location.reload();
        }, function myError(response) {
	        console.log(response.statusText);
	    });
	}
});

// // End of login page controller.


// Register page controller.
app.controller('registerController', function($scope,$http){

});
// End of register page controller.