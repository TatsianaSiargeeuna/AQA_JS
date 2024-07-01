// Task 2.

class Animal {
    constructor(type, color, weight, height, placeOfOrigin) {
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    }

    getInfo() {
        return `type: ${this.type}
        color: ${this.color}
        weight: ${this.weight}
        height: ${this.height}
        place of origin: ${this.placeOfOrigin}`;
    }

    get color(){
        return this._color;
    }

    set color(newColor){
        if (newColor !== 'Red' && newColor !== 'Blue' && newColor !== 'White' && newColor !== 'Black') throw new Error ('Wrong color');
        this._color = newColor;
    }
}


class Snake extends Animal {
    #isPoisonous;
    constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
        super(type, color, weight, height, placeOfOrigin);
        this.#isPoisonous = isPoisonous;
    }

    checkPoisonous() {
        if (this.#isPoisonous) return `Yes, ${this.type} is poisonous.`;
        else return `No, ${this.type} is not poisonous.`;
    }
}

const lion = new Animal ('Lion', 'Red', '128 kg', '150 cm', 'Africa');
const whiteLion = new Animal ('Lion', 'White', '128 kg', '150 cm', 'Africa');
const cobra = new Snake ('Cobra', 'Black', '5 kg', '60 cm', 'India', 'Poisonous');




// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal


class Bird extends Animal {
    #isFlying
    constructor (type, color, weight, height, placeOfOrigin, isFlying) {
        super(type, color, weight, height, placeOfOrigin);
        this.#isFlying = isFlying;
    }

    checkIsFlying() {
        if (this.#isFlying) return `Yes, ${this.type} can fly.`;
        else return `No, ${this.type} cann't fly.`;
    }
};


class CatLike extends Animal {
    constructor (type, color, weight, height, placeOfOrigin, isSafeToPet) {
        super(type, color, weight, height, placeOfOrigin);
        this.isSafeToPet = isSafeToPet;
    }
};

const pigeon = new Bird ('Pigeon', 'Blue', '300 g', '20 cm', 'New York', 'Yes')
const manul = new CatLike ('Manul', 'Red', '5 kg', '50 cm', 'Asia', 'If "no" then why it is friendshaped?')

console.log(pigeon.checkIsFlying());




// 3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
//     class Worker
//       firstName
//       lastName
//       phone
//       getFullName()


class Worker {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone
    }

    getFullName() {
        return `Full name is ${this.firstName} ${this.lastName}.`
    }
}

const worker_1 = new Worker ('Ivan', 'Belkin', '9456578');
const worker_2 = new Worker ('Petr', 'Sergeev', '2358697');

console.log(worker_1.getFullName());




// 4. Создайте класс Zoo, реализующий следующий интерфейс:
//     class Zoo
//       address
//       title
//       ticket price
//       workers: []
//       animals: [],
// 5. Добавьте геттеры и сеттеры к полям address, title, ticket price
// 6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
//     На вход метод должен принимать объект класса Worker. 
//     Если объект не является инстансом класса Worker - выкинуть ошибку
// 7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
//     На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
//     Если объект не является инстансом класса Animal - выкинуть ошибку
//     ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
// 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать :)


class Zoo {

    workers = [];
    animals = [];

    constructor (address, title, ticket_price) {
        this.address = address;
        this.title = title;
        this.ticket_price = ticket_price;
    }

    
    get address(){
        return this._address;
    }

    set address(newAddress){
        this._address = newAddress;
    }


        get title(){
            return this._title;
        }

        set title(newTitle){
            this._title = newTitle;
        }


    get ticket_price(){
        return this._ticket_price;
    }

    set ticket_price(newTicketPrice){
        this._ticket_price = newTicketPrice;
    }


    addWorker(worker){
        if (!(worker instanceof Worker)) throw new Error("Invalid data");
        this.workers.push(worker);
    }


    addAnimal(animal){
        if (!(animal instanceof Animal)) throw new Error("Invalid data");
        if (animal instanceof Snake) throw new Error("There will be no snakes, mister Potter!");
        this.animals.push(animal);
    }

    
    removeWorker(phoneNumber){
        const index = this.workers.findIndex(element => element.phone === phoneNumber);
          this.workers.splice(index, 1);
    }

    removeAnimal(animalType, animalColor){
        const index = this.animals.findIndex(element => element.type === animalType && element.color === animalColor);
          this.animals.splice(index, 1);
    }
}
 

const newZoo = new Zoo ('London', 'Great Zoo', '50$');

newZoo.addWorker(worker_1);
newZoo.addWorker(worker_2);
newZoo.addAnimal(lion);
newZoo.addAnimal(whiteLion);
newZoo.addAnimal(manul);
newZoo.removeWorker('9456578');
newZoo.removeAnimal('Lion', 'White');
console.log(newZoo);