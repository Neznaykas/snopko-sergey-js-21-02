//1
function dz1() {
    const text = prompt("Введите две строки через запятую", '123,123');
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
    const regex = /^(0?[1-9]|[12]\d|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4} (2[0-4]|[01]\d)-([0-5]\d)$/;

    if (regex.test(text)) {
        text = text.replaceAll('\/', '.');
        text = text.replaceAll('-', ':');

        alert(text)
    } else
        alert('Пожалуйста, повторите ввод с датой корректного формата')

}

function dz4() { //Снопко Сергей Игоревич
    const text = prompt("Введите строку с ФИО", "Снопко Сергей Игоревич").trim();
    //тут всё стандартно
    const regex = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+( [А-ЯЁ][а-яё]+(вна|вич))?$/;

    alert(regex.test(text));
}

function dz5() {
    let text = prompt("Введите строку (переменную) в стиле СamalCase", "TestKwestStr").trim();

    const regex = /[A-Z|А-ЯЁ]/g;

    const final = text.replace(regex,function (match,offset) {
        if (offset > 0)
            return "_" + match.toLowerCase();
        else
            return match.toLowerCase();
    })

    alert(final);
}

function dz6() {
    //надо подумать
}

function dz7() {
    const text = prompt("Введите строку (с числами)").trim();
    const regex = /([0-9]+\.[0-9]+)|([0-9]+)/g;

    alert(text.match(regex));
}

function dz8() {
    //и тут надо подумать
}
