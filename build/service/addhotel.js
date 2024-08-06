"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotels = void 0;
const hotel_1 = require("../model/hotel");
exports.hotels = [];
function addHotel(h1) {
    exports.hotels.push(h1);
}
function checkHotel(id) {
    try {
        let val = exports.hotels.filter(function (val) {
            return val.id == id;
        });
        if (val.length == 0) {
            throw new Error("No Hotel found with provided id");
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
let h1 = new hotel_1.hotel('Tulip', '1', 'Banglore');
addHotel(h1);
checkHotel('hfhsf');
console.log(exports.hotels);
