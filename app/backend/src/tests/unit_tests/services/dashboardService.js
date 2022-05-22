const { expect } = require('chai');
const sinon = require('sinon');
const DashboardService = require('../../../api/services/dashboardService');
const {
  mockedSellers,
  mockedProductsServices,
  mockedStores,
  mockedCustomers,
  mockedSales,
} = require('../../__mocks__');
import {
  SellersModel,
  ProductsServicesModel,
  StoresModel,
  CustomersModel,
  SalesModel
} from '../../../database/models';

const dashboardService = new DashboardService();

describe('(Dashboard Service)-Testing Dashboard Service methods', () => {
  describe('Method getAllSellers', () => {
    before(() => {
      sinon.stub(SellersModel, 'findAll').resolves(mockedSellers);
    });

    after(() => {
      SellersModel.findAll.restore();
    });

    it('Success Case - Returns an array containing all sellers objects registered on database', async () => {
      const serviceResponse = await dashboardService.getAllSellers();

      expect(serviceResponse).to.be.an('array');
      expect(serviceResponse[0]).to.be.an('object');
      expect(serviceResponse[0]).to.have.a.property('id').to.be.a('number');
      expect(serviceResponse[0]).to.have.a.property('fullName').to.be.a('string');
      expect(serviceResponse[0]).to.have.a.property('storeId').to.be.a('number');
    });
  });

  describe('Method getAllProductsServices', () => {
    before(() => {
      sinon.stub(ProductsServicesModel, 'findAll').resolves(mockedProductsServices);
    });

    after(() => {
      ProductsServicesModel.findAll.restore();
    });

    it('Success Case - Returns an array containing all products/services objects registered on database', async () => {
      const serviceResponse = await dashboardService.getAllProductsServices();

      expect(serviceResponse).to.be.an('array');
      expect(serviceResponse[0]).to.be.an('object');
      expect(serviceResponse[0]).to.have.a.property('id').to.be.a('number');
      expect(serviceResponse[0]).to.have.a.property('name').to.be.a('string');
      expect(serviceResponse[0]).to.have.a.property('price').to.be.a('number');
    });
  });
});