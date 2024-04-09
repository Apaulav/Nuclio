# Exercise 06 - leapYears

Crea una función que determine si el año que recibe como parametro es `Bisiesto` o no. Los años Bisiestos se determinan de la siguiente manera:

> Los años bisiestos son años cuyo numero es divisible por 4 (como 1984 y 2004). Sin embargo, los años divisibles por 100 no son años bisiestos (tales como 1800 y 1900) a no ser que sean divisibles por 400 (como 1600 y 2000). Si, es bastante confuso.
>

```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```


## Pistas
- utiliza el condicional `if` y el operador lógico `&&` para asegurar que todas las condiciones se cumplen.
- para las condiciones utiliza los operadores de comparación https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators
