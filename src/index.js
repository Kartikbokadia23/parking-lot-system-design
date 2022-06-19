#!/usr/bin/env node

const fs = require('fs'),
    chalk = require('chalk'),
    readLine = require('readline');

var interactiveMode = true;

var Parking = require('./modules/parkingLot.js'),
    parkingLot = new Parking();

require('events').EventEmitter.defaultMaxListeners = 0;

if (interactiveMode === true) {
    openInteractiveConsole();
}

function openInteractiveConsole() {
    var prompts = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false,
    });

    if (interactiveMode) {
        prompts.question('Input: ', function(data) {
            processUserCommands(data);
        });
    }
}

function processUserCommands(input) {
    var userCommand = input.split(' ')[0],
        totalParkingSlots,
        parkingSlotNumber,
        parkingSlotNumbers;
    switch (userCommand) {
        case 'create_parking_lot':
            try {
                totalParkingSlots = parkingLot.createParkingLot(input);
                console.log(
                    chalk.yellow.bold('Created a parking lot with ' + totalParkingSlots + ' slots.'),
                );
            } catch (err) {
                console.log(chalk.red.bold(err.message));
            }

            break;
        case 'park':
            try {
                parkingSlotNumber = parkingLot.parkCar(input);
                console.log(chalk.green('Allocated slot number: ' + parkingSlotNumber));
            } catch (err) {
                console.log(chalk.red.bold(err.message));
            }
            break;
        case 'leave':
            try {
                parkingSlotNumber = parkingLot.leaveCar(input);
                console.log(chalk.blue('Slot number ' + parkingSlotNumber + ' is free.'));
            } catch (err) {
                console.log(chalk.red(err.message)); // handling exceptions
            }
            break;
        case 'status':
            try {
                var parkingSlotStatus = parkingLot.getParkingStatus();
                if (parkingSlotStatus.length > 1) {
                    console.log(parkingSlotStatus.join('\n'));
                } else {
                    console.log(chalk.yellow('Sorry, parking lot is empty')); // what if it's empty
                }
            } catch (err) {
                console.log(chalk.red.bold(err.message));
            }
            break;
        case 'registration_numbers_for_cars_with_colour':
            var registrationNumbers = parkingLot.getCarsWithSameColor(input);
            if (registrationNumbers) {
                console.log(registrationNumbers);
            } else {
                console.log(chalk.red('Sorry, Car with given color is not found'));
            }
            break;
        case 'slot_numbers_for_cars_with_colour':
            parkingSlotNumbers = parkingLot.getSlotsWithSameColorCar(input);
            if (parkingSlotNumbers) {
                console.log(parkingSlotNumbers);
            } else {
                console.log(chalk.red.bold('Sorry, Car with given color is not found'));
            }
            break;
        case 'slot_number_for_registration_number':
            parkingSlotNumber = parkingLot.getSlotByCarNumber(input);
            if (parkingSlotNumber) {
                console.log(parkingSlotNumber);
            } else {
                console.log(chalk.red.bold('Sorry, Car with given registration number is not found'));
            }
            break;
        case 'exit':
            process.exit(0);
            break;
        default:
            console.log(chalk.red.bold(input, 'is an invalid command'));
            break;
    }
    openInteractiveConsole();
}