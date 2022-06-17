var Car = require('./car.js');

/**
 * @description a base class for Parking lot
 */
class ParkingLot {
    constructor() {
        this.MAX_PARKING_SLOTS = 0; // maximum parking slots allowed
        this.parkingSlots = new Array(); // array for parking slots
    }

    createParkingLot(input) {
        this.MAX_PARKING_SLOTS = parseInt(input.split(' ')[1]);
        if (this.MAX_PARKING_SLOTS <= 0) {
            throw new Error('Minimum one slot is required to create parking slot');
        }
        for (var i = 0; i < this.MAX_PARKING_SLOTS; i++) {
            this.parkingSlots.push(null);
        }
        return this.MAX_PARKING_SLOTS;
    }

    parkCar(input) {
        var len = this.parkingSlots.length;
        if (this.MAX_PARKING_SLOTS > 0) {
            var car, carNumber, carColor;
            if (this.findNearestAvailableSlot(this.parkingSlots) == true) {
                for (var i = 0; i < len; i++) {
                    if (this.parkingSlots[i] == null) {
                        carNumber = input.split(' ')[1];
                        carColor = input.split(' ')[2];
                        if (carNumber && carColor) {
                            car = new Car(carNumber, carColor);
                            this.parkingSlots[i] = car;
                            i = i + 1;
                            return i;
                        } else {
                            throw new Error('Please provide registration number and color both');
                        }
                    }
                }
            } else {
                throw new Error('Sorry, parking lot is full');
            }
        } else {
            throw new Error('Minimum one slot is required to create parking slot');
        }
    }

    leaveCar(input) {
        if (this.MAX_PARKING_SLOTS > 0) {
            var index = parseInt(input.split(' ')[1] - 1);
            if (index >= this.MAX_PARKING_SLOTS) {
                throw new Error(`Slot number ${index + 1} is not found`);
            } else if (this.parkingSlots[index] === null) {
                throw new Error(`Slot number ${index + 1} is already free`);
            } else if (index > -1 && index <= this.parkingSlots.length) {
                this.parkingSlots[index] = null;
                index = index + 1;
                return index;
            }
        } else {
            throw new Error('Sorry, parking lot is empty');
        }
    }

    getParkingStatus() {
        var arr = new Array();
        if (this.MAX_PARKING_SLOTS > 0) {
            arr.push('Slot No. Registration No. Color ');

            for (var i = 0; i < this.parkingSlots.length; i++) {
                if (this.parkingSlots[i] != null) {
                    var e = i + 1;
                    arr.push(e + '.  ' + this.parkingSlots[i].NUMBER + '  ' + this.parkingSlots[i].COLOR);
                }
            }
            return arr;
        } else {
            throw new Error('Sorry, parking lot is empty');
        }
    }

    getCarsWithSameColor(input) {
        if (this.MAX_PARKING_SLOTS > 0) {
            var sameColoredCarsArray = new Array();
            for (var i = 0; i < this.parkingSlots.length; i++) {
                if (
                    this.parkingSlots[i] &&
                    this.parkingSlots[i].COLOR.toLowerCase() == input.split(' ')[1].toLowerCase()
                ) {
                    sameColoredCarsArray.push(this.parkingSlots[i].NUMBER);
                }
            }
            return sameColoredCarsArray.join(', ');
        } else {
            return null;
        }
    }

    getSlotsWithSameColorCar(input) {
        if (this.MAX_PARKING_SLOTS > 0) {
            var slotsWithSameColorCarArray = new Array();
            for (var i = 0; i < this.parkingSlots.length; i++) {
                if (
                    this.parkingSlots[i] &&
                    this.parkingSlots[i].COLOR.toLowerCase() == input.split(' ')[1].toLowerCase()
                ) {
                    slotsWithSameColorCarArray.push(i + 1);
                }
            }
            return slotsWithSameColorCarArray.join(', ');
        } else {
            return null;
        }
    }

    getSlotByCarNumber(input) {
        if (this.MAX_PARKING_SLOTS > 0) {
            var ele = 'Not found';
            for (var i = 0; i < this.parkingSlots.length; i++) {
                if (this.parkingSlots[i] && this.parkingSlots[i].NUMBER == input.split(' ')[1]) {
                    ele = i + 1;
                }
            }
            return ele;
        } else {
            return null;
        }
    }

    findAllAvailableSlots() {
        if (this.MAX_PARKING_SLOTS > 0) {
            var availableSlots = new Array();
            for (var i = 0; i < this.parkingSlots.length; i++) {
                if (!(this.parkingSlots[i] && this.parkingSlots[i].COLOR && this.parkingSlots[i].NUMBER)) {
                    availableSlots.push(i + 1);
                }
            }
            return availableSlots.join(', ');
        } else {
            return null;
        }
    }

    findAllAllocatedSlots() {
        if (this.MAX_PARKING_SLOTS > 0) {
            var allocatedSlots = new Array();
            for (var i = 0; i < this.parkingSlots.length; i++) {
                if (this.parkingSlots[i] && this.parkingSlots[i].COLOR && this.parkingSlots[i].NUMBER) {
                    allocatedSlots.push(i + 1);
                }
            }
            return allocatedSlots.join(', ');
        } else {
            return null;
        }
    }

    findNearestAvailableSlot() {
        var ele = false;
        for (var i = 0; i < this.parkingSlots.length; i++) {
            if (this.parkingSlots[i] == null) {
                ele = true;
            }
        }
        return ele;
    }
}

module.exports = ParkingLot;