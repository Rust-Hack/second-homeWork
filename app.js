//first task
var x = 20;
var y = 58;
var z = 42;

console.log(x + y + z);

//second task
var secInMinute = 60;
var minuteInHour = 60;
var hourInDay = 24;
var dayInYear = 365;

var myAgeInSeconds = 21 * dayInYear * hourInDay * minuteInHour * secInMinute;
console.log(myAgeInSeconds);

//third task
var count = 42;
var userName = '42';

count = userName;
userName = Number(userName);
console.log('count: ' + typeof(count) + '; userName: ' + typeof(userName) + ';');

//fourth task
var a = 1;
var b = 2;
var c = 'белых медведей';

console.log(a + '' + b + ' ' + c);

//fifth task
var stringFirstVariable = 'В траве сидел кузнечик';
var numberSecondVariable = 10;
var booleanThirdVariable = true;
console.log('Variable: ' + stringFirstVariable + '; have type: ' + typeof(stringFirstVariable));
console.log('Variable: ' + numberSecondVariable + '; have type: ' + typeof(numberSecondVariable));
console.log('Variable: ' + booleanThirdVariable + '; have type: ' + typeof(booleanThirdVariable));


//sixth task
var namePerson = prompt('Введите ваше имя');
var agePerson = prompt('Введите ваш возраст');
console.log('Ваше имя: ' + namePerson + ' ' + 'Ваш возраст: ' + agePerson);

//seventh task
var a = 4;
var b = 3;

a = b;
b++;
console.log(a + ' ' + b);

//eighth task
var stringType = 'true';
var booleanType = false;
var numberType = 17;
var undefinedType = undefined;
var nullType = null;
console.log('stringType: ' + typeof(stringType) + '; booleanType: ' + typeof(booleanType) + '; numberType: ' + typeof(numberType) + '; undefinedType: ' + typeof(undefinedType) + '; nullType: ' + typeof(nullType));

//ninth task
var height = 15;
var width = 20;

if(height > width) {
    console.log('Это число больше: ' + height);
} else{
    console.log('Это число больше: ' + width);
}

//tenth task
var twenty = 20;
for(let i = 1; i <= twenty; i++) {
    if(i % 3 === 0){
        console.log(i);
    }
}

var whileVariant = 3;
while(whileVariant <= twenty) {
    console.log(whileVariant);
    whileVariant += 3;
}

//eleventh task
var key = true;
var documents = true;
var pen = true;
var apple = false;
var orange = true;

var shouldGoToWork = key && documents && pen && apple || orange;
console.log(shouldGoToWork);

//twelfth task
var askUserNumber = Number(prompt('Введите число'));

if(askUserNumber % 5 === 0) {
    console.log('Fiz');
} else if (askUserNumber % 3 === 0) {
    console.log('Buz');
} else if(askUserNumber % 5 === 0 && askUserNumber % 3 === 0) {
    console.log('FizBuz');
} else {
    console.log('Это число не делится без остатка на 5 и на 3');
}

//thirteenth task
var ageCategory = Number(prompt('Введите свой возраст.'));

if(ageCategory > 18) {
    alert('Попей пивка.');
} else if(ageCategory >= 16 && ageCategory <= 18) {
    alert('Можешь выкурить +сигаретку, только маме не говори.');
} else {
    alert('Пей колу.');
}

//fourteenth task
var turist = prompt('в какую сторону света вы бы хотели отправиться?');


switch(turist){
    case 'Юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;
    default:
        alert('Попробуйте еще раз');
}