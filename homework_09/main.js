function work1()
{
    //1. Разработать скрипт. Пользователь вводит два числа (i, j),
    // каждую секунду выводить число от i до j (реализвать через setTimeout и setInterval).
    const text = prompt("Введите 2 числа через запятую i,j", '1,5');

    let substr
     if (text !== null)
         substr = text.split(',');

    if (substr !== undefined && substr.length > 1) {
        let i = substr[0]
        let j = substr[1]

        let interval = setTimeout(function write() {
            if (i <= j) {
                console.log(i);
                interval = setTimeout(write, 1000, i++)
            } else
                clearTimeout(interval)
        }, 1000)
    }
}

function work2()
{
 //2. Реализовать страницу, через десять секунд перенаправляющую на главную страницу
 // https://maxima.life (для редиректа поменять свойство window.location)
 // на странице вывести сообщение "вы будите перенаправлены через /*количество оставшихся секунд*/" секунд
// *Опционально: предусмотреть склонение слова "секунда"

    const div = document.getElementById('loader');
    let time = 10;
    div.innerText = "Вы будите перенаправлены через 10 секунд"

    let interval = setTimeout(function write() {
        if (time > 1) {
            console.log(time)
            interval = setTimeout(write, 1000, time--)
            div.innerText = "Вы будите перенаправлены через " + time + " секунд";
        } else {
            clearTimeout(interval)
            window.location = 'https://maxima.life';
        }
    }, 1000)

}

function work3()
{
    //3. Реализовать страницу с таблицей.
    // Таблица должна содержать инфрмацию, полученную по API https://swapi.dev/api/people/ (массив объектов в свойстве "results").
    // А именно росте, весе и поле персонажей (поля "name", "height", "mass" и "gender" соответственно).

    const swapi = { // Объект для бращения к API
        async getMain(callback, errorCallback) { // Получение основной информации
            await fetch('https://swapi.dev/api/people/')
                .then(response => {
                    console.log(response.status)
                    return response
                })
                .then(response => {
                    // response.text() // Возвращает промисс с телом ответа в виде строки
                    return response.json(); // Возвращает промисс с телом ответа в виде JSON. Нельзя использовать один метод после другого
                })
                .then(callback) // Коллбек для результата
                .catch(err => errorCallback(`SWAPI getMain завершился ошибкой: ${err}`)) // Обработка ошибки в коллбеке для ошибки
        }
    }

    function printTable(obj)
    {
        const table = document.createElement('table');
        const head = table.createTHead();
        const hrow = head.insertRow(0);

        hrow.insertCell(0).innerText = 'Имя';
        hrow.insertCell(1).innerText = 'Рост';
        hrow.insertCell(2).innerText = 'Вес';
        hrow.insertCell(3).innerText = 'Пол';

        const body= table.createTBody();

        Object.values(obj.results).forEach(value =>
        {
            let row = body.insertRow();

            row.insertCell(0).innerHTML = value.name;
            row.insertCell(1).innerHTML = value.height;
            row.insertCell(2).innerHTML = value.mass;
            row.insertCell(3).innerHTML = value.gender;

            document.body.append(table)
        });
    }

    swapi.getMain(printTable, console.error).then(r => console.log('end'));
}