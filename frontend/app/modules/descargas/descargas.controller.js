saludalosojos.controller('descargas.controller', function($scope) {
	$scope.option_active = 'smart';

	var smartImgWidht = 190;

	var smart = [
		{
			url: 'img/descargas/smart/modelo.png',
			name: 'modelo.png'
		},
		{
			url: 'img/descargas/smart/modelo.png',
			name: 'modelo.png'
		},
		{
			url: 'img/descargas/smart/modelo.png',
			name: 'modelo.png'
		},
		{
			url: 'img/descargas/smart/modelo.png',
			name: 'modelo.png'
		}
	]

	$scope.objWidht = smartImgWidht;
	$scope.ulWidht = smartImgWidht;
	$scope.page = 1;
	$scope.imageList = []

	$scope.loadSmart = function() {
		$scope.page = 1;
		$scope.objWidht = smartImgWidht;
		$scope.imageList = smart;
		$scope.ulWidht = $scope.objWidht * $scope.imageList.length;
	}

	$scope.nextPage = function() {
		if ($scope.page < $scope.imageList.length) {
			$scope.page++;
		}
	}

	$scope.prevPage = function() {
		if ($scope.page > 1) {
			$scope.page--;
		}
	}

	$scope.goPage = function(page) {
		$scope.page = page;
	}

});