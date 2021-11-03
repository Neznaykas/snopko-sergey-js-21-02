let btns = document.getElementsByClassName("theme");

for (let btn of btns)
{
    btn.addEventListener('click', () =>
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

add.addEventListener('click', () =>
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

        let index = tbody.getElementsByTagName('tr').length.toString();

        cell1.innerHTML = index;
        cell2.innerHTML = text;
        cell3.innerHTML = number;
        cell4.innerHTML = '<input type="button" value="Удалить" id="del' + index + '">';

        let rem = document.getElementById("del" + index);

        rem.addEventListener('click', function ()
        {
            this.parentElement.parentElement.remove();
        })
    }
})

//init
for (let i = 0; i < 10; i++)
    add.click();