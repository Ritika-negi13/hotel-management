import {hotel} from '../model/hotel';
export let hotels:hotel[] = [
    {
        name:'Hotel Tulip Inn',
        id:'234',
        location:'Banglore',
        isAvailable:true,
    }
];

export function addHotel(h1:hotel){
    hotels.push(h1);
    console.log(hotels);
}
export function showHotels()
{
    console.log(hotels)
}