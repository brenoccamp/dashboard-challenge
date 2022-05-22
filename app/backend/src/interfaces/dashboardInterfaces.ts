import { Request, Response, NextFunction } from 'express';

export interface ISeller {
  id: number;
  nomeCompleto: string;
  lojaId: number;
}

export interface IDashboardController {
  getAllSellers(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}

export interface IDashboardService {
  getAllSellers(): Promise<ISeller[]>;
}
