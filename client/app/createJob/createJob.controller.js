'use strict';
(function(){

class CreateJobComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('baconApp')
  .component('createJob', {
    templateUrl: 'app/createJob/createJob.html',
    controller: CreateJobComponent
  });

})();
