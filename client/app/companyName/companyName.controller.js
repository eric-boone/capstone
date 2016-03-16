'use strict';
(function(){

class CompanyNameComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('companyName')
  .component('companyName', {
    templateUrl: 'app/companyName/companyName.html',
    controller: CompanyNameComponent
  });

})();
