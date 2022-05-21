import { Response, Request, NextFunction } from 'express';

const error = (err: Error, _req: Request, res: Response, _next: NextFunction): Response => {
  console.error(err.message);

  if (err.message === 'jwt malformed') return res.status(400).json({ error: err.message });

  return res.status(500).json({ error: 'Internal server error' });
};

export default error;
