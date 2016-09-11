import {Url} from "./url";
import {Req} from "./req";
import {Res} from "./res";

export class Test {
  id: number;
  method: string;
  url: Url;
  req: Req;
  res: Res;
  date: Date;
  user: string;
}