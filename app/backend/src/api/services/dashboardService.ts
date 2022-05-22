import {
  IClient,
  IDashboardService,
  IProductService,
  ISeller,
  IStore,
} from '../../interfaces/dashboardInterfaces';

export default class DashboardService implements IDashboardService {
  private _sellersModel;

  private _productsServicesModel;

  private _storesModel;

  private _customersModel;

  constructor() {
    this._sellersModel = SellersModel;
    this._productsServicesModel = ProductsServicesModel;
    this._storesModel = StoresModel;
    this._customersModel = CustomersModel;
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

  async getAllCustomers(): Promise<IClient[]> {
    const allClients = await this._customersModel.findAll();

    return allClients;
  }
}
