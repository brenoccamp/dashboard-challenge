import {
  IDashboardService,
  ISeller,
  IProductService,
  IStore,
  ICustomer,
  ISale,
} from '../../interfaces/dashboardInterfaces';

export default class DashboardService implements IDashboardService {
  private _sellersModel;

  private _productsServicesModel;

  private _storesModel;

  private _customersModel;

  private _salesModel;

  constructor() {
    this._sellersModel = SellersModel;
    this._productsServicesModel = ProductsServicesModel;
    this._storesModel = StoresModel;
    this._customersModel = CustomersModel;
    this._salesModel = SalesModel;
  }

  async getAllSellers(): Promise<ISeller[]> {
    const allSellers = await this._sellersModel.findAll();

    return allSellers;
  }

  async getAllProductsServices(): Promise<IProductService[]> {
    const allProductsServices = await this._productsServicesModel.findAll();

    return allProductsServices;
  }

  async getAllStores(): Promise<IStore[]> {
    const allStores = await this._storesModel.findAll();

    return allStores;
  }

  async getAllCustomers(): Promise<ICustomer[]> {
    const allClients = await this._customersModel.findAll();

    return allClients;
  }

  async getAllSales(): Promise<ISale[]> {
    const allSales = await this._salesModel.findAll();

    return allSales;
  }
}