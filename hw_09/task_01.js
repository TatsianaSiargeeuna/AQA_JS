// Task 1

// 1. Создайте класс Animal
// 2. В конструкторе класс должен принимать следующие параметры:     
//   - type
//   - color
//   - weight
//   - height
//   - place of origin
// 3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
// 4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
// 5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
//   - Красный
//   - Черный
//   - Белый
//   - Синий
// Если не является - кидаем ошибку через throw new Error('текст ошибки')


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


const lion = new Animal ('Lion', 'Red', '128 kg', '150 cm', 'Africa');

console.log(lion.getInfo());
console.log(lion.color);
lion.color = 'Black';
console.log(lion.color);
lion.color = 'Yellow';


// 6. Создайте класс Snake, который будет наследовать класс Animal
// 7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous
// 8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
// 9. В классе Snake создать метод checkPoisonous(), который возвращает true/false
// 10. Сделайте поле isPoisonous приватным в классе Snake


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


const cobra = new Snake ('Cobra', 'Black', '5 kg', '60 cm', 'India', 'Poisonous');

console.log(cobra.getInfo());
console.log(cobra.checkPoisonous());