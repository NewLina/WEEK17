import {data} from './data.js';
const main=document.querySelector('.wrapper');
class Transport {
    type;
    price;
    brand;

    constructor (type, price, brand){
        this.type=type;
        this.price=price;
        this.brand=brand;
    }
    getInfo() {
        return `
            Type: ${this.type} <br>
            Brand: ${this.brand}
        `
    }
    getPrice(){
        return `Price: ${this.price} rub.`;
    }
}
class Car extends Transport{
    doors;

    constructor(type, price, brand, doors){
        super(type, price, brand);
        this.doors=doors;
    }
    getDoorsCount(){
        return `Doors: ${this.doors}`;
    }
}

class Bike extends Transport{
    maxSpeed;

    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed=maxSpeed;
    }
    getMaxSpeed() {
        return `Max. speed: ${this.maxSpeed}`;
    }
}

function createItems(type, vehicleCar, image, vehicleBike) {
    return type ==='car' ? createItemCar(vehicleCar, image) : createItemBike(vehicleBike, image);
}
function createItemCar(vehicleCar, image){
    let display='';
    display=`<div class='vehicle'><div class='vehicle__info'>${vehicleCar.getInfo()}</div>
    <div class='vehicle__price'>${vehicleCar.getPrice()}</div>
    <div class='vehicle__doors'>${vehicleCar.getDoorsCount()}</div>
    <div class='vehicle__image'><img class='picture' src="${image}" alt="image"></div>
    </div>`
    main.innerHTML+=display;
}
function createItemBike(vehicleBike, image){
    let display='';
    display=`<div class='vehicle'><div class='vehicle__info'>${vehicleBike.getInfo()}</div>
    <div class='vehicle__price'>${vehicleBike.getPrice()}</div>
    <div class='vehicle__doors'>${vehicleBike.getMaxSpeed()}</div>
    <div class='vehicle__image'><img class='picture' src="${image}" alt="image"></div>
    </div>`
    main.innerHTML+=display;
}

data.forEach((item)=>{
    const vehicleCar=new Car(item.type, item.price, item.brand, item.doors);
    const vehicleBike=new Bike(item.type, item.price, item.brand, item.maxSpeed);

    createItems(item.type, vehicleCar, item.image, vehicleBike);
})

