'use strict';

var saludalosojos = angular.module("saludalosojosApp",["ngRoute","ui.bootstrap", "ngProgress"]);

/**
 *  Main App Controller
 **/

saludalosojos.controller('mainController', ['$scope', function ($scope) {
	$scope.$on('$routeChangeStart', function(scope, next, current) {
		if (next.$$route.controller == 'homeController' || next.$$route.controller == 'agegateController') {
			$scope.home_active = true;
		} else {
			$scope.home_active = false;
		}
	});
}]);
