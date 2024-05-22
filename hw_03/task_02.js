// Task2*. Решить квадратные уравнения. Переменные называть по правилам.
// Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"


// 1.  x2 - 6x + 9 = 0. - один корень

let a=1
let b=-6
let c=9

let discriminant = Math.pow(b,2) - 4 * a * c

if (discriminant < 0) {
    console.log('у уравнения нет корней')

}
else if (discriminant == 0)
    {console.log('У уравнения один корень: ' + (-b / (2 * a)))
    
}

else
    {console.log('У уравнения два корня: ' + ((-b + Math.sqrt(discriminant)) / (2 * a)) + ' и ' + ((-b - Math.sqrt(discriminant)) / (2 * a)))

}




// 2.  x2 - 4x - 5 = 0. - два корня

let a=1
let b=-4
let c=-5

let discriminant = Math.pow(b,2) - 4 * a * c

if (discriminant < 0) {
    console.log('у уравнения нет корней')

}
else if (discriminant == 0)
    {console.log('У уравнения один корень: ' + (-b / (2 * a)))
    
}

else
    {console.log('У уравнения два корня: ' + ((-b + Math.sqrt(discriminant)) / (2 * a)) + ' и ' + ((-b - Math.sqrt(discriminant)) / (2 * a)))

}
