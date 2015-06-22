(function() {
  angular.module('trackerApp')
    .factory('trackerDatabase', function( $http ) {
      var getSingleStore = function(data) {
        var response = $http.post(WordpressData.ajaxurl,data);
        return response;
      };
      return {
        getRequestedStore: function(requestedStoreNumber) {
          var data = {'storeNumber': requestedStoreNumber};
          var store = getSingleStore(data);
          if(typeof store === Object) {return store;}
          else {return false;}
        },
        getAssignedStore: function(currentUser) {
          var data = {'username': currentUser};
          var store = getSingleStore(data);
          if(typeof store === Object) {return store;}
          else {return false;}
        }
      };
    });
})();
