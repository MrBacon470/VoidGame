import { globalData as data, globalTemp as temp } from "./Data";
import { DOMCacheGetOrSet } from "./Cache"
import Decimal from "break_eternity.js";
import {format} from "./Formatting"
import {load} from "./Data"

export function changeTab(tab: number) {
    let x = tab - 1;
    if(x > 0 ) data.currentTab = data.hasTab[x] ? tab : data.currentTab;
    else if(x <= 0) data.currentTab = tab; 
}

function updateResourceGain() {
    for(let i = 0; i < 4; i++) {
        temp.voidGains[i] = temp.voidGains[i].plus(data.voidUps[i][0]);
        temp.voidGains[i] = temp.voidGains[i].plus(data.voidUps[i][1].times(10));
        temp.voidGains[i] = temp.voidGains[i].plus(data.voidUps[i][2].times(100));
        temp.voidGains[i] = temp.voidGains[i].plus(data.voidUps[i][3].times(1e3));
    }
}

function mainLoop() {
    let diff = (Date.now()-data.time)*data.devSpeed/1000;
    data.time = Date.now();
    updateResourceGain();
}

window.onload = function (){
    load()
}
window.setInterval(function(){
    mainLoop()
}, 50)