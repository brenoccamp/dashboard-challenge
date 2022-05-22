const { expect } = require('chai');
const sinon = require('sinon');

const DashboardController = require('../../../api/controllers/dashboardController');
const DashboardService = require('../../../api/services/dashboardService');
const {
  mockedSellers,
  mockedProductsServices,
  mockedStores,
  mockedCustomers,
} = require('../../__mocks__');

const dashboardService = new DashboardService();
const dashboardController = new DashboardController(dashboardService);

const errorObj = Error('Oops... Something was wrong!');

describe('(Dashboard Controller) 1- Testing Dashboard Controller methods', () => {
  let req = {}; res = {}; next = () => {};

  describe('Method getAllSellers', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(dashboardService, 'getAllSellers').resolves(mockedSellers);
    });

    after(() => {
      dashboardService.getAllSellers.restore();
    });

    it('Success Case - Returns status 200 and a json containing all registered sellers', async () => {
      await dashboardController.getAllSellers(req, res, next);

      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(mockedSellers)).to.be.equal(true);
    });

    it('Unexpected Error Case - Returns status 500 and a json containing "Internal server error"', async () => {
      dashboardController.getAllSellers.restore();
      sinon.stub(dashboardController, 'getAllSellers').throws(errorObj);
      next = sinon.stub().returns();

      await dashboardController.getAllSellers(req, res, next);

      expect(next.calledWith(errorObj)).to.be.equal(true);
    });
  });

  describe('Method getAllProductsServices', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(dashboardService, 'getAllProductsServices').resolves(mockedProductsServices);
    });

    after(() => {
      dashboardService.getAllProductsServices.restore();
    });

    it('Success Case - Returns status 200 and a json containing all registered products/services', async () => {
      await dashboardController.getAllProductsServices(req, res, next);

      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(mockedProductsServices)).to.be.equal(true);
    });

    it('Unexpected Error Case - Returns status 500 and a json containing "Internal server error"', async () => {
      dashboardController.getAllProductsServices.restore();
      sinon.stub(dashboardController, 'getAllProductsServices').throws(errorObj);
      next = sinon.stub().returns();

      await dashboardController.getAllProductsServices(req, res, next);

      expect(next.calledWith(errorObj)).to.be.equal(true);
    });
  });

  describe('Method getAllStores', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(dashboardService, 'getAllStores').resolves(mockedStores);
    });

    after(() => {
      dashboardService.getAllStores.restore();
    });

    it('Success Case - Returns status 200 and a json containing all registered stores', async () => {
      await dashboardController.getAllStores(req, res, next);

      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(mockedStores)).to.be.equal(true);
    });

    it('Unexpected Error Case - Returns status 500 and a json containing "Internal server error"', async () => {
      dashboardController.getAllStores.restore();
      sinon.stub(dashboardController, 'getAllStores').throws(errorObj);
      next = sinon.stub().returns();

      await dashboardController.getAllStores(req, res, next);

      expect(next.calledWith(errorObj)).to.be.equal(true);
    });
  });

  describe('Method getAllCustomers', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(dashboardService, 'getAllCustomers').resolves(mockedCustomers);
    });

    after(() => {
      dashboardService.getAllCustomers.restore();
    });

    it('Success Case - Returns status 200 and a json containing all registered customers', async () => {
      await dashboardController.getAllCustomers(req, res, next);

      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(mockedCustomers)).to.be.equal(true);
    });

    it('Unexpected Error Case - Returns status 500 and a json containing "Internal server error"', async () => {
      dashboardController.getAllCustomers.restore();
      sinon.stub(dashboardController, 'getAllCustomers').throws(errorObj);
      next = sinon.stub().returns();

      await dashboardController.getAllCustomers(req, res, next);

      expect(next.calledWith(errorObj)).to.be.equal(true);
    });
  });
});