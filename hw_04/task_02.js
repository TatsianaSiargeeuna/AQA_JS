// 1. Реализовать Task 1 через switch


const age_1 = 18
const age_2 = 60

const checkAge = 10

switch (true) {
  case (checkAge < age_1): {
    console.log('You don’t have access cause your age is ' + checkAge + '. It’s less then ' + '.');
    break;
  }
  case (checkAge >= age_1 && checkAge < age_2): {
    console.log('Welcome!')
    break;
  }
  case (checkAge >= age_2): {
    console.log('Keep calm and look culture channel.')
    break;
  }
  default:
        console.log('Technical work.');
    
}




// 2. Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
//    И если он не number - кидалась ошибка в консоль.
//    Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"


const age_1 = 18
const age_2 = 60

const checkAge = 19

if (typeof checkAge != 'number') {
    console.log('Error. Wrong data type.');
}

else if (checkAge < age_1) {
    console.log('You don’t have access cause your age is ' + checkAge + '. It’s less then ' + age_1 + '.');
}

else if (checkAge >= age_1 && checkAge < age_2) {
    console.log('Welcome!');
}

else if (checkAge >= age_2) {
    console.log('Keep calm and look culture channel.');

}





// 3. Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
//    преобразовываясь в number


const age_1 = 18
const age_2 = 60

const checkAge = -2
const checkAgeString = String(checkAge);                   // имитирую работу prompt, так как не все значения диапазона можно проверить c выводом результата в консоль без перевода в строку
const checkAgeStringTrimmed = checkAgeString.trim();

if (isNaN(checkAgeStringTrimmed) || checkAgeStringTrimmed < 0 || checkAgeStringTrimmed > 120 || checkAgeStringTrimmed == "") {
    +checkAgeStringTrimmed
    console.log('Error. Wrong data type.');
}

else if (checkAgeStringTrimmed < age_1) {
    console.log('You don’t have access cause your age is ' + checkAgeStringTrimmed + '. It’s less then ' + age_1 + '.');
}

else if (checkAgeStringTrimmed >= age_1 && checkAgeStringTrimmed < age_2) {
    console.log('Welcome!');
}

else if (checkAgeStringTrimmed >= age_2) {
    console.log('Keep calm and look culture channel.');

}
