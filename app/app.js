(function(){
  angular.module('resumeApp', ['ngRoute'])
    .config(function($routeProvider,$locationProvider){
      $routeProvider.when('/', {
        templateUrl: 'app/partials/home.html'
      }).when('/experience', {
        templateUrl: 'app/partials/experience.html'
      }).when('/skills', {
        templateUrl: 'app/partials/skills.html'
      }).when('/contact', {
        templateUrl: 'app/partials/contact.html'
      }).otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);
    });
})();
