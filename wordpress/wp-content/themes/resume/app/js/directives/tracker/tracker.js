(function() {
  angular.module('trackerApp')
    .directive('tracker', function() {
      return {
        controller: 'TrackerController',
        controllerAs: 'TrackerCtrl'
      };
    });
})();
