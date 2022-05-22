import { Response, Request, NextFunction } from 'express';
import { IDashboardController, IDashboardService } from '../../interfaces/dashboardInterfaces';

export default class DashboardController implements IDashboardController {
  constructor(
    private _dashboardService: IDashboardService,
  ) { }

  async getAllSellers(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const allSellers = await this._dashboardService.getAllSellers();

      return res.status(200).json(allSellers);
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

      return res.status(200).json(allProductsServices);
    } catch (error) {
      next(error);
    }
  }
}
