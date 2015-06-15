(function() {
  angular.module('trackerApp')
    .directive('trackerSteps', function() {
      return {
        restrict: 'E',
        templateUrl: localizedRoute.partials + 'directive/tracker/tracker-steps.html',
        scope: {
          step: '='
        },
        link: function(scope) {
          scope.$watch('step',function(newValue,oldValue) {
            scope.currentName = scope.trackerSteps[newValue]['name'];
            scope.currentSubsteps = scope.trackerSteps[newValue]['substeps'];
          });
        },
        controller: 'StepsController'
      };
    });
})();
