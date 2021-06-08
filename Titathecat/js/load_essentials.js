let header =
`<h1>Soy la gata Tita</h1> <p>Dueña y señora de este sitio y el resto del universo.</p>`

document.getElementById("myHead").innerHTML = header
	
let navbar= `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="topnav" id="myTopnav">
  <a href="index.html" class="active">Home Sweet Home</a>
  <a href="horarios.html">Mi agenda</a>
  <a href="suscribirse.html">Enviame tus datos</a>
  <a href="chat.html">Charlemos</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
`

document.getElementById("myTopnav").innerHTML = navbar
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }



document.getElementById("myFooter").innerHTML =
	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " by GatoCat. All miaws reserved.</p>"
	+ "<h2>Yo podria dominar el mundo, pero es que tengo tanto sueño</h2>"
	+ "<p id='contact'><a href='mailto:Analiajensen@gmail.com'>Mandame um miau por mail</a> ";

	
let tabla =`
<table>
<tr>
<th>Lunes</th>
<th>Martes</th>
<th>Miercoles</th>
<th>Jueves</th>
<th>Viernes</th>
<th>Sabado</th>
<th>Domingo</th>
</tr>
          `
let tablaend=`
	 <tr>
	 <td colspan="7"> mi video favorito <br>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/8FxvgiJh1PQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
	  
	  </tr>
  </table>
  `

for (let i = 0; i < comer.length; i++) {

tabla=tabla+`
          <tr>
            <td>${dormir [i]}</td>
            <td> ${comer [i]}</td> 
            <td> ${jugar [i]}</td>
            <td>${molestar [i]}</td>
            <td> ${comer [i]}</td> 
            <td> ${jugar [i]}</td>
			<td> ${dormir [i]}</td>
          </tr>` 
        }
document.getElementById("idtabla").innerHTML=tabla+tablaend

