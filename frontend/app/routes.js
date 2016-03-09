saludalosojos.config(function ($routeProvider){

  $routeProvider
  .when('/agegate',
  {
    templateUrl: 'app/modules/agegate/agegate.template.html'
  })
  .when('/',
  {
    templateUrl: 'app/modules/home/home.template.html',
    controller: 'homeController'
  })
  .when('/static-page',
  {
    templateUrl: 'app/modules/staticPage/staticPage.template.html'
  })
  .otherwise({
    redirectTo: '/'
  });

});
