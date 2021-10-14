//1
function dz1() {
    const text = prompt("Введите две строки через запятую");
    let substr = text.split(',');
    alert(substr[0].indexOf(substr[1]) !== -1);
}
//2
function dz2() {
    const text = prompt("Введите строку");
    const count = parseInt(prompt("Введите число"));

    if (count > 0)
        alert(text.substr(0, count) + '...');
    else
        alert('Пожалуйста, укажите корректное число');
}

function dz3() { //12/02/2021 12-00
    let text = prompt("Введите строку с датой формата: '12/02/2021 12-00'").trim();

    //громозко, но задание же на регулярные выражения
    const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4} (2[0-4]|[01][0-9])-([0-5][0-9])$/;

    if (regex.test(text)) {
        text = text.replaceAll('\/', '.');
        text = text.replaceAll('-', ':');

        alert(text)
    } else
        alert('Пожалуйста, повторите ввод с датой корректного формата')

}

