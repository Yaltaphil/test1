let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD?", "2019-04-23");

let AppData = {
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

AppData.expenses.a1 = a2;
AppData.expenses.a3 = a4;
alert(AppData.budget / 30);

if (2 * 2 == 5) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

(2 == 2) ? console.log("Yes"): console.log("No");

let Numb = NaN;
switch (true) {
    case Numb < 5:
        console.log("less");
        break;
    case Numb == 5:
        console.log("equal");
        break;
    case Numb > 5:
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