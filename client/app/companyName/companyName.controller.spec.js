'use strict';

describe('Component: CompanyNameComponent', function () {

  // load the controller's module
  beforeEach(module('companyName'));

  var CompanyNameComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CompanyNameComponent = $componentController('CompanyNameComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
