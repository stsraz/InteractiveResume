(function() {
  angular.module('trackerApp')
    .directive('trackerSteps', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/partials/directive/tracker-steps.html',
        scope: {
          step: '='
        },
        controller: 'StepsController'
      };
    });
})();
