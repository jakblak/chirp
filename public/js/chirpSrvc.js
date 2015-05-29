'use strict';

angular.module('chirpServices', [])

  .factory('postService', [
    '$resource',
      function($resource, $route) {
        return $resource('/api/posts/:id');
}]);