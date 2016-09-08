import {Url} from "./url";
import {Req} from "./req";
import {Res} from "./res";

export class Api {
  id: number;
  method: string;
  url: Url;
  req: Req;
  res: Res;
}