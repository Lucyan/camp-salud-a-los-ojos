'use strict';

var saludalosojos = angular.module("saludalosojosApp",["ngRoute","ui.bootstrap", "ngAnimate"]);

/**
 *  Main App Controller
 **/

saludalosojos.controller('mainController', ['$scope', 'Cookie', '$location', function ($scope, Cookie, $location) {

	$scope.view_video = false;

	Cookie.checkCookie({
		error: function (){
			$location.path("/agegate");
		}
	});

	$scope.$on('$routeChangeStart', function(scope, next, current) {
		if (next.$$route != undefined) {
			if (next.$$route.controller == 'homeController' || next.$$route.controller == 'agegateController') {
				$scope.home_active = true;
				if (next.$$route.controller == 'agegateController') {
					$scope.show_menu = false;
				} else {
					$scope.show_menu = true;
				}
			} else {
				$scope.home_active = false;
				$scope.show_menu = true;
			}
		}
	});

	$scope.range = function(min, max, step) {
		step = step || 1;
		var input = [];
		for (var i = min; i <= max; i += step) {
			input.push(i);
		}
		return input;
	};

	$scope.isActive = function (viewLocation) {
		if (viewLocation == '/galeria')
			return viewLocation === '/' + $location.path().split('/')[1];
		
		return viewLocation === $location.path();
	}

	$scope.showVideo = function($event) {
		$event.preventDefault();
		$scope.view_video = true;
	}

	$scope.closeVideo = function() {
		$scope.view_video = false;
	}
}]);
