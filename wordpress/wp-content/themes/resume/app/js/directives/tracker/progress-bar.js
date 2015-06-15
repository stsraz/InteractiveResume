(function() {
  angular.module('trackerApp')
    .directive('progressBar', function() {
      return {
        restrict: 'E',
        templateUrl: localizedRoute.partials + 'directive/tracker/progress-bar.html',
        scope: {
          step: '='
        },
        controller: 'BarController'
      };
    })
    .directive('setWidth', function() {
      return {
        restrict: 'A',
        scope: {
          step: '='
        },
        link: function(scope,element) {
          scope.$watch('step',function(newValue,oldValue) {
            scope.barWidth = (newValue * 10) + "%";
            element.width(scope.barWidth);
          });
        },
        controller: function($scope) {
          $scope.step;
          $scope.barWidth;
        }
      };
    });
})();
