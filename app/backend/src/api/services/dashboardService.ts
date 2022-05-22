import { IDashboardService, IProductService, ISeller } from '../../interfaces/dashboardInterfaces';

export default class DashboardService implements IDashboardService {
  private _sellersModel;

  private _productsServicesModel;

  constructor() {
    this._sellersModel = SellersModel;
    this._productsServicesModel = ProductsServicesModel;
  }

  async getAllSellers(): Promise<ISeller[]> {
    const allSellers = await this._sellersModel.findAll();

    return allSellers;
  }

  async getAllProductsServices(): Promise<IProductService[]> {
    const allProductsServices = await this._productsServicesModel.findAll();

    return allProductsServices;
  }
}
