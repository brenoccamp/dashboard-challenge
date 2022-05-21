import { Router } from 'express';

const dashboardRouter = Router();

dashboardRouter.get(
  '/sellers',
  /* dashboardController.getAllSellers */
);

dashboardRouter.get(
  '/products_services',
  /* dashboardController.getAllProducts */
);

dashboardRouter.get(
  '/stores',
  /* dashboardController.getAllStores */
);

dashboardRouter.get(
  '/customers',
  /* dashboardController.getAllCustomers */
);

dashboardRouter.get(
  '/sales',
  /* dashboardController.getAllSales */
);

export default dashboardRouter;
