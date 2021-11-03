let btns = document.getElementsByClassName("theme");

for (let btn of btns)
{
    btn.addEventListener('click', e =>
    {
        let table = document.querySelectorAll('td');
        table.forEach(function (item)
        {
            item.classList.remove('dark', 'orange', 'light');
            item.classList.add(btn.classList.item(1));
        });
    });
}

let add = document.getElementById("add");

add.addEventListener('click', e =>
{
    const regex = /^[А-ЯЁ][а-яё]+/;
    const regex2 = /\d/;

    const text = document.getElementsByName('name')[0].value;
    const number = document.getElementsByName('number')[0].value;

    if  (regex.test(text) === false || regex2.test(number) === false)
        alert('Введите корректные данные!');
    else
    {
        let tbody = document.getElementById('table').getElementsByTagName('tbody')[0];

        let row = tbody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = tbody.getElementsByTagName('tr').length.toString();
        cell2.innerHTML = text;
        cell3.innerHTML = number;
        cell4.innerHTML = '<input type="button" value="Удалить" id="del">';

        let btn = '<input type="button" value="Удалить" id="del">';

        /*btn.addEventListener('click', e => {

        });*/

        cell4.innerHTML = btn;
    }


})

let remove = document.getElementById("del");

remove.addEventListener('click', e => {

});