

//FUNCION PARA REDIRECCIONAR LUEGO DE 20 SEGUNDOS 
// LET COUNT = (numero de segundos)
// WINDOW.LOCATION.HREF="url a redireccionar"

//METODO .ONLOAD (EJECUTA LA FUNCION CUANDO SE CARGA LA PAGINA)
 window.onload = function() {
    let count = 20;
    setInterval(function(){
        count--;
        document.getElementById('delayMsg').innerHTML =  `Podras navegar por INTERNET  en ${count} segundos ...`;

        if (count === 1) {

            window.location.href = 'https://www.facebook.com/Sabanet-Telecomunicaciones-103210538982679/?'; 
        
        }
        clearInterval()
        
    },1000);
};



