# Exercise 12 - Find the Oldest

Dado un array de objetos que representan personas con una fecha de nacimiento y una de muerte, devuelve la persona mas mayor.
## Pistas
- Deberías devolver el objeto persona entero, pero por la mayor parte los tests solo tienen en cuenta si el nombre es correcto.
- Este se puede hacer encadenando un par de metodos de arrays, o usando `reduce`.
- Uno de los checks es para personas que no tienen fecha de muerte (siguen vivos). Utiliza una funcion del objeto Date de Javascript para conseguir su edad a dia de hoy.
