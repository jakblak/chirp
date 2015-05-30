'use strict';

angular
  .module('chirpApp')
  .controller('mainController', mainController);

mainController.$inject = ['$scope', '$rootScope', 'post'];

function mainController($scope, $rootScope, post) {
  $scope.posts = post.query();
  $scope.newPost = {
    created_by: '',
    text: '',
    created_at: ''
  }
};