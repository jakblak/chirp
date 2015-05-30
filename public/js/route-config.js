'use strict';

angular
  .module('chirpApp')
  .config(config)
  .run(run);

config.$inject = ['$routeProvider'];
run.$inject = ['$rootScope', '$http', '$location'];

  function config($routeProvider) {
    $routeProvider
    //the timeline display
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainController'
    })
    //the login display
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'authController'
    })
    //the signup display
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'authController'
    })
  };
  function run($rootScope, $http, $location) {
    $rootScope.authenticated = false;
    $rootScope.current_user = '';

    $rootScope.signout = function() {
      $http.get('auth/signout');
      $rootScope.authenticated = false;
      $rootScope.current_user = '';
      $location.path('/#/');
    };
  };