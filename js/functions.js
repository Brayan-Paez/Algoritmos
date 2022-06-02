function saludo(){
    alert("HOLA MUNDO ESTO ES JS");
}

function suma(){
    var A;
    var B;
    var SUMA;

    alert("ESTE SISTEMA REALIZA UNA SUMA CON DOS VALORES INGRESADOS POR EL USUARIO");

    A = parseInt(prompt("Por favor ingrese el primer valor: "));
    B = parseInt(prompt("Por favor ingrese el segundo valor: "));

    SUMA = A + B;

    alert("EL resultado de la suma es: " + SUMA);
}

function operaciones(){
    var A;
    var B;
    var C;
    var E;
    var F;
    
    alert("Algoritmo para saber el resultado de una suma, resta, multiplicacion y division");

    A = parseInt(prompt("Por favor ingrese el primer valor: "));
    B = parseInt(prompt("Por favor ingrese el segundo valor: "));

    C = A + B;
    D = A - B;
    E = A * B;
    F = A / B;

    alert("El resultado de la suma es: " + C);
    alert("El resultado de la resta es: " + D);
    alert("El resultado de la multiplicacion es: " + E);
    alert("El resultado de la division es: " + F);

}

function mayorDeDosNumeros(){
    var A;
    var B;

    alert("Algoritmo para determinar el mayor de dos numeros ingresados por el usuario");

    A = parseInt(prompt("Por favor ingrese el primer valor: "));
    B = parseInt(prompt("Por favor ingrese el segundo valor: "));

    if (A == B){ 
        alert("Los numeros son iguales");
    }
    else if (A > B){
        alert("El numero mayor es: " + A);
    }
    else {
        alert("El numero mayor es: " + B);
    }

}

function menorNumero(){
    var A;
    var B;
    var C;

    alert("Algoritmo para determinar el menor de tres numeros");

    A = parseInt(prompt("Por favor ingrese el primer numero: "));
    B = parseInt(prompt("Por favor ingrese el segundo numero: "));
    C = parseInt(prompt("Por favor ingrese el tercer numero: "));

    if (A == B && A == C){ 
        alert("Los numeros son iguales");
    }
    else if (A < B && A < C){
        alert("El numero menor de los tres es: " + A);
    }
    else if (B < A && B < C){
        alert("El numero menor es: " + B);
    }
    else {
        alert("El numero menor es: " + C);
    }
}

function numerosParImpar(){
    var A;

    alert("Algoritmo para determinar si el numero es par o impar");

    A = parseInt(prompt("Por favor ingrese el numero: "));

    for(var i = 1; i <= A; i++){
        if (i % 2 == 0){
            alert ("El numero es par: " + i);
        }
        else{
            alert ("El numero es impar: " + i);
        }
    }
        
}

function numeroCuadrado(){
    var A;
    var B;

    alert ("Algoritmo para saber el cuadrado de un numero ingresado por el usuario");

    A = parseInt(prompt("Por favor ingrese el primer valor; "));

    B = A * A

    alert ("El numero al cuadrado es: " + B);

}

function areaTriangulo(){
    var A;
    var B;
    var H;

    alert ("Algoritmo para saber el area de un triangulo");

    B = parseInt(prompt("Por favor ingrese la base del triangulo: "));
    H = parseInt(prompt("Por favor ingrese la altura del triangulo: "));

    A = (B * H) / 2
    
    alert ("El area del triangulo es: " + A);

}

function descuentoManzanas(){
    var K;
    var T;
    var TD;
    var TN;
    var valor = 4500;

    alert ("Algoritmo para saber cuanto va a pagar el usuario");

    K = parseInt(prompt("Por favor ingrese cuantos kilos de manzana compro: "));

    if(K >= 3 && K <= 5 ){
        TN = K * valor;
        TD = TN * 10 / 100;
        T = TN - TD;
        alert ("El descuento es del 10%: " + TD + ", El total a pagar es de: " + T);

    }

    else if (K >= 6 && K <= 10 ){
    
        TN = K * valor;
        TD = TN * 15 / 100;
        T = TN - TD;
        alert ("El descuento es del 15%: " + TD + ", El total a pagar es de: " + T);

    }
    
    else if (K > 10){
    
        TN = K * valor;
        TD = TN * 20 / 100;
        T = TN - TD;
        alert ("El descuento es del 20%: " + TD + ", El total a pagar es de: " + T);
    
    }
    
    else {
        alert ("El descuento del 0% el valor a pagar es de: " + T);
    
    }
    
}


function banco(){
    var C;
    var A;
    var GT;
    var T;
    var P;

    alert ("Algoritmo para la ganancia segun la cantidad de años que usted tenga");

    C = parseInt(prompt("Por favor Digite el monto a invertir: "));
    A = parseInt(prompt("Por favor digite la cantidad de años: "));

    P = 0.023 + 12;
    GT = (P * A) / 100;
    T = GT + C;

    alert ("Las ganancias en: " + A + "años por un porcentaje mensual de 2.3% son de: " + G);
    alert ("el total es de: " + T);
}

function calificaciones(){
    var C1;
    var C2;
    var C3;
    var C4;
    var C5;
    var Prom;

    alert ("Algoritmo para saber el promedio de las calificaciones");

    C1 = parseInt(prompt("Por favor ingrese su primera calificacion"));
    C2 = parseInt(prompt("Por favor ingrese su segunda calificacion"));
    C3 = parseInt(prompt("Por favor ingrese su tercera calificacion"));
    C4 = parseInt(prompt("Por favor ingrese su cuarta calificacion"));
    C5 = parseInt(prompt("Por favor ingrese su quinta calificacion"));

    Prom = (C1 + C2 + C3 + C4 + C5)/5

    if ( Prom <= 2.9 ){
        alert ("su promedio es de: " + Prom +", No aprobo");
    }
    else{
        alert ("su promedio es de: " + Prom +", Aprobo");
    }
}

function pulgadas(){
    var P;
    var CM;
    var M;
    var KM;

    CM = 2.54;
    M = 0.0254;
    KM = 0.0000254;

    alert ("Algoritmo para pasar pulgadas a metros, kilometros y centimetros");

    P = parseInt(prompt("Por favor ingrese el valor en pulgadas: "));

    CM = P * CM
    M = P * M
    KM = P * KM

    alert ("El valor en Cm de las pulgadas ingresadas seria: " + CM);
    alert ("El valor en M de las pulgadas ingresadas seria: " + M);
    alert ("El valor en Km de las pulgadas ingresadas seria: " + KM);
}

function metrosCentimetros(){
    var A;
    var CM; 

    alert ("Algoritmo que permita pasar centimetros a metros");

    A = parseInt(prompt("Por favor ingrese la medida en centimetros: "));

    CM = A * 100;

    alert ("La cantidad de metros es: " + A);
    alert ("La cantidad en centimetros es de: " + CM);
}

    

