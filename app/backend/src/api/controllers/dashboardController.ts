import { Response, Request, NextFunction } from 'express';
import { IDashboardController, IDashboardService } from '../../interfaces/dashboardInterfaces';

export default class DashboardController implements IDashboardController {
  constructor(
    private _dashboardService: IDashboardService,
  ) { }

  async getAllSellers(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const allSellers = await this._dashboardService.getAllSellers();

      return res.status(200).json({ data: allSellers });
    } catch (error) {
      next(error);
    }
  }

  async getAllProductsServices(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const allProductsServices = await this._dashboardService.getAllProductsServices();

      return res.status(200).json({ data: allProductsServices });
    } catch (error) {
      next(error);
    }
  }

  async getAllStores(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const allStores = await this._dashboardService.getAllStores();

      return res.status(200).json({ data: allStores });
    } catch (error) {
      next(error);
    }
  }

  async getAllCustomers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const allClients = await this._dashboardService.getAllCustomers();

      return res.status(200).json({ data: allClients });
    } catch (error) {
      next(error);
    }
  }

  async getAllSales(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const allSales = await this._dashboardService.getAllSales();

      return res.status(200).json({ data: allSales });
    } catch (error) {
      next(error);
    }
  }
}
