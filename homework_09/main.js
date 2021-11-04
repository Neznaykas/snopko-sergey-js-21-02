function work1()
{
    //1. Разработать скрипт. Пользователь вводит два числа (i, j),
    // каждую секунду выводить число от i до j (реализвать через setTimeout и setInterval).

    const text = prompt("Введите 2 числа через запятую i,j", '1,5');
    let substr = text.split(',');

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

}