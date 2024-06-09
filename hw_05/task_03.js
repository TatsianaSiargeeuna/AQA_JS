// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants


const word = 'cream';
const vowels  = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z']

let vowelsCounter = 0;
let consonantsCounter = 0;
const splitedWord = word.split('');

for (let i=0; i < splitedWord.length; i++) {
    const forIncludes = splitedWord[i]
    if (vowels.includes(forIncludes)){
        vowelsCounter++;
    } else if (consonants.includes(forIncludes)) {
        consonantsCounter++;

    }
}

console.log(`Word contains ${vowelsCounter} vowels and ${consonantsCounter} consonants.`);




// 2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';
