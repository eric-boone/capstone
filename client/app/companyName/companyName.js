'use strict';

angular.module('companyName')
  .config(function ($stateProvider) {
    $stateProvider
      .state('companyName', {
        url: '/companyName',
        template: '<company-name></company-name>'
      });
  });
