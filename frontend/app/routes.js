saludalosojos.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/agegate',
	{
		templateUrl: 'app/modules/agegate/agegate.template.html',
		controller: 'agegateController'
	})
	.when('/',
	{
		templateUrl: 'app/modules/home/home.template.html',
		controller: 'homeController'
	})
	.when('/descargas',
	{
		templateUrl: 'app/modules/descargas/descargas.template.html',
		controller: 'descargas.controller'
	})
	.when('/galeria',
	{
		templateUrl: 'app/modules/modelos/modelos.template.html',
		controller: 'modelosController'
	})
	.when('/galeria/:modelo',
	{
		templateUrl: 'app/modules/modelos/modelos.template.html',
		controller: 'modelosController'
	})
	.when('/404',
	{
		templateUrl: 'app/modules/404/404.template.html'
	})
	.otherwise({
		redirectTo: '/404'
	});

}]);
