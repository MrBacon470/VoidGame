import { globalData as data } from "./Data";
import { DOMCacheGetOrSet } from "./Internal/Cache.js"
import Decimal from "break_eternity.js";
import {format} from "./Internal/Formatting.js"

console.log(data.void.toString());
data.void = new Decimal(1);
DOMCacheGetOrSet("voidAmts").innerHTML = `${format(data.void)}`;