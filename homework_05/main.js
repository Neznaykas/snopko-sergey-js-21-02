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
                value: () => {
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
    const arr = [1, 2, 3, "текст", 5, -1, {obj: "qwer", key: 500}, "3", "4", [10,20,"zxcvzxcv"], undefined, null, -0, NaN, ""];

    function filter (arr = [])
    {
        let types = {
            numbers: [],
            strings: [],
            objects: [],
            arrays: []
        }

        arr.forEach(function (elem)
        {
            if (Array.isArray(elem))
                types.arrays.push(elem);
            else
                if (elem === Object(elem))
                    types.objects.push(elem);
                else
                    if(typeof elem === "string")
                        types.strings.push(elem);
                    else
                        if(Number.isFinite(elem) && elem !== -0)
                            types.numbers.push(elem);

            //let str = (typeof (elem)).toString(); //не вышло
            // types[str].push(elem);
        });
        return types;
    }

    console.log(filter(arr));
}

function dz8()
{
    function betweener(ar,a,b)
    {
        if (a > b)
            return false;
        return ar.filter((e) => e >= a && e <= b);
    }

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(arr);
    console.log(betweener(arr,8,10));
}

function dz9()
{
    function anagram (str1 = "", str2 = "") {
        return str1.split('').sort().join('') === str2.split('').sort().join('')
    }

    console.log(anagram('пила', 'липа'))
}

function dz10()
{
    function Console_object() {
        Object.defineProperty(this, "logs",{
            "value" : () => {
                console.log(
                    Object.entries(this).map(([k, v]) =>
                        `${k}: ${v}`).join(', ')
                );
            } ,
            "enumerable": false,
            "writable": false
        });
    }

    const obj = new Console_object();

    Object.assign(obj, {
        name: "Сергей",
        first: "Привет",
        "123": 123,
        "key": "value",
        1000: "1992",
    });

    obj.logs();
}

function dz11()
{
    //не стал ничего выдумавать
    function Constr() {
        Object.defineProperties(this, {
            setProp: {
                value: (key = "", value, {writable = true, configurable = true,  enumerable = true}) =>
                {
                    Object.defineProperty(this, key, {
                        value: value,
                        writable: writable,
                        configurable: configurable,
                        enumerable: enumerable
                    });
                }
            }
        });
    }

    const obj = new Constr();

    obj.setProp("girl", "1", {writable: false})
    obj.setProp("boys", "2", {writable: false, enumerable: true})
    obj.setProp("sex", "male", {enumerable: false});

    console.log(Object.getOwnPropertyDescriptors(obj));
}