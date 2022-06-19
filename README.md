# parking-lot-system-design


There are two classes defined:

`ParkingLot()`: It is the main class which is used to initialize a parking lot.

- `createParkingLot(input)` : Creates a parking lot with given input.

- `parkCar(input)` : Allocates nearest slot from entry gate to the car.

- `leaveCar(input)` : Removes car in given slot in parking lot. 

- `getParkingStatus()` : Returns an array containing slot number, registration number and color. 

- `getCarsWithSameColor(input)` : Returns a comma separated string containing registration numbers of cars with same color e.g. `KA-01-HH-1234, KA-01-HH-9999, KA-01-P-333`.

- `getSlotsWithSameColorCar(input)` : Returns a comma separated string containing slot numbers of car with same color e.g. `3, 5, 6`.

- `getSlotByCarNumber(input)` : Finds slot number of car for given registration number. It returns `Not found` when car is not present.

- `findNearestAvailableSlot()` : Finds nearest free slot.

`Car()`

- `new Car(NUMBER, COLOR)` : Constructor used to initialize a car object containing two fields, registration number and color.


`Note - Error cases are handled in all functions`



## Open terminal and type the following:

1. `cd parking_lot` : Navigates to the `parking_lot` root folder.

2. `npm install` : Installs all the dependencies.

3. `npm run start` : Starts the console application in cli

4. `npm run test` : Runs all the tests and generate the coverage report.


## Dependencies Used

- [Mocha](https://mochajs.org/): A JavaScript test framework for Node.js programs.
- 
- [Chai](https://www.chaijs.com/): A BDD/TDD assertion library for Node.js and it can be paired with any JS testing framework.
- 
- [nyc](https://www.npmjs.com/package/nyc): A JS code coverage tool extensively tested with Mocha for measuring code coverage.
- 
- [Chalk](https://www.npmjs.com/package/chalk): A npm module used to style terminal string.
