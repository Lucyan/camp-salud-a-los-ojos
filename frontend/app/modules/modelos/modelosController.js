saludalosojos.controller("modelosController", function ($scope, $location, $routeParams) {

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
	]

	if (!$routeParams.modelo) {
		$location.path("/galeria/" + modelos_slug[0]);
	} else {
		if (modelos_slug.indexOf($routeParams.modelo) == -1)
			$location.path("/404/");
		$scope.modelo = $routeParams.modelo;
	}

	$scope.modeloActiva = function (modelo) {
		if ($scope.modelo == modelo)
			return true;
		return false;
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
			}
		} else {
			if ($scope.indeximage < 2) {
				jQuery(".img:eq(" + $scope.indeximage + ")").addClass("next");
				$scope.indeximage++;
			}
		}
	}
});