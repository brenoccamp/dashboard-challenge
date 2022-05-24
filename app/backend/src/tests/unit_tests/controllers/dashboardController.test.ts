import * as chai from 'chai';
import * as sinon from 'sinon';
import { Request, Response, NextFunction } from 'express';

import DashboardController from '../../../api/controllers/dashboardController';
import DashboardService from '../../../api/services/dashboardService'

import {
  mockedSellers,
  mockedStores,
  mockedCustomers,
  mockedProductsServices,
  mockedSales,
} from '../../__mocks__/index';

const dashboardService = new DashboardService();
const dashboardController = new DashboardController(dashboardService);

const errorObj = Error('Oops... Something was wrong!');
const { expect } = chai;

const req = {} as Request; const res = {} as Response; const next = {} as NextFunction;

describe('(Dashboard Controller)-Testing Dashboard Controller methods', () => {
  describe('Method getAllSellers', () => {
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(dashboardService, 'getAllSellers').resolves(mockedSellers);
    });

    after(() => {
      sinon.restore();
    });

    it('Success Case - Returns status 200 and a json containing all registered sellers', async () => {
      await dashboardController.getAllSellers(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.equal(true);

      expect((res.json as sinon.SinonStub).calledWith(mockedSellers)).to.be.equal(true);
    });

    it('Unexpected Error Case - Returns status 500 and a json containing "Internal server error"', async () => {
      sinon.restore();
      sinon.stub(dashboardController, 'getAllSellers').throws(errorObj);

      await dashboardController.getAllSellers(req, res, next);

      expect((next as sinon.SinonStub).calledWith(errorObj)).to.be.equal(true);
    });
  });
});