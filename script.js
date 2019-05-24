 'use strict';

 let money = prompt("Ваш бюджет на месяц?", ''),
     time = prompt("Введите дату в формате YYYY-MM-DD?", "2019-04-23");

 let appData = {
     budget: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: false
 };

 let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
     a2 = prompt("Во сколько обойдется?", ''),
     a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
     a4 = prompt("Во сколько обойдется?", '');

 appData.expenses.a1 = a2;
 appData.expenses.a3 = a4;
 alert(appData.budget / 30);

 if (2 * 2 == 5) {
     console.log("Верно");
 } else {
     console.log("Неверно");
 }

 (2 == 2) ? console.log("Yes"): console.log("No");

 let number = NaN;
 switch (true) {
     case number < 5:
         console.log("less");
         break;
     case number == 5:
         console.log("equal");
         break;
     case number > 5:
         console.log("bigger");
         break;
     default:
         console.log("ok");
         break;
 }

 let num = 53;
 while (num < 55) {
     console.log(num);
     num++;
 }



 function remove(s, n) {
     for (let i = 0; i < n; i++) s = s.replace(/[!]/, '');
     return s;

 }

 console.log(remove('!!hi', 5));

 function remove(s, n) {
     return (n != 0) ? remove(s.replace(/[!]/, ''), n - 1) : s;
 }

 console.log(remove('!!hi', 1));



 
 function first() {
     setTimeout(function () {
         console.log(1);
     }, 15000);
 }

 function second() {
     console.log(2);
 }

 first();
 second();