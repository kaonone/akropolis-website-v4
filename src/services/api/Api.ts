
import HttpActions from './HttpActions';
import { User } from './entities';

class Api {
  public user: User;

  constructor() {
    const actions = new HttpActions();
    this.user = new User(actions);
  }

}

export default Api;
