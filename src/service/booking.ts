import {hotels} from '../service/addhotel'
var read = require('readline-sync');
export function bookHotel(id:string){
    try{
        let val=hotels.findIndex((hotel)=>hotel.id==id);
        
        if(val==-1){
            throw new Error("No Hotel found with provided id")
        }
        else
        {
            try{
                if(hotels[val].isAvailable)
                {
                    
                    hotels[val].checkInDate=new Date();
                    hotels[val].checkOutDate=new Date();
                    hotels[val].isAvailable=false;
                    console.log("Room Booked")
                }
                else
                {
                    throw new Error(" Room not available")
                }
            }
            catch(e:any){
                console.log(e.message);
            }
        }
    }
    catch(e:any){
        console.log(e.message)
    }
}