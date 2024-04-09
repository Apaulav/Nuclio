# Exercise 01 - Hello World

El proposito de este ejercicio es guiarte durante el proceso de ejecutar los test y asegurar que todo está bien configurado.

En este directorio encontraras otros 2 ficheros:
  1. `helloWorld.js`
  2. `helloWorld.spec.js`

Este será el mismo "setup" para todo el resto de ejercicios. Los ficheros javascript (acaban en `.js`) será donde escribirás tu código, y los ficheros `spec.js` contienen los tests que van a verificar que tu código funciona. 

Veamos un ejemplo de fichero `spec`:
```javascript
const helloWorld = require('./helloWorld');
describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```

La primera linea del fichero es un `require()` para importar el codigo que está escrito en el fichero javascript (`helloWorld.js`) para poder testearlo.

El siguiente bloque (`describe()`) es el cuerpo del test. Básicamente, todo lo que hace es ejecutar el código que has escrito anteriormente en el otro fichero y asegurar que el `output` es el correcto. La función `test()` describe que debería pasar. El primer argumento que recibe es un `String` con una frase que describe el resultado esperado, el segundo es una función que va a ejecutar `expect()` sobre la función que hemos importado desde el fichero `helloWorld.js`. Fijate que encadenamos una segunda llamada despues de `expect()` con la funcion `toEqual()` donde pasamos el output esperado.

Por ahora no necesitas preocuparte sobre como escribir tests, pero deberías sentirte cómodo con la sintaxis para intuir que te están pidiendo que hagas. Ejecuta ahora los tests de este directório ejecutando en la terminal `npm test helloWorld.spec.js` y verás como falla. El resultado de ejecutar este comando te dirá exactamente que ha ido mal con tu código. En este caso, al ejecutar la funcion `helloWorld()` debería devolver la frase 'Hello, World!' pero en su lugar está devolviendo un String vacío...


Veamos entonces el fichero javascript:
```javascript
const helloWorld = function() {
  return ''
}
module.exports = helloWorld
```

En este fichero tenemos la definición de una función simple que se llama `helloWorld` y que devuelve un string vacio... que es exactamente de lo que se quejaba nuestro test. La sentencia `module.exports` que está en la última linea es la encargada de exportar nuestra función para que pueda ser importada por cualquier otro fichero mediante la función `require()`. En nuestro caso queremos que pueda ser importada desde nuestro fichero `spec`.

Prueba a editar el valor que devuelve la función para que devuelve el resultado que espera el test y ejecuta otra vez el test con `npm test helloWorld.spec.js`.

Solo para estar seguros, en caso de que sigas confundido en este punto, el test te está diciendo que al ejecutar la función `helloWorld` esta debería devolver la frase `Hello, World!`. Los signos de puntuación, las mayúsculas y las minúsculas són importantes, asi que asegurate que coincide si el test sigue sin pasar.

Este es el resultado final de la función:
```javascript
const helloWorld = function() {
  return 'Hello, World!'
}
module.exports = helloWorld
```

Para el resto de los tests lo hemos montado de maner que solo debeás escribir el código a ser testeado en los ficheros `.js`. No tienes que preocuparte de importar o exportar nada, asi que solo concentrate en escribir el código para que esos tests pasen!.