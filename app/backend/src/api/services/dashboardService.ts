import {
  IDashboardService,
  IProductService,
  ISeller,
  IStore,
} from '../../interfaces/dashboardInterfaces';

export default class DashboardService implements IDashboardService {
  private _sellersModel;

  private _productsServicesModel;

  private _storesModel;

  constructor() {
    this._sellersModel = SellersModel;
    this._productsServicesModel = ProductsServicesModel;
    this._storesModel = StoresModel;
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
}
