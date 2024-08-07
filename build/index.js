"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var read = require('readline-sync');
const hotel_1 = require("./model/hotel");
const addhotel_1 = require("./service/addhotel");
const addhotel_2 = require("./service/addhotel");
const booking_1 = require("./service/booking");
console.log("Welcome to hotel management application");
let flag = true;
while (flag == true) {
    console.log("1: Add new hotel");
    console.log("2: Show hotels");
    console.log("3: Book hotel");
    let i = read.question("enter your choice");
    switch (i) {
        case '1': {
            let name = read.question("enter hotel name: ");
            let id = read.question("enter hotel id : ");
            let loc = read.question("enter hotel location : ");
            let h1 = new hotel_1.hotel(name, id, loc);
            (0, addhotel_1.addHotel)(h1);
            read.question();
            break;
        }
        case '2': {
            (0, addhotel_2.showHotels)();
            read.question();
            break;
        }
        case '3': {
            (0, addhotel_2.showHotels)();
            let id = read.question("Enter hotel id : ");
            (0, booking_1.bookHotel)(id);
            console.log("Room Booked");
            read.question();
            break;
        }
        default: {
            flag = false;
            break;
        }
    }
}
