import { globalData as data } from "./Data";
import { DOMCacheGetOrSet } from "./Cache"
import Decimal from "break_eternity.js";
import {format} from "./Formatting"
import {load} from "./Data"




function mainLoop() {
    let diff = (Date.now()-data.time)*data.devSpeed/1000
    data.time = Date.now()
    data.void = data.void.plus(1 * diff)
    DOMCacheGetOrSet("voidAmts").innerHTML = `${format(data.void)}`;
    console.log(diff)
}

window.onload = function (){
    load()
}
window.setInterval(function(){
    mainLoop()
}, 50)