import { Router, Request, Response, NextFunction } from 'express';
import DashboardController from '../controllers/dashboardController';
import DashboardService from '../services/dashboardService';

const dashboardService = new DashboardService();
const dashboardController = new DashboardController(dashboardService);

const dashboardRouter = Router();

dashboardRouter.get(
  '/sellers',
  async (req: Request, res: Response, next: NextFunction) =>
    dashboardController.getAllSellers(req, res, next),
);

dashboardRouter.get(
  '/products-services',
  async (req: Request, res: Response, next: NextFunction) =>
    dashboardController.getAllProductsServices(req, res, next),
);

dashboardRouter.get(
  '/stores',
  async (req: Request, res: Response, next: NextFunction) =>
    dashboardController.getAllStores(req, res, next),
);

dashboardRouter.get(
  '/customers',
  async (req: Request, res: Response, next: NextFunction) =>
    dashboardController.getAllCustomers(req, res, next),
);

dashboardRouter.get(
  '/sales',
  async (req: Request, res: Response, next: NextFunction) =>
    dashboardController.getAllSales(req, res, next),
);

export default dashboardRouter;
