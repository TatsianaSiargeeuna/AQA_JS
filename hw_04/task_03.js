// Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert


const age_1 = 18
const age_2 = 60

const checkAge = prompt('Please, enter your age', []);
const checkAgeTrimmed = checkAge.trim();

if (isNaN(checkAgeTrimmed) || checkAgeTrimmed < 0 || checkAgeTrimmed > 120 || checkAgeTrimmed == "") {
    +checkAgeTrimmed
    alert('Error. Wrong data type.');
}

else if (checkAgeTrimmed < age_1) {
    alert('You don’t have access cause your age is ' + checkAgeTrimmed + '. It’s less then ' + age_1 + '.');
}

else if (checkAgeTrimmed >= age_1 && checkAge < age_2) {
    alert('Welcome!');
}

else if (checkAgeTrimmed >= age_2) {
    alert('Keep calm and look culture channel.');

}