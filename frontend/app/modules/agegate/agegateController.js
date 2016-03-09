saludalosojos.controller("agegateController", function ($scope, Cookie, $location) {

	Cookie.checkCookie({
		success: function (){
			$location.path("/");
		}
	});

	$scope.soymayor = function (response) {
		if (response) {
			Cookie.setCookie(function (){
				$location.path("/");
			});
		}
	}

});