(function() {
  angular.module('trackerApp')
    .directive('modalBody', function() {
      return {
        restrict: 'A',
        templateUrl: localizedRoute.partials + 'directive/tracker/modal-body.html',
        controller: 'ModalBodyController'
      };
    });
})();
