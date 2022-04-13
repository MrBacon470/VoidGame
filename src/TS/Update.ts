import { DOMCacheGetOrSet } from "./Cache";
import { globalData as data, globalTemp as temp } from "./data";
import { format } from "./Formatting";
import { greekLettersLower } from "./main";

export function updateHTML() {
    //Global Always Updated things
    
    DOMCacheGetOrSet('voidAmtText').innerHTML = `${format(data.void[0])} | ${format(temp.voidGains[0])}/s`;

    //Tab Specific Updates
    if(data.currentTab === 0) {
        for(let i = 0; i < 4; i++) {
            DOMCacheGetOrSet(`vu${i+1}`).innerHTML = `Void Upgrade ${greekLettersLower[i]} - 
            Level: ${format(data.voidUps[i][0])} | Cost: ${format(temp.voidUpCosts[0][i])} Voids`;
        }
    }

    //Assorted Functions
}