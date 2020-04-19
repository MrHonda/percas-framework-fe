export default class SecurityApi {

  constructor(api) {
    this.api = api;
  }

  login(username, password) {
    return this.api.post('/login', {username, password});
  }
}


