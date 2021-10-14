var sign = window.prompt("Quiero saber tu nombre");

if (sign.toLowerCase() == "turi") {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3> Ahhh... Turituri... TE EXTRAÑE! cuando me vas a sacar mas fotos??? Me invitas a tu casa pronto???</h3>";
}
else if (sign.toLowerCase() == "pame") {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3>HOLA PAME! Tengo el plato vacío... bueno, se le ve el fondo... le podes poner más???</h3>";
    
} else if (sign.toLowerCase() == "magui") {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3>MAGUI! GRACIAS POR LA TARJETA!!!! Me encantó cómo me dibujaste, soy igual!! Lamentablemente, todavía no anda el chat... pero sigo trabajando para que prontito funcione</h3>";
    
} else if (sign.toLowerCase() == "guada") {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3>Hola Guadi!!! GRACIAS POR ESA TARJETA HERMOSA!!! </h3> <br> <p> Me encantó!</p>";
    
}
 else if (sign.toLowerCase() == "Sandra") {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3>ey! haceme un mimo la proxima vez que me veas, que no tengo pulgas!</h3>";
} 

else if (sign.toLowerCase() == "abu") {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3>Abu Graciela necesito una caja con almohadon nueva, me está quedando chica!</h3> <p> Saludá de mi parte a el Abu José Luis!!!<";
}   
    
else {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3>Hola, tenia cositas para decirle a Guada, Abu, Pame, Turi y Magui... no se que decirte a ti... escribime y charlamos </h3>";
}   

