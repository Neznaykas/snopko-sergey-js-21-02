function theme1()
{
    let table = document.querySelectorAll('td');

    table.forEach(function (item) {
        item.classList.remove('dark', 'orange')
        item.classList.add('light');
    });

}

function theme2()
{
    let table = document.querySelectorAll('td');

    table.forEach(function (item) {
        item.classList.remove('light', 'orange');
        item.classList.add('dark');
    });
}

function theme3()
{
    let table = document.querySelectorAll('td');

    table.forEach(function (item) {
        item.classList.remove('light', 'dark');

        item.classList.add('orange');
    });
}