export{}

// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 


// type Grade =  'junior' | 'middle' | 'senior' | 'lead';

// enum OCCUPATION {
//     DEVELOPER = 'Developer',
//     QA = 'QA',
//     AQA = 'AQA',
//     BA = 'BA',
//     PM = 'PM',
// }

// interface IAdress {
//     country: string;
//     street: string
//     house: number;
//     flat: number;
// }

// interface ItEmployee {
//     name: string;
//     surname: string;
//     readonly salary: number;
//     grade: Grade;
//     occupation: OCCUPATION;
//     adress?: IAdress;
//     projectNames: string[];
// }

// interface IEmployee {
//     name: string;
//     surname: string;
//     readonly salary: number;
//     adress?: IAdress;
// }


// const employee_1: ItEmployee = {
//     name: 'Ivan',
//     surname: 'Ivanov',
//     salary: 2100,
//     grade: 'middle',
//     occupation: OCCUPATION.BA,
//     projectNames: ['Project_1', 'Project_2', 'Project_3'],
//     adress: {
//         country: 'Belarus',
//         street: 'Minskaya',
//         house: 19,
//         flat: 29
//     },
// };


// const employee_2: IEmployee = {
//     name: 'Petr',
//     surname: 'Petrov',
//     salary: 1900,
//     adress: {
//         country: 'Belarus',
//         street: 'Vitebskaya',
//         house: 49,
//         flat: 12
//     },
// };

// // Type Guard:
// function isItEmployee (object: ItEmployee | IEmployee): object is ItEmployee {
//     return 'projectNames' in object
// };


// function printEmployeeInfo(employee: ItEmployee | IEmployee) {

//     console.log(`name: ${employee.name} ${employee.surname}
//         salary: ${employee.salary}$
//         address: ${employee.adress}`)

//     if (isItEmployee(employee)) {
//         console.log(`occupation: ${employee.occupation}, ${employee.grade}
//         projects: ${employee.projectNames.join(', ')}
//         address: ${employee.adress}`);
//     }
// };

// printEmployeeInfo(employee_1);
// printEmployeeInfo(employee_2);




// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
//     который будет использоваться для проверки каждого числа на соответствие требованиям. 
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.


// const array = [1, -5, 2, 3, 4, 133, 68];

// type ForCallback = (n: number) => boolean;
// type ForArrayOfNumbers = number[];

// function forFilter (arrayOfNumbers: typeForArrayOfNumbers, callback: typeForCallback) {
//     return arrayOfNumbers.filter(callback);
// };

// console.log(forFilter(array, (n) => n > 3));
// console.log(forfilter(array, (n) => n % 2 == 0));

