/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// const stopWords = ['spam', 'sale','[spam]'];

// function check(str){
//     arr = str.toLowerCase().replace(/[\[\]]/g, '').split(' ');
//     console.log(arr);
    
//     if(arr.includes(stopWords)){
//         return true
//     }
//     else return false
    
// };
// console.log(stopWords);

// console.log(check('Latest technology news'));
// console.log(check('JavaScript weekly newsletter'));
// console.log(check('Get best sale offers now!'));
// console.log(check('[SPAM] How to earn fast money?'));
// Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true
// let arrArgs = [];
// const add = function(...args){
//   return console.log(args);
// }

// function User (name, isActive, age, friends){
//   this.name = name;
//   this.isActive = false;
//   this.age = age;
//   this.friends = friends;

//   this.get = function(){
//     return console.log(`your name is${name}, status: ${isActive}, u are ${age} years, you have ${friends} friends`);
    
//   }
// }

// const al = new User('Al', true, 23, 5);
// console.log(al.get());
