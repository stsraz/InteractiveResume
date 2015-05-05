(function(){
  angular.module('customUI')
    .directive('buttons', function(){
      return {
        restrict: 'E',
        templateUrl: 'app/partials/directive/buttons.html',
        controller: 'buttonsController'
      };
    });
})();
