var read = require('./node_modules/readline-sync');
import{hotel} from './src/model/hotel'
import {addHotel} from './src/service/addhotel'
import {showHotels} from './src/service/addhotel'
console.log("Welcome to hotel management application");
let flag=true
while(flag==true){
    console.log("1: Add new hotel")
    console.log("2: Book hotel")
    let i=read.question("enter your choice")
    switch(i){
        case '1':{
            let name=read.question("enter hotel name: ");
            let id=read.question("enter hotel id : ");
            let loc=read.question("enter hotel location : ");

            let h1=new hotel(name,id,loc);
            addHotel(h1);
            break;
        }
        case '2':{
            showHotels();
            break;
        }
        default:{
            flag=false;
            break;
        }
    }
}
