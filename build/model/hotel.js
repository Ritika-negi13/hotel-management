"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotel = void 0;
class hotel {
    constructor(name, id, location) {
        console.log("in hotel");
        this.name = name;
        this.id = id;
        this.location = location;
        this.isAvailable = true;
    }
}
exports.hotel = hotel;
