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

const checkAge = 19

if (isNaN(checkAge) || checkAge < 0 || checkAge > 120 || checkAge == " " || checkAge == null) {
    console.log('Error. Wrong data type.');
}

else if (+checkAge < age_1) {
    console.log('You don’t have access cause your age is ' + checkAge + '. It’s less then ' + age_1 + '.');
}

else if (+checkAge >= age_1 && checkAge < age_2) {
    console.log('Welcome!');
}

else if (+checkAge >= age_2) {
    console.log('Keep calm and look culture channel.');

}
