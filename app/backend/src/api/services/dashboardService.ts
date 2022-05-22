import { IDashboardService, ISeller } from '../../interfaces/dashboardInterfaces';

export default class DashboardService implements IDashboardService {
  private _dashbboardModel;

  constructor() {
    this._dashbboardModel = DashboardModel;
  }

  async getAllSellers(): Promise<ISeller> {
    const allSellers = await this._dashbboardModel.findAll();

    return allSellers;
  }
}
