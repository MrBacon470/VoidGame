import { purchaseVoidUp } from "./Void";


export function generateEventHandlers() {
    for(let i = 0; i < 4; i++) {
        document.getElementById(`vu${i+1}`).addEventListener('click', () => {
            purchaseVoidUp(`Regular`, i);
        });
    }
}