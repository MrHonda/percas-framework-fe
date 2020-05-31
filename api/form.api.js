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

  submit(id, fields, action) {
    const data = new FormData();

    for(const key in fields) {
      data.set('fields[' + key + ']', fields[key]);
    }

    data.set('action', action);

    return this.api.post(this.createUrl(id), data);
  }

  create(fields) {
    return this.api.post(this.url, {'fields': fields, 'action': 'save'});
  }

  update(id, fields) {
    return this.api.put(this.createUrl(id), {'fields': fields, 'action': 'save'});
  }

  delete(id) {
    return this.api.delete(this.createUrl(id));
  }
}
