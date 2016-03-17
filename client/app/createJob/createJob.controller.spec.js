'use strict';

describe('Component: CreateJobComponent', function () {

  // load the controller's module
  beforeEach(module('baconApp'));

  var CreateJobComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CreateJobComponent = $componentController('CreateJobComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
