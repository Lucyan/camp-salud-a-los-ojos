saludalosojos.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/',
	{
		templateUrl: 'app/modules/home/home.template.html',
		controller: 'homeController'
	})
	.otherwise({
		redirectTo: '/'
	});

}]);
