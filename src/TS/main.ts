import { data } from "./data";
import { DOMCacheGetOrSet } from "./Internal/Cache.js"
import Decimal from "break_eternity.js";
import {format} from "./Internal/Formatting.js"

console.log(data.voidAmts[0]);
data.voidAmts[0] = new Decimal(1);
DOMCacheGetOrSet("voidAmts").innerHTML = `${format(data.voidAmts[0])}`;