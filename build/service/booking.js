"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookHotel = bookHotel;
const addhotel_1 = require("../service/addhotel");
var read = require('readline-sync');
function bookHotel(id) {
    try {
        let val = addhotel_1.hotels.findIndex((hotel) => hotel.id == id);
        if (val == -1) {
            throw new Error("No Hotel found with provided id");
        }
        else {
            try {
                if (addhotel_1.hotels[val].isAvailable) {
                    addhotel_1.hotels[val].checkInDate = new Date();
                    addhotel_1.hotels[val].checkOutDate = new Date();
                    addhotel_1.hotels[val].isAvailable = false;
                }
                else {
                    throw new Error(" Room not available");
                }
            }
            catch (e) {
                console.log(e.message);
            }
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
