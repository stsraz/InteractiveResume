(function() {
  angular.module('trackerApp')
    .controller('TimerController', function($scope) {
      $scope.currentTime = new Date();
    });
})();
