

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function getCarHonda(carInventory) {
    for (let i = 0; i < carInventory.length; i++) {
        const car = carInventory[i];
        if(car.car_make === "Honda"){
            console.log(`This is a ${car.car_make} ${car.car_model} from ${car.car_year}`);
            return car
        } 
    }
}
getCarHonda(inventory)

const numbers = [0, 2, 5, 3, 10];
numbers.sort((a, b) => a - b);

console.log(numbers);