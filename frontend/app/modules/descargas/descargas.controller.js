saludalosojos.controller('descargas.controller', function($scope, $window) {
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

	var noteImgWidht = 501;

	var note = [
		{
			url: 'img/descargas/note/modelo.png',
			name: 'modelo.png',
			download: {
				url1920: 'img/descargas/note/modelo.png',
				url1600: 'img/descargas/note/modelo.png',
				url1366: 'img/descargas/note/modelo.png',
				url1024: 'img/descargas/note/modelo.png'
			}
		},
		{
			url: 'img/descargas/note/modelo.png',
			name: 'modelo.png',
			download: {
				url1920: 'img/descargas/note/modelo.png',
				url1600: 'img/descargas/note/modelo.png',
				url1366: 'img/descargas/note/modelo.png',
				url1024: 'img/descargas/note/modelo.png'
			}
		},
		{
			url: 'img/descargas/note/modelo.png',
			name: 'modelo.png',
			download: {
				url1920: 'img/descargas/note/modelo.png',
				url1600: 'img/descargas/note/modelo.png',
				url1366: 'img/descargas/note/modelo.png',
				url1024: 'img/descargas/note/modelo.png'
			}
		},
		{
			url: 'img/descargas/note/modelo.png',
			name: 'modelo.png',
			download: {
				url1920: 'img/descargas/note/modelo.png',
				url1600: 'img/descargas/note/modelo.png',
				url1366: 'img/descargas/note/modelo.png',
				url1024: 'img/descargas/note/modelo.png'
			}
		}
	]

	$scope.setSize = function() {
		switch ($scope.option_active) {
			case 'note':
				var originalMascaraWidth = 660;
				var originalMascaraHeight = 394;
				var originalFotoWidht = 501;
				var espacio = 300;
				break;
			default:
				var originalMascaraWidth = 225;
				var originalMascaraHeight = 481;
				var originalFotoWidht = 190;
				var espacio = 200;
				break;
		}

		$scope.contentHeight = $scope.windowHeight - espacio;
		var percent = ($scope.contentHeight * 100) / originalMascaraHeight;

		$scope.contentWidth = (percent * originalMascaraWidth) / 100;
		$scope.objWidht = (percent * originalFotoWidht) / 100;
		$scope.ulWidht = $scope.objWidht * $scope.imageList.length;
	}


	$scope.objWidht = smartImgWidht;
	$scope.ulWidht = smartImgWidht;
	$scope.page = 1;
	$scope.imageList = []

	$scope.initData = function(option) {
		switch (option) {
			case 'note':
				$scope.objWidht = noteImgWidht;
				$scope.imageList = note;
				break;
			default:
				$scope.objWidht = smartImgWidht;
				$scope.imageList = smart;
				break;
		}

		$scope.setSize();

		$scope.page = 1;
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




	var w = angular.element($window);
	w.bind('resize', function () {
		$scope.setSize();
        $scope.$apply();
    });

});