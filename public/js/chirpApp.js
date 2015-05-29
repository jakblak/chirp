var app = angular.module('chirpApp', [
      'ngRoute',
      'ngResource',
      'chirpServices',
      'chirpApp.controllers'])
.run(function($rootScope, $http) {
  $rootScope.authenticated = false;
  $rootScope.current_user = '';

  $rootScope.signout = function() {
    $http.get('auth/signout');
    $rootScope.authenticated = false;
    $rootScope.current_user = '';
  };
});

app.config(function($routeProvider) {
  $routeProvider
  //the timeline display
  .when('/', {
    templateUrl: 'main.html',
    controller: 'mainController'
  })
  //the login display
  .when('/login', {
    templateUrl: 'login.html',
    controller: 'authController'
  })
  //the signup display
  .when('/register', {
    templateUrl: 'register.html',
    controller: 'authController'
  });
});