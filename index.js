"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var read = require('./node_modules/readline-sync');
var hotel_1 = require("./src/model/hotel");
var addhotel_1 = require("./src/service/addhotel");
var addhotel_2 = require("./src/service/addhotel");
console.log("Welcome to hotel management application");
var flag = true;
while (flag == true) {
    console.log("1: Add new hotel");
    console.log("2: Book hotel");
    var i = read.question("enter your choice");
    switch (i) {
        case '1': {
            var name_1 = read.question("enter hotel name: ");
            var id = read.question("enter hotel id : ");
            var loc = read.question("enter hotel location : ");
            var h1 = new hotel_1.hotel(name_1, id, loc);
            (0, addhotel_1.addHotel)(h1);
            break;
        }
        case '2': {
            (0, addhotel_2.showHotels)();
            break;
        }
        default: {
            flag = false;
            break;
        }
    }
}
