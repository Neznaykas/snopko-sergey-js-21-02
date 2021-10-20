function dz()
{
    function fibo(num1, num2)
    {
        if (num1 <= 1000000000000000000000)
            fibo(num2, num1 + num2);

        console.log(num1);
    }

    //fibo(0, 1);

  /*  const memoize = (fn) => {
        let cache = {};
        return (...args) => {
            let n = args[0];
            if (n in cache) {
                console.log('Взято из кеша', n);
                return cache[n];
            }
            else {
                console.log('Вычеслено...', n);
                let result = fn(n);
                cache[n] = result;
                return result;
            }
        }
    }

    const fibo2 = //memoize(
        (x) => {
            if (x <= 1000)
            /*    return x + fibo2(x);
            else*/
              //  return x + fibo2(x);
               // else
                 //   return x + fibo2(x);
      //  }
   // );

    //console.log(fibo2(1)); // вычислено

      function fib_function (n1, n2) {
        let cache = {};

            if (n1 in cache) {
                console.log('Fetching from cache');
                return cache[n1];
            } else {
                console.log('Вычеслено...', n1);
                cache[n1] = n1;

                if (n1 <= 1000000000000000000000)
                    return fib_function(n2, n1 + n2);
            }
            console.log(n1);
    }

    fib_function(0, 1);
}