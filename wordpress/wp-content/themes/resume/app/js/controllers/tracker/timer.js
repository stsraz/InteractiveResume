(function() {
  angular.module('trackerApp')
    .controller('TimerController', function($scope) {
      $scope.step;
      $scope.trackerSteps = trackerSteps;
      $scope.run;
    });
})();
