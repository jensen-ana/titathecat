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
    " <h3>MAGUI! De nuevo por acá? me encanta que me visites, todavía no anda el chat... pero estoy trabajando para que prontito funcione</h3>";
    
} else if (sign.toLowerCase() == "guada") {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3>Hola Guadi!!! que onda? como va eso? </h3>";
    
}
 else if (sign.toLowerCase() == "Sandra") {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3>ey! haceme un mimo la proxima vez que me veas</h3>";
} 

else if (sign.toLowerCase() == "abu") {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3>Gracias Abu Graciela por la idea de la caja con el almohadon, lo uso todos los dias! me encanta dormir ahí! Saludá de mi parte a el Abu José Luis!!!</h3>";
}   
    
else {
    document.getElementById("mensajePersonal").innerHTML=
    " <h3>Hola, tenia cositas para decirle a Guada, Abu, Pame, Turi y Magui... no se que decirte a ti... escribime y charlamos </h3>";
}   

