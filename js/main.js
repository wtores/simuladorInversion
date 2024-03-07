function inversion(){
    // capturamos los valores de los campos del formulario
    let cNombres = document.getElementById("nombres").value;
    let cTelefono = document.getElementById("telefono").value;
    let cEmail = document.getElementById("email").value;
    let cMonto = document.getElementById("inversion").value;
    let cTiempo = document.getElementById("tiempo").value;

    // Capturamos los contenedores pre simulación y post simulación
    let contPre = document.querySelector('.pre-simulation');
    let contPost = document.querySelector('.post-simulation');

    // capturamos los span para mostrar el nombre y el email
    let sNombre = document.getElementById("nombres-show");
    let sCorreo = document.getElementById("email-show");
    let sTiempo = document.getElementById("tiempo-show");
    let sInteres = document.getElementById("interes-show");
    let sTotal = document.getElementById("total-show");
    let sGanancia=document.getElementById("ganancia-show");

    // Definir variables para calcular la ganacias y el total  
    let interes1 = ((cMonto* 0.8)/100)*12;
    let interes2 = ((cMonto* 1.3)/100)*24;
    let interes3=  ((cMonto* 1.7)/100)*36;
    let total1= parseInt(cMonto)+ parseInt(interes1);
    let ganancia1= total1-cMonto;
    let total2= parseInt(cMonto)+ parseInt(interes2);
    let ganancia2= total2-cMonto;
    let total3= parseInt(cMonto)+ parseInt(interes3);
    let ganancia3= total3-cMonto;

    
    // mostramos y capturamos el panel de la derecha
    contPost.classList.remove("disabled")
    contPre.classList.add("disabled");

    // cambiamos y mostramos el nombre y el email
    sNombre.innerHTML= cNombres;
    sCorreo.innerHTML= cEmail;
    



    // utilizamos un switch para cambiar el tiempo y el interes segun los años seleccionados por el usuario

    switch (cTiempo) {
        case "1":
            sTiempo.innerHTML= "12 MESES";
            sInteres.innerHTML= "0.8%";
            sTotal.innerHTML= total1 ;
            sGanancia.innerHTML=ganancia1;
            break;
        case "2":
            sTiempo.innerHTML= "24 MESES";
            sInteres.innerHTML= "1.3%";
            sTotal.innerHTML= total2 ;
            sGanancia.innerHTML=ganancia2;
            break;
        case "3":
            sTiempo.innerHTML= "36 MESES";
            sInteres.innerHTML= "1.7%";
            sTotal.innerHTML= total3 ;
            sGanancia.innerHTML=ganancia3;
            break;
        default:
            break;
    }

    



}




// let i = 0;

//     while (i<5) {
//         console.log(i);
//         alert(i);
//         i++; }

// alert("Bienvenido usuario " + cNombres + " su telefono es: " + cTelefono);
//     console.log("Bienvenido usuario " + cNombres + " su telefono es: " + cTelefono);