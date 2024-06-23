// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null


const competitorPizzas = ['Pepperoni', 'Capricciosa', 'Diavola', '4 formaggi', 'Hawai'];

function comparePizzas (arrayPizzas) {
    
    const comparasionResult = [];

    for (let i = 0; i < arrayPizzas.length; i++) {
           if (!competitorPizzas.includes(arrayPizzas[i])) {
               comparasionResult.push(arrayPizzas[i]);
        }
    }

    if (comparasionResult.length === 0) {
        return null;
    }

    return comparasionResult;
    
}

console.log(comparePizzas(['Pepperoni', 'Siciliana', '4 stagioni', 'Romana', 'Diavola']))

  


// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.


function hasMoreLetters (sentence) {
    sentenceIsArray = sentence.replace('.','').split(' ');
    
    let wordLenght = 0;
    const longestWord = [];

    for (let i = 0; i < sentenceIsArray.length; i++) {
        if (sentenceIsArray[i].length > wordLenght) {
            wordLenght = sentenceIsArray[i].length;

            longestWord.length = 0;
            longestWord.push(sentenceIsArray[i]);

        } else if (sentenceIsArray[i].length === wordLenght) {
            longestWord.push(sentenceIsArray[i]);
            }
    }

    return `The longest word is "${longestWord.join(', ')}".`;
}

console.log(hasMoreLetters(`The proposal did not pass in parlament parlament.`))




// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.


function eliminatesDuplicates (arrayNumbers) {

 const arrayWithoutDuplicates = [];

 for (const someNumber of arrayNumbers) {
        if (!arrayWithoutDuplicates.includes(someNumber)) {
            arrayWithoutDuplicates.push(someNumber);
        }  
     }

      return arrayWithoutDuplicates;
    }

console.log(eliminatesDuplicates([2, 18, 9, 46, 9, 42, 42, 102, 9]))




// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом.

function isPalindrome(word) {
    
    let reverseWord = '';
    for (i = word.length - 1; i >= 0; i--){
        reverseWord = reverseWord + word[i];
    } 
    
    if (word.toLowerCase() === reverseWord.toLowerCase()){
        return(word + ' is a palindrome');
    }else{
        return(word + ' is not a palindrome');
    }

}

console.log(isPalindrome("alla"));
console.log(isPalindrome("Alla"));
console.log(isPalindrome("al12la"));