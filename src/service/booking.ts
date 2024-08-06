import {hotels} from '../service/addhotel'

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
                    hotels[val].checkInDate=new Date('24-05-2025');
                    hotels[val].checkOutDate=new Date('30-05-2025');
                    hotels[val].isAvailable=false;
                }
                else
                {
                    throw new Error("not available")
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