(function(){
  angular.module('trackerApp')
    .controller('trackerController',function($scope){
      $scope.stepTime;
      $scope.totalTime;
      $scope.timeToTarget;
      $scope.targetTime;
      $scope.stepNumber;
      $scope.stepName;

      var pause=false;

      var setPause=function() {
        pause=true;
        return pause;
      };
      var clearPause=function() {
        pause=false;
        return pause;
      };
      var togglePause=function() {
        pause = $scope.pause ? clearPause() : setPause();
        return pause;
      };
      $scope.isPause=function() {
        return $scope.pause;
      };
      $scope.back=function() {
        return currentStep - 1;
      };
      $scope.next=function(){
        return currentStep + 1;
      };
    });
})();
