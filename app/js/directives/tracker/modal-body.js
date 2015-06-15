(function() {
  angular.module('trackerApp')
    .directive('modalBody', function() {
      return {
        restrict: 'A',
        templateUrl: 'app/partials/directive/tracker/modal-body.html',
        controller: 'ModalBodyController'
      };
    });
})();
