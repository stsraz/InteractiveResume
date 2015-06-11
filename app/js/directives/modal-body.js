(function() {
  angular.module('trackerApp')
    .directive('modalBody', function() {
      return {
        restrict: 'A',
        templateUrl: 'app/partials/directive/modal-body.html',
        controller: 'ModalBodyController'
      };
    });
})();
