function dz()
{
    const fib = (() => {
        return (val) =>
        {
            if (val >= 2)
                return fib(val-2) + fib(val-1);
            else
                return val < 1 ? 0 : 1;
        }
    })();

    console.log(fib(3));
    console.log(fib(20));

    const fib2 = (() =>
    {
        const cash = {};
        return (val) =>
        {
            if (cash[val]) {
                //console.log(`Взято из кеш ${cash[val]}`);
                return cash[val];
            }
            else
            {
                if (val >= 2)
                    cash[val] = fib2(val-2) + fib2(val-1);
                else
                    cash[val] = val < 1 ? 0 : 1;

                //console.log(`Расчитано ${cash[val]}`);
                return cash[val];
            }

        }

    })();

    console.log(fib2(35));
    console.log(fib2(25));
    console.log(fib2(50));

    function toObject(array)
    {
        let obj = {};
        array.forEach((elem) =>
            {
                if (Array.isArray(elem[1])) {
                    obj[elem[0]] = toObject(elem[1]);
                } else
                    if (elem[1] === Object(elem[1]))
                    {
                        elem[1] = Object.entries(elem[1]);
                        obj[elem[0]] = toObject(elem[1]);
                    } else
                        obj[elem[0]] = elem[1];
            }
        )
        return obj;
    }

    //взято из чата в тг
    const array = [
        ['name1', 'Anna'],
        ["key8", {
            "key9": {"key10": [["key11","value11"],["key12","value12"]]}}],
        ['age', 22],
        ['pets',
            [
                ['dog', 'Faust'],
                ['cat', 'Balthazar'],
                ['cat2', 'Balthazar'],
                ['object_test',
                    {
                        "key1": [
                            ["key2", "value 2"],
                            ["key3", "value 3"],
                            ["key4", "value 4"]
                        ],
                        "key5": {
                            "key6": "value6"
                        }
                    }
                ]
            ]
        ]
    ];

    const ob = toObject(array);
    console.log(ob);

}