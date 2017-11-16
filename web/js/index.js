var app = angular.module("myApp", []);
app.controller('myController', function($scope, $http){
	var videoFrame = document.getElementById("video-frame");
	$http.get("https://content.googleapis.com/youtube/v3/search?q=mytam&type=video&videoEmbeddable=true&videoSyndicated=true&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc")
	.then(function(response) {
		$scope.listVideo = response.data.items;
	});

	$scope.showVideo = function(videoId){
		videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
		setTimeout(function(){ 
			$scope.isShowVideo = true;
		}, 300);
	}

	$scope.closeVideo = function(){
		videoFrame.src = "";
		$scope.isShowVideo = false;
	} 
})