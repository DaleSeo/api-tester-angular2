export class Url {
  scheme: string = 'http';
  host: string;
  port: number;
  path: string;
  query: string;

  toFullUrl(): string {
    let str: string = this.scheme + "://" + this.host;
    if (this.port) {
      str += ":" + this.port;
    }
    if (this.path) {
      str += this.path;
    }
    if (this.query) {
      str+= '?' + this.query;
    }
    return str;
  }
}