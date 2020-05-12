export default class GridApi {

  constructor(api, url) {
    this.api = api;
    this.url = url;
  }

  load() {
    return this.api.get(this.url);
  }
}


