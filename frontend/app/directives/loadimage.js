saludalosojos.directive('loadImage', function ($window){
  return {
     link: function(scope, element, attrs) {
     	element.on('load', function () {
     		element.attr("data-width", element.width());
     		element.attr("data-height", element.height());
     	});

     	angular.element($window).bind('resize', function () {
     		element.attr("data-width", element.width());
     		element.attr("data-height", element.height());
     	});

     }
   };
});