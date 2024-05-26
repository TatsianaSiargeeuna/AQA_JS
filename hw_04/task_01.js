// 1. Создать переменную “age” и присвоить ей значение 10
// 2. Создать переменную “age_2” и присвоить ей значение 18
// 3. Создать переменную “age_3” и присвоить ей значение 60
// 4. Создать if в котором будите проверять значение переменной age_1
// Если “age” < age_2, вывести в консоль “You don’t have access cause your age is ” + “age” + “ It’s less then ”
// Если “age” >=  age_2 и “age” <  age_3, вывести в консоль “Welcome  !”
// Если “age”  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// Иначе выводите “Technical work”.

// изменила названия переменных


const age_1 = 18
const age_2 = 60

const checkAge = 17

if (checkAge < age_1) {
    console.log('You don’t have access cause your age is ' + checkAge + '. It’s less then ' + age_1 + '.');

}
else if (checkAge >= age_1 && checkAge < age_2) {
    console.log('Welcome!');

}
else if (checkAge >= age_2) {
    console.log('Keep calm and look culture channel.');

}
else {console.log('Technical work.');

}
