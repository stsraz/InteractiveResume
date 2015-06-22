(function() {
    angular.module('trackerApp')
      .controller('ModalController', function($scope) {
        $scope.modalShow;
        $scope.modalState;
        $scope.modalData;
        $scope.run;
        $scope.checkState = function(state) {
          if(state === $scope.modalState) {return true;};
          return false;
        };
        $scope.start = function() {
          $scope.modalShow = !$scope.modalShow;
          $scope.run = !$scope.run;
        };
        $scope.dismiss = function() {
          $scope.modalShow = !$scope.modalShow;
        };
      });
})();
