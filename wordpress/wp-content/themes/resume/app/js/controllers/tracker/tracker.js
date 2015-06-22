(function(){
  angular.module('trackerApp')
    .controller('TrackerController',function($scope,$cookieStore,trackerDatabase){
      // Status Variables
      $scope.currentUser = WordpressData.currentUser; /*setDisplayName(WordpressData.currentUser;)*/
      //$scope.assignedStore = {}; /* trackerDatabase.getAssignedStore($scope.currentUser); */
      $scope.trackerRun = false;
      $scope.pause = false;
      $scope.modalState = '';
      $scope.modalShow = false;
      // Tracking Object Information
      $scope.sessionInfo = [];
      $scope.trackerHeader = "Store Number | EON | TC | Location";
      // Current Step
      $scope.currentStep = 1;
      // Pause
      $scope.togglePause = function() {
        $scope.pause = !$scope.pause;
      };
      // Back
      $scope.goBack = function() {
        if($scope.currentStep === 1) {return};
        $scope.currentStep = --$scope.currentStep;
      };
      // Next
      $scope.goNext = function() {
        if($scope.currentStep === 10) {return};
        $scope.currentStep = ++$scope.currentStep;
      };
      // Show modal
      $scope.showModal = function(modalType) {
        $scope.modalState = modalType;
        $scope.modalShow = true;
      }
      // On Page Load
      $scope.onLoad = function() {
        $cookieStore.put('TrackerCookie','store:S10000;location:Denver,CO;step:4');
        // Check for cookie; Use cookie service
        var trackerCookie = $cookieStore.get('TrackerCookie');
        if(trackerCookie) {
          var cookieSplit = trackerCookie.split(';');
          for(var i=0;i<cookieSplit.length;i++) {
            var keypair = cookieSplit[i].split(':');
            $scope.sessionInfo[keypair[0]] = keypair[1];
          };
          $scope.showModal('resume');
        };
        // If none, query database with username
        //    If activation started, confirm modal, start with returned data, build a cookie
        //    If activation scheduled, confirm assignment, confirm modal, start
        // If none, select a store modal
      };
    });
})();
