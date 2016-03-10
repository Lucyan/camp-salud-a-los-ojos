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

            if (angular.element($window).width() < 768) {
                var height_window = angular.element($window).height();

                if (element.height() < height_window) {
                    var dif = height_window - element.height();
                    element.attr("style","margin-top: "+dif+"px!important");
                }
            }
     	});

     }
   };
});