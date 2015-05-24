(function(){
  angular.module('trackerApp')
    .controller('TrackerController',function($scope){
      $scope.pause = false;
      $scope.currentStep = 0;

      // Current Step
      $scope.getStep = function() {
        return $scope.currentStep;
      };
      $scope.setStep = function(newStep) {
        $scope.currentStep = newStep;
        return $scope.currentStep;
      };
      // Pause
      $scope.setPause = function() {
        $scope.pause=true;
        return $scope.pause;
      };
      $scope.clearPause = function() {
        $scope.pause=false;
        return $scope.pause;
      };
      $scope.togglePause = function() {
        var pause = $scope.pause ? $scope.clearPause() : $scope.setPause();
      };
      $scope.isPause = function() {
        return $scope.pause;
      };
      // Back
      $scope.goBack = function() {
        var backOne = $scope.currentStep - 1;
        $scope.checkBack() ? $scope.setStep(backOne) : $scope.setStep(1);
      };
      $scope.checkBack = function() {
        if(($scope.getStep() - 1) != 0) {return true;}
        else {return false;};
      };
      // Next
      $scope.goNext = function() {
        var nextOne = $scope.currentStep + 1;
        $scope.checkNext() ? $scope.setStep(nextOne) : $scope.setStep(10);
      };
      $scope.checkNext = function() {
        if(($scope.getStep() + 1) != 11) {return true;}
        else {return false;};
      };
    });
})();
