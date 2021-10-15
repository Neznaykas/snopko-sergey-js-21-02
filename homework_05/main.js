console.log("1. На вход поступает массив, вывести массив, удалив неуникальные значения.");

function dz1()
{
    let arr = [1, 2, 3, 3, 4, 5, 6, 7, 6, 6];
    let uniq = [];

    arr.forEach(
        element => {
            if (!uniq.includes(element))
                uniq.push((element));
        }
    )

    console.log(uniq);
}


function dz2()
{
    let arr = [1, 2, 3, 3, 4, 5, 6, 7, 6, 6];
    let reverse = [];
    console.log(arr);

    arr.forEach(
        item => {
            reverse.unshift(item);
        }
    )

    console.log(reverse);
}