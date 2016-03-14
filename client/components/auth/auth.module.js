'use strict';

angular.module('baconApp.auth', [
  'baconApp.constants',
  'baconApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
