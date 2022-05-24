const { expect } = require('chai');
const sinon = require('sinon');
const DashboardService = require('../../../../build/api/services/dashboardService');
const {
  mockedSellers,
  mockedProductsServices,
  mockedStores,
  mockedCustomers,
  mockedSales,
} = require('../../../../build/tests/__mocks__');
const SellersModel = require('../../../../build/database/models/SellersModel');
const ProductsServicesModel = require('../../../../build/database/models/ProductsServicesModel');
const StoresModel = require('../../../../build/database/models/StoresModel');
const CustomersModel = require('../../../../build/database/models/CustomersModel');
const SalesModel = require('../../../../build/database/models/SalesModel');


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

  describe('Method getAllStores', () => {
    before(() => {
      sinon.stub(StoresModel, 'findAll').resolves(mockedStores);
    });

    after(() => {
      StoresModel.findAll.restore();
    });

    it('Success Case - Returns an array containing all products/services objects registered on database', async () => {
      const serviceResponse = await dashboardService.getAllStores();

      expect(serviceResponse).to.be.an('array');
      expect(serviceResponse[0]).to.be.an('object');
      expect(serviceResponse[0]).to.have.a.property('id').to.be.a('number');
      expect(serviceResponse[0]).to.have.a.property('name').to.be.a('string');
      expect(serviceResponse[0]).to.have.a.property('city').to.be.a('string');
      expect(serviceResponse[0]).to.have.a.property('state').to.be.a('string');
    });
  });

  describe('Method getAllCustomers', () => {
    before(() => {
      sinon.stub(CustomersModel, 'findAll').resolves(mockedCustomers);
    });

    after(() => {
      CustomersModel.findAll.restore();
    });

    it('Success Case - Returns an array containing all products/services objects registered on database', async () => {
      const serviceResponse = await dashboardService.getAllCustomers();

      expect(serviceResponse).to.be.an('array');
      expect(serviceResponse[0]).to.be.an('object');
      expect(serviceResponse[0]).to.have.a.property('id').to.be.a('number');
      expect(serviceResponse[0]).to.have.a.property('fullName').to.be.a('string');
      expect(serviceResponse[0]).to.have.a.property('city').to.be.a('string');
      expect(serviceResponse[0]).to.have.a.property('state').to.be.a('string');
    });
  });

  describe('Method getAllSales', () => {
    before(() => {
      sinon.stub(SalesModel, 'findAll').resolves(mockedSales);
    });

    after(() => {
      SalesModel.findAll.restore();
    });

    it('Success Case - Returns an array containing all products/services objects registered on database', async () => {
      const serviceResponse = await dashboardService.getAllSales();

      expect(serviceResponse).to.be.an('array');
      expect(serviceResponse[0]).to.be.an('object');
      expect(serviceResponse[0]).to.have.a.property('id').to.be.a('number');
      expect(serviceResponse[0]).to.have.a.property('sellerId').to.be.a('number');
      expect(serviceResponse[0]).to.have.a.property('productId').to.be.a('number');
      expect(serviceResponse[0]).to.have.a.property('customerId').to.be.a('number');
      expect(serviceResponse[0]).to.have.a.property('storeId').to.be.a('number');
      expect(serviceResponse[0]).to.have.a.property('soldAmount').to.be.a('number');
      expect(serviceResponse[0]).to.have.a.property('saleDate').to.be.a('Date');
    });
  });
});