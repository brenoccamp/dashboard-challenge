import { Request, Response, NextFunction } from 'express';

export interface ISeller {
  id: number;
  fullname: string;
  storeId: number;
}

export interface IProductService {
  id: number;
  name: string;
  price: number;
}

export interface IStore {
  id: number;
  name: string;
  city: string;
  state: string;
}

export interface ICustomer {
  id: number;
  fullname: string;
  // city: string;
  state: string;
}

export interface ISale {
  id: number;
  sellerId: number;
  productServiceId: number;
  customerId: number;
  storeId: number;
  soldAmount: number;
  saleDate: Date;
}

export interface IDashboardController {
  getAllSellers(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  getAllProductsServices(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  getAllStores(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  getAllCustomers(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  getAllSales(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}

export interface IDashboardService {
  getAllSellers(): Promise<ISeller[]>;
  getAllProductsServices(): Promise<IProductService[]>;
  getAllStores(): Promise<IStore[]>;
  getAllCustomers(): Promise<ICustomer[]>;
  getAllSales(): Promise<ISale[]>;
}
