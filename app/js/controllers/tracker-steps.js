(function() {
  angular.module('trackerApp')
    .controller('StepsController', function($scope) {
      $scope.trackerSteps = trackerSteps;
      $scope.currentName = 'Select a Tracking Object';
      $scope.step;
      $scope.setStepName = function() {
        $scope.currentName = $scope.trackerSteps[$scope.currentStep]['name'];
      };
    });
})();
