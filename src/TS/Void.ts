import { globalData as data, globalTemp as temp } from "./data";

export function purchaseVoidUp(a: String, b: number) {
    switch(a) {
        case 'Regular': 
            if(data.void[0].gte(temp.voidUpCosts[0][b])) {
                data.void[0] = data.void[0].sub(temp.voidUpCosts[0][b]);
                data.voidUps[0][b] = data.voidUps[0][b].plus(1);
            }
    }
}