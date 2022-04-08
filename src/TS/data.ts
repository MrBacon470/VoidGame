import Decimal, { DecimalSource } from 'break_eternity.js';
export const D = (x: DecimalSource | undefined) => new Decimal(x)
//create all the variables in a globalData object for saving
function getDefaultObject() {
    return {
        void: D(0),
        time: Date.now(),
        devSpeed: 1,
        currentTab: 0,
    }
}
//this is for variables that aren't saved
function defaultTempVars() {
    return {
        //No temp yet
    }
}
export let globalTemp = defaultTempVars()
export let globalData = getDefaultObject()
//saving and loading
const saveName = "voidGameSave"
function save(){
    window.localStorage.setItem(saveName, JSON.stringify(globalData))
}
export function load() {
    let savedata:string = JSON.parse(window.localStorage.getItem(saveName) || '{}')
    if (savedata !== undefined) fixSave(globalData, savedata)
}
//fix saves
function fixSave(main:any=getDefaultObject(), data:any) {
    if (typeof data === "object") {
        Object.keys(data).forEach(i => {
            if (main[i] instanceof Decimal) {
                main[i] = D(data[i]!==null?data[i]:main[i])
            } else if (typeof main[i]  == "object") {
                fixSave(main[i], data[i])
            } else {
                main[i] = data[i]
            }
        })
        return main
    }
    else return getDefaultObject()
}
function exportSave(){
    save()
    let exportedData = btoa(JSON.stringify(globalData));
    const exportedDataText = document.createElement("textarea");
    exportedDataText.value = exportedData;
    document.body.appendChild(exportedDataText);
    exportedDataText.select();
    exportedDataText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(exportedDataText);
}
function importSave(){
    let importedData = prompt("Paste your save data here!")
    // @ts-ignore
    globalData = Object.assign(getDefaultObject(), JSON.parse(atob(importedData)))
    save()
    location.reload()
}
window.setInterval(function(){
    save()
}, 10000);

//full reset
function fullReset(){
    exportSave()
    window.localStorage.removeItem(saveName)
    location.reload()
}
function deleteSave(){
        window.localStorage.removeItem(saveName)
        location.reload()
}

