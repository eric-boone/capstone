'use strict';

angular.module('baconApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createJob', {
        url: '/createJob',
        template: '<create-job></create-job>'
      });
  });
