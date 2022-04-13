import { globalData as data, globalTemp as temp } from "./Data";
import {load} from "./Data"
import { updateHTML } from "./Update";
import { generateEventHandlers } from "./Listeners";

export const greekLettersLower = ['α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','ο','π','ρ','σ','τ','υ','φ','χ','ψ','ω']
export const greekLettersUpper = ['A','B','Γ','Δ','E','Z','H','Θ','Ι','K','Λ','M','N','Ξ','O','Π','P','Σ','T','Y','Φ','Χ','Ψ','Ω']


export function changeTab(tab: number) {
    let x = tab - 1;
    if(x > 0 ) data.currentTab = data.hasTab[x] ? tab : data.currentTab;
    else if(x <= 0) data.currentTab = tab; 
}

function updateResourceGain() {
    for(let i = 0; i < 4; i++) {
        temp.voidGains[0] = temp.voidGains[0].plus(data.voidUps[0][i]);
        temp.voidGains[0] = temp.voidGains[0].plus(data.voidUps[0][i].times(10));
        temp.voidGains[0] = temp.voidGains[0].plus(data.voidUps[0][i].times(100));
        temp.voidGains[0] = temp.voidGains[0].plus(data.voidUps[0][i].times(1e3));
    }
}

function mainLoop() {
    let diff = (Date.now()-data.time)*data.devSpeed/1000;
    data.time = Date.now();

    updateResourceGain();
    updateHTML();
}

window.onload = function (){
    load()
    generateEventHandlers();
}
window.setInterval(function(){
    mainLoop()
}, 50)