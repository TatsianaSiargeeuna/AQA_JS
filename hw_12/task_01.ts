// 1. Создайте дженерик функцию getFirstElement, которая принимает массив элементов типа T, и возвращает первый элемент (типа T).


const arrayNew = [1, 2, 3, 4, 5];

function getFirstElement <T> (array: T []): T {
    return array[0];
}

console.log(getFirstElement(arrayNew));




// 2. Создайте интерфейс Person, абстрактный класс Employee, который реализует интерфейс Person, и конкретные классы Manager и Developer.
//   - Интерфейс Person должен содержать:
//       Стринговые поля: name, surname, experienceYears
//       Метод, возвращающий строку: getDetails().

//   - Абстрактный класс Employee должен:
//       Реализовывать интерфейс Person.
//       Содержать защищенное поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
  
//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)


interface IPerson {
    name: string;
    surname: string;
    expirienceYears: number;
    getDetails(): string;
};


abstract class Employee implements IPerson {

                protected salary: number = 0;

    constructor(public name: string, 
                public surname: string, 
                public expirienceYears: number) {

                this.getDetails()
                this.calculateSalary()};
    
                abstract getDetails(): string;
                protected abstract calculateSalary(): number;
};


class Manager extends Employee {
    constructor (public name: string, public surname: string, public expirienceYears: number, public prefered: "scrum" | "canban") {
        super(name, surname, expirienceYears)   
    };

    protected calculateSalary(): number {
        return this.salary = this.expirienceYears * 500;
    };

    public getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am manager with ${this.expirienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary`
    };

};


class Developer extends Employee {
    constructor (public name: string, public surname: string, public expirienceYears: number, public programmingLanguage: "js" | "ts" | "java" | "python") {
         super(name, surname, expirienceYears)    
    };

    protected calculateSalary(): number {
        return this.salary = this.expirienceYears * 1000;
    };

    public getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am developer with ${this.expirienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary`
    };
};


const manager = new Manager("Ivan", "Petrov", 2, "scrum");
const developer = new Developer("Petr", "Ivanov", 4, "js");

console.log(manager.getDetails());
console.log(developer.getDetails());

