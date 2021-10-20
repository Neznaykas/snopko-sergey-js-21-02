function dz()
{
    function fibo(num1, num2)
    {
        if (num1 <= 100000000)
            fibo(num2, num1 + num2);

        console.log(num1);
    }

    fibo(0, 1);
}