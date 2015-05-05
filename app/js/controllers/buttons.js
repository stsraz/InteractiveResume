(function(){
  angular.module('customUI')
    .controller('buttonsController', function($scope){
        $scope.pause=false;
        $scope.setPause=function() {
          $scope.pause=true;
          return $scope.pause;
        };
        $scope.clearPause=function() {
          $scope.pause=false;
          return $scope.pause;
        };
        $scope.togglePause=function() {
          var pause = $scope.pause ? $scope.clearPause() : $scope.setPause();
          return pause;
        };
        $scope.isPause=function() {
          return $scope.pause;
        };
        $scope.back=function(currentStep) {
          return currentStep - 1;
        };
        $scope.next=function(currentStep){
          return currentStep + 1;
        };
    });
})();
