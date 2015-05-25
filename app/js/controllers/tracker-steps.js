(function() {
  angular.module('trackerApp')
    .controller('StepsController', function($scope) {
      $scope.step;
      $scope.trackerSteps = trackerSteps;
      $scope.currentName = '';
      $scope.currentSubsteps = [];
    });
})();
