import { globalData as data } from "./Data";
import { DOMCacheGetOrSet } from "./Cache"
import Decimal from "break_eternity.js";
import {format} from "./Formatting"

console.log(data.void.toString());
//data.void = new Decimal(1);
DOMCacheGetOrSet("voidAmts").innerHTML = `${format(data.void)}`;