import {Url} from "./url";
import {Req} from "./req";
import {Res} from "./res";

export class Test {
  method: string;
  url: Url;
  req: Req;
  res: Res;
  date: Date;
  user: string;
}