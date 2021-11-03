function work1()
{
    prompt()

    let recursiveTimout = setTimeout(function tick() {
        console.log('tik-tac')
        recursiveTimout = setTimeout(tick, 500)
    }, 500);


// const interval = setInterval( // выполнения функции раз в определённое время. Возвращает идентификатор
//     intervalCallback,
//     500, // Интервал выполнения
//     'интервал аргумент1', // Параметры, передаваймые в коллбек
//     'интервал аргумент2'
// )
//
// setTimeout(()=>
//     clearTimeout(recursiveTimout), // Откючение таймера (очистка таймаута)
//     3000)
//
// setTimeout(()=>
//     clearInterval(interval), // Откючение таймера (очистка таймаута)
//     4000)

}

function work2()
{
    
}

function work3()
{

}