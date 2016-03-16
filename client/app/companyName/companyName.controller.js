'use strict';
(function(){

class CompanyNameComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('baconApp')
  .component('companyName', {
    templateUrl: 'app/companyName/companyName.html',
    controller: CompanyNameComponent
  });

})();


// angular.module('baconApp')
//   .component('main', {
//     templateUrl: 'app/main/main.html',
//     controller: MainController
//   });
