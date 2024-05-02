class Coche{

//ATRIBUTOS
strinr color;
int puertas;
int ventanas;
int precio;
int velocidad;


    //CONSTRUCTOR
Coche(){
this.color = "blanco";
this.puertas = 4;
this.precio=1000;
this.velocidad=0;

}

Coche (String colorines, int puertas2, int precio...){
this.color=colorines;

}

    //METODOS


void acelerar(){

    velocidad ++;
}

void frenar(){

    velocidad--;
}





}

Class Principal{

public static void main (args[])
{

//instacio objeto coche

Coche cochecito = new Coche("marron",4,3000);

cochecito.acelerar();
}
}