import {hotel} from '../model/hotel';
export let hotels:hotel[] = [];

export function addHotel(h1:hotel){
    hotels.push(h1);
}

let h1 = new hotel('Tulip', '1', 'Banglore');
addHotel(h1);


console.log(hotels);