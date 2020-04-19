export default class FrameworkApi {

  constructor(api) {
    this.api = api;
  }

  initialize() {
    return this.api.post('/framework/initialize');
  }
}


