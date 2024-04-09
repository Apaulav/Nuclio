# Exercise 07 - tempConversion

Escribe 2 funciones que convierten de temperatura Fahrenheit a Celsius y vice versa:
```
ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32
```

Como somos humanos, queremos que la temperatura resultante esté redondeada hasta un solo decimal: por ejemplo `ftoc(100)` deberia devolver `37.8` y no `37.777777777778`.

Este ejercicio te pide que creemes mas de una función asi que la sección `module.exports` del fichero .js es un poco diferente esta vez. Nada de que preocuparse, simplemente vamos a empaquetar ambas bunciones dentro de un solo objeto que exportamos.

```javascript
module.exports = {
  ftoc,
  ctof
};
```
## Pistas
- Puedes encontrar las formulas para convertir de Celsius a Fahrenheit y viceversa en [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

- Prueba a encontrar por ti mismo en Internet como redondear un numero a un solo decimal en Javascript. Si no lo consigues mira [aqui](https://stackoverflow.com/q/7342957/5433628).
