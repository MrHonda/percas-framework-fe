const path = require('path');

export default class FormApi {
  constructor(api, url) {
    this.api = api;
    this.url = url;
  }

  createUrl(id) {
    return path.join(this.url, id.toString());
  }

  load(id) {
    return this.api.get(this.createUrl(id));
  }

  create(fields) {
    return this.api.post(this.url, fields);
  }

  update(id, fields) {
    return this.api.put(this.createUrl(id), fields);
  }

  delete(id) {
    return this.api.delete(this.createUrl(id));
  }
}
