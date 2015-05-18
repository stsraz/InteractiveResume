(function(){
  angular.module('trackerApp')
    .directive('buttons', function(){
      return {
        restrict: 'E',
        templateUrl: 'app/partials/directive/buttons.html',
        controller: 'buttonsController',
        scope: {
          timerText
        }
      };
    });
})();
