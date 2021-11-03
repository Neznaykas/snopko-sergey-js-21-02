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

})

let remove = document.getElementById("del");

remove.addEventListener('click', e => {

});