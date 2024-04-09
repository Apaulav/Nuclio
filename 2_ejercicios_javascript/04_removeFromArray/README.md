# Exercise 04 - removeFromArray

Implementa una función que recibe un array y otros parametros (puede haber más de uno extra). La función debe `eliminar` del array los parametros extra si estos existen dentro de el:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Pistas

El primer test es bastante sencillo, pero hay algunas cosa que pensar (o buscar en Google) para los siguientes tests:

- como eliminamos un solo elemento de un array?
- como lidiamos con multiples parametros opcionales dentro de una función en javascript?
- [Mira est link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Haz scroll hacia abajo hasta `Array.from` o el operador `spread`. - [O este link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  