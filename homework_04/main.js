//1
const text = prompt("Введите две строки через запятую");
let substr = text.split(',');
alert(substr[0].indexOf(substr[1]) !== -1);



