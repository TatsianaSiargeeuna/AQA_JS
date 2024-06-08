// 1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)

//   Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)



let bytes = 17_370_548_535_296;
const textBytes = bytes;
let counter = 0;

while (counter >= 0) {

    if (bytes/1024 >= 1) {
    bytes = bytes/1024;
    counter++;

    }else{

    break

    }
};

switch (counter) {

    case 0: 
    console.log(`${textBytes} bytes can't be converted to any other value.`);
    break; 

    case 1: 
    console.log(`${textBytes} bytes = ${(bytes).toFixed(1)} Kb`);
    break; 
        
    case 2: 
    console.log(`${textBytes} bytes = ${(bytes).toFixed(1)} Mb`);
    break; 
    
    case 3: 
    console.log(`${textBytes} bytes = ${(bytes).toFixed(1)} Gb`);
    break; 

    case 4: 
    console.log(`${textBytes} bytes = ${(bytes).toFixed(1)} Tb`);
    break; 
              
 };




// 2. Сделать из "*" в консоли равнобедренный треугольник и ромб


let i = 0;
let j = 0;

const lines = 5;
let space = "";
let star = "";

while (i < lines) {
  space = "";
  star = "";
  
  for (j = 0; j < lines - i; j++) 
  space = space + " ";

  
  for (k = 0; k < 2 * i + 1; k++) 
  star = star + "*";

  console.log(space + star);
  i++;
  
}




// 3.  Вам нужно вывести в консоль числа от 1 до 100.
//     Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//     Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//     Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
//     Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.


for (let i = 1; i <= 100; i++) {
    if (!(i%3) && (i%5)) {
        console.log (`Число ${i} делится на 3 и 5`);
    }

    else if (!(i%3)) {
        console.log (`Число ${i} делится на 3`);
    }

    else if (!(i%5)) {
        console.log (`Число ${i} делится на 5`);
    }

    else {
        console.log (i);
        }
    }




// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer


const string ='I am super engineer';
const splitedString = string.split(' ');
const camelCase = [];

for (let i = 0; i < splitedString.length; i++) {
  if (splitedString[i][0] === splitedString[i][0].toUpperCase()) {
    camelCase.push(splitedString[i].toLowerCase());
  } else {
    camelCase.push(splitedString[i][0].toUpperCase() + splitedString[i].slice(1));
  }
}
console.log(camelCase.join(''))