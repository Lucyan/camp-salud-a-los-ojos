saludalosojos.controller('descargas.controller', function($scope, $window) {
	$scope.option_active = 'smart';

	var smartImgWidht = 200;

	var smart = [
		{
			url: 'img/descargas/smart/wallpapers/Mobile-wallpapers-1.jpg',
			name: 'Mobile-wallpapers-1.jpg'
		},
		{
			url: 'img/descargas/smart/wallpapers/Mobile-wallpapers-2.jpg',
			name: 'Mobile-wallpapers-2.jpg'
		},
		{
			url: 'img/descargas/smart/wallpapers/Mobile-wallpapers-3.jpg',
			name: 'Mobile-wallpapers-3.jpg'
		},
		{
			url: 'img/descargas/smart/wallpapers/Mobile-wallpapers-4.jpg',
			name: 'Mobile-wallpapers-4.jpg'
		}
	]

	var noteImgWidht = 501;

	var note = [
		{
			url: 'img/descargas/note/wallpapers/1024x768/Chicas-campanario-1024x768.jpg',
			name: 'Chicas-campanario.jpg',
			download: {
				url1920: 'img/descargas/note/wallpapers/1920x1080/Chicas-campanario-1920x1080.jpg',
				url1600: 'img/descargas/note/wallpapers/1600x1200/Chicas-campanario-1600x1200.jpg',
				url1366: 'img/descargas/note/wallpapers/1366x768/Chicas-campanario-1366x768.jpg',
				url1024: 'img/descargas/note/wallpapers/1024x768/Chicas-campanario-1024x768.jpg'
			}
		},
		{
			url: 'img/descargas/note/wallpapers/1024x768/Dumi-wallpaper-1024x768.jpg',
			name: 'Dumi-wallpaper.jpg',
			download: {
				url1920: 'img/descargas/note/wallpapers/1920x1080/Dumi-wallpaper-1920x1080.jpg',
				url1600: 'img/descargas/note/wallpapers/1600x1200/Dumi-wallpaper-1600x1200.jpg',
				url1366: 'img/descargas/note/wallpapers/1366x768/Dumi-wallpaper-1366x768.jpg',
				url1024: 'img/descargas/note/wallpapers/1024x768/Dumi-wallpaper-1024x768.jpg'
			}
		},
		{
			url: 'img/descargas/note/wallpapers/1024x768/Ivana-wallpaper-1024x768.jpg',
			name: 'Ivana-wallpaper.jpg',
			download: {
				url1920: 'img/descargas/note/wallpapers/1920x1080/Ivana-wallpaper-1920x1080.jpg',
				url1600: 'img/descargas/note/wallpapers/1600x1200/Ivana-wallpaper-1600x1200.jpg',
				url1366: 'img/descargas/note/wallpapers/1366x768/Ivana-wallpaper-1366x768.jpg',
				url1024: 'img/descargas/note/wallpapers/1024x768/Ivana-wallpaper-1024x768.jpg'
			}
		},
		{
			url: 'img/descargas/note/wallpapers/1024x768/Lupe-wallpaper-1024x768.jpg',
			name: 'Lupe-wallpaper.jpg',
			download: {
				url1920: 'img/descargas/note/wallpapers/1920x1080/Lupe-wallpaper-1920x1080.jpg',
				url1600: 'img/descargas/note/wallpapers/1600x1200/Lupe-wallpaper-1600x1200.jpg',
				url1366: 'img/descargas/note/wallpapers/1366x768/Lupe-wallpaper-1366x768.jpg',
				url1024: 'img/descargas/note/wallpapers/1024x768/Lupe-wallpaper-1024x768.jpg'
			}
		},
		{
			url: 'img/descargas/note/wallpapers/1024x768/Mariana-wallpaper-1024x768.jpg',
			name: 'Mariana-wallpaper.jpg',
			download: {
				url1920: 'img/descargas/note/wallpapers/1920x1080/Mariana-wallpaper-1920x1080.jpg',
				url1600: 'img/descargas/note/wallpapers/1600x1200/Mariana-wallpaper-1600x1200.jpg',
				url1366: 'img/descargas/note/wallpapers/1366x768/Mariana-wallpaper-1366x768.jpg',
				url1024: 'img/descargas/note/wallpapers/1024x768/Mariana-wallpaper-1024x768.jpg'
			}
		}
	]

	$scope.setSize = function() {
		switch ($scope.option_active) {
			case 'note':
				var originalMascaraWidth = 660;
				var originalMascaraHeight = 394;
				var originalFotoWidht = noteImgWidht;
				var espacio = 300;
				break;
			default:
				var originalMascaraWidth = 225;
				var originalMascaraHeight = 481;
				var originalFotoWidht = smartImgWidht;
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