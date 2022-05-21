import * as express from 'express';
import dashboardRouter from './api/routers/dashboardRouter';
import ErrorMiddleware from './api/middlewares/error';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());

    this.startConfigs();
  }

  private startConfigs(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use('/dashboard-data', dashboardRouter);

    this.app.get('/', (_req, res) => res.status(200).json({ message: 'API is working!' }));

    this.app.use(ErrorMiddleware);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;
