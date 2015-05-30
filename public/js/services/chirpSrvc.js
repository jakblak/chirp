'use strict';

angular
  .module('chirpApp')
  .factory('post', postSrvc);

  postSrvc.$inject = ['$resource', '$route'];

function postSrvc ($resource, $route) {
  return $resource('/api/posts/:id');
};