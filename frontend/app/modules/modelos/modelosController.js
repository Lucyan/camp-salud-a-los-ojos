saludalosojos.controller("modelosController", function ($scope, $location, $routeParams, $window, $timeout) {

	angular.element(".modelo-thumbnail.no-active").removeClass("no-active");
	angular.element(".modelo-thumbnail.active").removeClass("active");

	var modelos_slug = [
		"mariana",
		"ivana",
		"lupe",
		"dumi"
	];

	$scope.modelos = [
		{
			imgs : [
				"modelos/mariana/1.jpg",
				"modelos/mariana/2.jpg",
				"modelos/mariana/3.jpg"
			],
			thumbnail : "modelos/thumbnails/1.png",
			"modelo" : "mariana"
		},
		{
			imgs : [
				"modelos/ivana/1.jpg",
				"modelos/ivana/2.jpg",
				"modelos/ivana/3.jpg"
			],
			thumbnail : "modelos/thumbnails/2.png",
			modelo: "ivana"
		},
		{
			imgs : [
				"modelos/lupe/1.jpg",
				"modelos/lupe/2.jpg",
				"modelos/lupe/3.jpg"
			],
			thumbnail : "modelos/thumbnails/3.png",
			modelo: "lupe"
		},
		{
			imgs : [
				"modelos/dumi/1.jpg",
				"modelos/dumi/2.jpg",
				"modelos/dumi/3.jpg"
			],
			thumbnail : "modelos/thumbnails/4.png",
			modelo: "dumi"
		}
	];

	$scope.url = $location.absUrl();

	if (!$routeParams.modelo) {
		$location.path("/galeria/" + modelos_slug[0]);
	} else {
		if (modelos_slug.indexOf($routeParams.modelo) == -1)
			$location.path("/404/");
		$scope.modelo = $routeParams.modelo;
	}

	$scope.imgs = [];
	for (var i in $scope.modelos) {
		if ($scope.modelos[i].modelo == $scope.modelo) {
			$scope.imgs = $scope.modelos[i].imgs;
			break;
		}
	}

	$scope.indeximage = 0;

	$scope.control = function (move) {	
		if (move == "left") {
			if ($scope.indeximage > 0) {
				$scope.indeximage--;
				jQuery(".img:eq(" + $scope.indeximage + ")").removeClass("next");
				if (angular.element($window).width() > 767) {
					$timeout(function (){
						jQuery(".img:eq(" + ($scope.indeximage+1) + ")").find("img").css("margin-top", -200);
					}, 1000);
				}
			}
		} else {
			if ($scope.indeximage < 2) {
				jQuery(".img:eq(" + $scope.indeximage + ")").addClass("next");
				if (angular.element($window).width() > 767) {
					$timeout(function (){
						jQuery(".img:eq(" + ($scope.indeximage-1) + ")").find("img").css("margin-top", -200);
					}, 1000);
				}
				$scope.indeximage++;
			}
		}
	}

	$scope.scrollImage = function ($event) {

		if (angular.element($window).width() > 767) {
			var height_window = angular.element($window).height();
			var height_footer = angular.element("#site-footer").outerHeight();
			var height = height_window - height_footer;

			var height_image = angular.element($event.currentTarget).attr("data-height");

			var scroll = ( height / height_image ) * height;

			var point = $event.pageY / height;

			var marginTop = (point * (scroll)) * 8;

			marginTop = marginTop * -1;
			
			if (marginTop > 0)
				marginTop = 0;
			else {
				var max = (height_image - height_window) * -1;
				if (marginTop < max)
					marginTop = max;
			}

			angular.element($event.currentTarget).css("margin-top", marginTop);
		}
	}

	$scope.openmodal = function (){
		angular.element(".modal-compartir-modelo").css("display", "block");
		$timeout(function (){
			angular.element(".modal-compartir-modelo").addClass("open");
			angular.element(".modal-compartir-modelo").focus();
		}, 300);
	}

	var noclose = false;

	$scope.closemodal = function ($event){
		if (!noclose) {
			var close = false;
			if (!$event) {
				close = true;
			} else {
				if ($event.keyCode == 27)
					close = true;
			}

			if (close) {
				angular.element(".modal-compartir-modelo").removeClass("open");
				angular.element(".modal-compartir-modelo").css("display", "block");	
				$timeout(function (){
					angular.element(".modal-compartir-modelo").css("display", "none");
				}, 300);
			}
		}
	}

	$scope.title = "hello world";

	$scope.share = function($event) {
		noclose = true;
		$window.open(angular.element($event.currentTarget).attr("href"), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
		$timeout(function () {
			noclose = false;
		},300);
		return false;
	}

	var noclosethumbnail = false;

	$scope.selectThumbnail = function ($event) {
		var window_width = angular.element($window).width();
		if (window_width < 768) {
			noclosethumbnail = true;
			$timeout(function () {
				noclosethumbnail = false;
			},300);
			if (!angular.element("#modelos .thumbnails").hasClass("open")) {
				angular.element("#modelos .thumbnails").addClass("open")
				$event.preventDefault();	
			}
		}
	}

	$scope.closeThumbnails = function () {
		if (!noclosethumbnail)
			angular.element("#modelos .thumbnails").removeClass("open");
	}

});