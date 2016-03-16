'use strict';

angular.module('baconApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('companyName', {
        url: '/companyName',
        template: '<company-name></company-name>'
      });
  });
