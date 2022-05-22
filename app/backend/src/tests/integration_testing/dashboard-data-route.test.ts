import * as chai from 'chai';
import * as sinon from 'sinon';
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
import { app } from '../../app';
import {
  SellersModel,
  ProductsServicesModel,
  StoresModel,
  CustomersModel,
  SalesModel
} from '../../database/models';
import {
  mockedSellers,
  mockedProductsServices,
  mockedStores,
  mockedCustomers,
  mockedSales,
} from '../__mocks__/';

chai.use(chaiHttp);

const { expect } = chai;

describe('(I&T Tests) Testing dashboard-data routes', () => {
  let chaiHtppResponse: Response;

  describe('Route GET "/sellers"', () => {
    before(() => {
      sinon
        .stub(SellersModel, 'findAll')
        .resolves(mockedSellers as SellersModel[]);
    });

    after(() => {
      (SellersModel.findAll as sinon.SinonStub).restore();
    });

    it('Success Case - Returns status 200 and a json containing all registered sellers', async () => {
      chaiHtppResponse = await chai
        .request(app)
        .get('/dashboard-data/sellers');
      
      expect(chaiHtppResponse.status).to.be.equal(200);
      expect(chaiHtppResponse.body).to.be.deep.equal(mockedSellers);
    });

    it('Unexpected Error Case - Returns status 500 and a json containing "Internal server error"', async () => {
      (SellersModel.findAll as sinon.SinonStub).restore();

      sinon
        .stub(SellersModel, 'findAll')
        .throws();

      chaiHtppResponse = await chai
        .request(app)
        .get('/dashboard-data/sellers');

      expect(chaiHtppResponse.status).to.be.equal(500);
      expect(chaiHtppResponse.body.error).to.be.equal('Internal server error');
    });
  });

  describe('Route GET "/dashboard-data/products-services"', () => {
    before(() => {
      sinon
        .stub(ProductsServicesModel, 'findAll')
        .resolves(mockedProductsServices as ProductsServicesModel[]);
    });

    after(() => {
      (ProductsServicesModel.findAll as sinon.SinonStub).restore();
    });

    it('Success Case - Returns status 200 and a json containing all registered products/services', async () => {
      chaiHtppResponse = await chai
        .request(app)
        .get('/dashboard-data/products-services');
      
      expect(chaiHtppResponse.status).to.be.equal(200);
      expect(chaiHtppResponse.body).to.be.deep.equal(mockedProductsServices);
    });

    it('Unexpected Error Case - Returns status 500 and a json containing "Internal server error"', async () => {
      (ProductsServicesModel.findAll as sinon.SinonStub).restore();

      sinon
        .stub(ProductsServicesModel, 'findAll')
        .throws();

      chaiHtppResponse = await chai
        .request(app)
        .get('/dashboard-data/products-services');

      expect(chaiHtppResponse.status).to.be.equal(500);
      expect(chaiHtppResponse.body.error).to.be.equal('Internal server error');
    });
  });

  describe('Route GET "/dashboard-data/stores"', () => {
    before(() => {
      sinon
        .stub(StoresModel, 'findAll')
        .resolves(mockedStores as StoresModel[]);
    });

    after(() => {
      (StoresModel.findAll as sinon.SinonStub).restore();
    });

    it('Success Case - Returns status 200 and a json containing all registered stores', async () => {
      chaiHtppResponse = await chai
        .request(app)
        .get('/dashboard-data/stores');
      
      expect(chaiHtppResponse.status).to.be.equal(200);
      expect(chaiHtppResponse.body).to.be.deep.equal(mockedStores);
    });

    it('Unexpected Error Case - Returns status 500 and a json containing "Internal server error"', async () => {
      (StoresModel.findAll as sinon.SinonStub).restore();

      sinon
        .stub(StoresModel, 'findAll')
        .throws();

      chaiHtppResponse = await chai
        .request(app)
        .get('/dashboard-data/stores');

      expect(chaiHtppResponse.status).to.be.equal(500);
      expect(chaiHtppResponse.body.error).to.be.equal('Internal server error');
    });
  });

  describe('Route GET "/dashboard-data/customers"', () => {
    before(() => {
      sinon
        .stub(CustomersModel, 'findAll')
        .resolves(mockedCustomers as CustomersModel[]);
    });

    after(() => {
      (CustomersModel.findAll as sinon.SinonStub).restore();
    });

    it('Success Case - Returns status 200 and a json containing all registered customers', async () => {
      chaiHtppResponse = await chai
        .request(app)
        .get('/dashboard-data/customers');
      
      expect(chaiHtppResponse.status).to.be.equal(200);
      expect(chaiHtppResponse.body).to.be.deep.equal(mockedCustomers);
    });

    it('Unexpected Error Case - Returns status 500 and a json containing "Internal server error"', async () => {
      (CustomersModel.findAll as sinon.SinonStub).restore();

      sinon
        .stub(CustomersModel, 'findAll')
        .throws();

      chaiHtppResponse = await chai
        .request(app)
        .get('/dashboard-data/customers');

      expect(chaiHtppResponse.status).to.be.equal(500);
      expect(chaiHtppResponse.body.error).to.be.equal('Internal server error');
    });
  });
})