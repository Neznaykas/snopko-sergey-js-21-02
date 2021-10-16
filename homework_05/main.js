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

function dz3()
{
    const arr = [
        ["name1", "value1"],
        ["name2", "value2"],
        ["name3", "value3"]
    ];

    console.log(Object.fromEntries(new Map(arr)));
}

function dz4()
{
    const obj = {
        type1: "false",
        type2: false,
        type3:  null,
        type4:  undefined,
        type5: 10,
        type6: "dwe",
        type7: "1",
        type8: "-10"
    };
    console.log(obj);

    let sum = 0;
    Object.values(obj).forEach(function (type) {
        if (!isNaN(type) && typeof(type) !== "boolean" && type != null || undefined)
            sum += Number(type);
    });
    console.log(sum);
}

function dz5()
{
    const arr = [1, 2, 3, 4, 15, 6, 7, 8, 9, 10];

    let sum = 0;
    for (const n of arr) sum += n;
    sum = sum / arr.length
    console.log(sum);
}

function dz6()
{
    //подфункция получается (ну хоть не прототипирование)
    function Calculator(init = 0)
    {
        Object.defineProperties(this, {
            current: {
                value: init,
                writable: true
            },
            plus: {
                value: value => {
                    this.current += value;
                    return this;
                }
            },
            clear: {
                value: function () {
                    this.current = 0;
                    return this;
                },
            },
            minus: {
                value: value => {
                    this.current -= value;
                    return this;
                }
            },
            multi: {
                value: value => {
                    this.current *= value;
                    return this;
                }
            },
            divide: {
                value: value => {
                    this.current /= value;
                    return this;
                }
            },
        });
    }

    const c = new Calculator(0);

    console.log(c.plus(50).multi(2).current);
    c.clear();
    console.log(c.plus(20).divide(2).current);
}

function dz7()
{

}