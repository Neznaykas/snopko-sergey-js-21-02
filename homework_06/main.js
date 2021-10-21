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

}