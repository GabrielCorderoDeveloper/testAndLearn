/*cliente
Las opciones de banco seran BankOfAmerica BancoRazer*/
var banco_cliente = "BancoRazer"
var cuenta_cliente = true
var saldo_cliente = 1000
var monto
var cli = document.getElementById("cliente");
if (cuenta_cliente){   
    cli.innerHTML = "Su cuenta esta verificada"
    document.getElementById("cliente").style.color = "#2d9c4e";
    } else {
    cli.innerHTML = "Su cuenta no esta verificada"
    document.getElementById("cliente").style.color = "#ff0000";
    }

//destino
var banco_destino = "BankOfAmerica"
var cuenta_destino = true
var des = document.getElementById("destino");
if (cuenta_destino){
des.innerHTML = "La cuenta del destinatario esta verificada"
document.getElementById("destino").style.color = "#2d9c4e";
} else {
des.innerHTML = "La cuenta del destinatario no esta verificada"
document.getElementById("destino").style.color = "#ff0000";
}

//transferencia
var hora
error = 0
var resultado = document.getElementById("saldo");
resultado.innerHTML = saldo_cliente + "$"

var b = document.getElementById("iniciar");
b.addEventListener("click", trasnferencia);

function trasnferencia()
{
var l = document.getElementById("dinero");
monto = parseInt(l.value);
error = 0
var t = document.getElementById("hora");
hora = parseInt(t.value);

 if (cuenta_cliente && cuenta_destino)
  {
    if (hora >= 9 && hora <= 12 || hora >= 15 && hora <= 20 )
    {
        alert("Empezo el proceso de la transferencia")
        if(banco_cliente == banco_destino)
        {
        saldo_cliente -= monto
        resultado.innerHTML = saldo_cliente + "$"
        alert("La transferencia se realizo con exito")
        alert("Se transfirio " + monto + "$ a la cuenta de " + banco_destino)
        alert("Su saldo actual en la cuenta es " + saldo_cliente + "$")
        } 
    
        if(banco_cliente != banco_destino  && saldo_cliente >= monto + 101)
        {
            saldo_cliente -= monto + 100
            resultado.innerHTML = saldo_cliente + "$"
            alert("La transferencia se realizo con exito")
            alert("Se transfirio " + monto + "$ a la cuenta de" + banco_destino)  
            alert("Se cobro una tarifa de 100$ por la trasferencia")  
            alert("Su saldo actual en la cuenta es " + saldo_cliente + "$")
        } 
        else 
        {
            error = 1
        }
    }
    else 
    {
    error = 2
    }
    } 
    else 
    {
    error = 3
    }

    switch (error)
{
   case 1:
   alert("No pesee el saldo suficiente para realizar esta transferencia")
   break

   case 2:
   alert("Solo se pueden hacer transferencias de 9 a 12 y de 15 a 20")
   break

   case 3:
   alert("Su cuenta o la del destinatario no estan verificadas")
   break
}
}