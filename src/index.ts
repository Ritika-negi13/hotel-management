var read = require('readline-sync');
import {hotel} from './model/hotel'
import {addHotel} from './service/addhotel'
import {showHotels} from './service/addhotel'
import {bookHotel}from './service/booking'
console.log("Welcome to hotel management application");
let flag=true
while(flag==true){
    console.log("1: Add new hotel")
    console.log("2: Show hotels")
    console.log("3: Book hotel")
    let i=read.question("enter your choice")
    switch(i){
        case '1':{
            let name=read.question("enter hotel name: ");
            let id=read.question("enter hotel id : ");
            let loc=read.question("enter hotel location : ");

            let h1=new hotel(name,id,loc);
            addHotel(h1);
            read.question();
            break;
        }
        case '2':{
            showHotels();
            read.question();
            break;
        }
        case '3':{
            showHotels();
            let id=read.question("Enter hotel id : ");
            bookHotel(id);
            
            read.question();
            break;
        }
        default:{
            flag=false;
            break;
        }
    }
}


