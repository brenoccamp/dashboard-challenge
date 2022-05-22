const { expect } = require('chai');
const sinon = require('sinon');

const DashboardController = require('../../../api/controllers/dashboardController');
const DashboardService = require('../../../api/services/dashboardService');
const {
  mockedSellers
} = require('../../__mocks__');

const dashboardService = new DashboardService();
const dashboardController = new DashboardController(dashboardService);

const errorObj = Error('Oops... Something was wrong!');

describe('(Dashboard Controller) 1- Testing Dashboard Controller methods', () => {
  describe('Method getAllSellers', () => {
    let req = {}; res = {}; next = () => {};

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
});