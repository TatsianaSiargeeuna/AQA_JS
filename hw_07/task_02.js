// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.


const sentence = 'I am the best AQA ever!';

function howManyTimes (anySentence) {
      
     const newSentence = [];
     const splitedSentence = anySentence.split('');
     const alphabet = 'abcdefghijklmnopqrstuvwxyz';

     for (const letter of splitedSentence) {
        if (alphabet.includes(letter.toLowerCase())) {
            const times = splitedSentence.filter((oneLetter) => oneLetter.toLowerCase() === letter.toLowerCase()).length;
            newSentence.push(times);
        } else {
            newSentence.push(letter);
        }
     }

     return newSentence.join('');

};

console.log(howManyTimes(sentence))




// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
//   const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];


const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

function sumAndAverage (arrayOfPrices) {

    const sum = arrayOfPrices.reduce((sum, price) => sum + price);
    const average = sum / arrayOfPrices.length;

    return `Итого: ${sum}, средняя стоимость товара ${average}.`;

}

console.log(sumAndAverage(prices))




// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возврастанию количества гласных букв в слове.


const arrayOfWords = ['tomato', 'Rose', 'cucumber', 'beautiful', 'pop'];

function howManyVowels (word) {
  
    const splitedWord = word.toLowerCase().split('');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let vowelsCounter = 0;

    splitedWord.forEach((element) => {
        if (vowels.includes(element)) {
            vowelsCounter++
        }             
    });

    return vowelsCounter;
}

 function sortByVowels(arrayOfWords) {
        return arrayOfWords.sort((a, b) => howManyVowels(a) - howManyVowels(b));
}
      
console.log(sortByVowels(arrayOfWords));




// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
//   Пример:


     const array = [[['(']], ')', '(', ')', ['(', ['('], [')']]];

     function findPairs(arrayOfBrackets) {
        
        const arrayOfBracketsFlat = arrayOfBrackets.flat(Infinity);
        
        let counterRight = 0;
        let counterLeft = 0;
        
        arrayOfBracketsFlat.forEach((element) => {
            if (element === ')') {
                counterRight++;
            }
                
            if (element === '(') {
                counterLeft++;             
            }                           
                          
        });

        return counterRight === counterLeft ? console.log("У каждой скобки есть пара.") : console.log("Не у всех скобок есть пара.");
     }
        
    findPairs(array);
