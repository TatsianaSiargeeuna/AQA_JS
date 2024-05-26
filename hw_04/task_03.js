// Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert


const age_1 = 18
const age_2 = 60

const checkAge = prompt('Please, enter your age', []);

if (isNaN(checkAge) || checkAge < 0 || checkAge > 120 || checkAge == " " || checkAge == null) {
    alert('Error. Wrong data type.');
}

else if (+checkAge < age_1) {
    alert('You don’t have access cause your age is ' + checkAge + '. It’s less then ' + age_1 + '.');
}

else if (+checkAge >= age_1 && checkAge < age_2) {
    alert('Welcome!');
}

else if (+checkAge >= age_2) {
    alert('Keep calm and look culture channel.');

}