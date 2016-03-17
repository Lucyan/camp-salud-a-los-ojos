saludalosojos.controller("modelosController", function ($scope, $location, $routeParams, $window, $timeout) {

	var timeID = null;

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

	$scope.$watch('pageY', function(newValue, oldValue) {
		scrollImage(newValue);
	});

	var scrollImage = function (pageY) {
		if (angular.element($window).width() > 767) {
			var imgHeight = $('#modelos .img-modelo').height() - angular.element($window).height();
			if (imgHeight > 0) {
				if (pageY < 60) {
					var posMargin = (pageY * 100) / 60;
					imgHeight = (imgHeight * 20) / 100;
				} else {
					var posMargin = pageY;
				}

				var finalPos = (imgHeight * posMargin) / 100;

				$('#modelos .img-modelo').css('margin-top', finalPos * -1);

				if (timeID != null) {
					clearTimeout(timeID);
					$('#modelos .img-modelo').removeClass('up');
				}

				timeID = setTimeout(function() {
					$('#modelos .img-modelo').addClass('up').css('margin-top', '-200px');
				}, 3000)
			}
		}
	}

	if ($scope.pageY != undefined) {
		scrollImage($scope.pageY);
	}

	$scope.control = function (move, $event) {

		if (move == "left") {
			if ($scope.indeximage > 0) {
				var img = jQuery(".img:eq(" + $scope.indeximage + ")").find("img")[0];
				scrollImage(img, $event.pageY);
				$scope.indeximage--;
				jQuery(".img:eq(" + $scope.indeximage + ")").removeClass("next");
			}
		} else {
			if ($scope.indeximage < 2) {
				jQuery(".img:eq(" + $scope.indeximage + ")").addClass("next");
				$scope.indeximage++;
				var img = jQuery(".img:eq(" + $scope.indeximage + ")").find("img")[0];
				scrollImage(img, $event.pageY);
			}
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

	$scope.title = "Conoce a las chicas de nuestro calendario campanario 2016 y hagamos un %23Saludalosojos";

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