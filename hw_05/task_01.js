// 1. Создайте цикл, который выведет в консоль цифры от 10 до 0.


for ( let i = 10; i>= 0; i--) {
    console.log(i)
}




// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//   Пример в консоли:
//   :)
//   :):)
//   :):):)
//   :):):):)
//   :):):):):)

//   Также реализовать циклом while. Рекоммендация: попробуйте метод .repeat().


const smile = ':)';
let result = '';

for (let i = 0; i < 5; i++) {
    result = result + smile;
    console.log(result);
}




const smile = ':)';
let result = '';
let i = 0;

while (i < 5){
    result = result + smile;
    console.log(result);
    i++;
}




let smile = '';
let i = 0;

do {
    smile = smile + ':)';
    console.log(smile);
    i++;
} while (i < 5);




let smile = ':)';
let i = 1;

do {
    console.log(smile.repeat(i));
    i++;
} while (i < 6);

