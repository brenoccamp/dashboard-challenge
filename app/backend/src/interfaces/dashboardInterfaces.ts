import { Request, Response, NextFunction } from 'express';

export interface ISeller {
  id: number;
  fullName: string;
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

export interface IClient {
  id: number;
  fullName: string;
  city: string;
  state: string;
}

export interface IDashboardController {
  getAllSellers(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  getAllProductsServices(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  getAllStores(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
  getAllCustomers(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}

export interface IDashboardService {
  getAllSellers(): Promise<ISeller[]>;
  getAllProductsServices(): Promise<IProductService[]>;
  getAllStores(): Promise<IStore[]>;
  getAllCustomers(): Promise<IClient[]>;
}
