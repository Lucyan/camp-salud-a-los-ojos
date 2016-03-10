saludalosojos.directive('classModelos', function (){
  return {
     restrict: 'EA',
     scope: {
        modelo: "=",
        mainmodelo:"="
     },
     link: function(scope, element, attrs) {
        if (scope.modelo == scope.mainmodelo)
            element.addClass("active");
        else{
            element.addClass("no-active");
            var index = angular.element(".modelo-thumbnail.no-active").length;
            element.addClass("index-" + index);
        }
     }
   };
});