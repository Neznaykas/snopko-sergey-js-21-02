export function work3()
{
    //3. Реализовать страницу с таблицей.
    // Таблица должна содержать инфрмацию, полученную по API https://swapi.dev/api/people/ (массив объектов в свойстве "results").
    // А именно росте, весе и поле персонажей (поля "name", "height", "mass" и "gender" соответственно).

    const swapi = { // Объект для бращения к API
         async getMain(callback: any, errorCallback: any) { // Получение основной информации
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

    function printTable(obj: any)
    {
        const table: HTMLTableElement = document.createElement('table');
        const head: HTMLTableSectionElement = table.createTHead();
        const hrow: HTMLTableRowElement  = head.insertRow(0);

        hrow.insertCell(0).innerText = 'Имя';
        hrow.insertCell(1).innerText = 'Рост';
        hrow.insertCell(2).innerText = 'Вес';
        hrow.insertCell(3).innerText = 'Пол';

        const body= table.createTBody();

        Object.keys(obj.results).map(function(key) {
            console.log(obj.results[key]);
            return obj.results[key];
        }).forEach((value: { name: string; height: string; mass: string; gender: string; }) =>
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