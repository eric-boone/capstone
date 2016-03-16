'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var companyNameCtrlStub = {
  index: 'companyNameCtrl.index',
  show: 'companyNameCtrl.show',
  create: 'companyNameCtrl.create',
  update: 'companyNameCtrl.update',
  destroy: 'companyNameCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var companyNameIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './companyName.controller': companyNameCtrlStub
});

describe('CompanyName API Router:', function() {

  it('should return an express router instance', function() {
    expect(companyNameIndex).to.equal(routerStub);
  });

  describe('GET /api/companyNames', function() {

    it('should route to companyName.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'companyNameCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/companyNames/:id', function() {

    it('should route to companyName.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'companyNameCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/companyNames', function() {

    it('should route to companyName.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'companyNameCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/companyNames/:id', function() {

    it('should route to companyName.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'companyNameCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/companyNames/:id', function() {

    it('should route to companyName.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'companyNameCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/companyNames/:id', function() {

    it('should route to companyName.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'companyNameCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
