(function() {
  angular.module('trackerApp')
    .directive('timers',function(){
      return {
        restrict: 'E',
        templateUrl: 'app/partials/directive/timers.html',
        controller: 'timersController'
      };
    })

})();
