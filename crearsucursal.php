<?php session_start(); ?>
<head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
        crossorigin="anonymous">
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
        crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
        crossorigin="anonymous"></script>
      <script src="controller/sucursales.js"></script>

    </head>
    <style>
.dropbtn {
    background-color: #00d0b7;
    color: white;
    padding: 15px;
    font-size: 15px;
    border: none;
    cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
    background-color: ##FDFEFE;
}

.dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #FDFEFE;
    min-width: 250px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown a:hover {background-color: #f1f1f1}

.show {display:block;}
</style>
 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
<html>
    
    <body onload="loadInfo()">
    <input id="sessionId" type="text" value="<?php echo $_SESSION["sessionId1"] ?>" hidden>
    <input id="nitEmp" type="text" value="<?php echo $_SESSION["Nit1"] ?>" hidden>
    <input id="id" type="text" value="<?php echo $_SESSION["id1"] ?>" hidden>
    <div>
      <div class="mx-auto" style="height: 60px; background-color: 00d0b7;">
          <ul class="nav justify-content-center mx-auto" >
              <li class="nav-item" style="margin-top:5px;" >
              <div class="dropdown">
              <button onclick="myFunction()" class="dropbtn">Info. General</button>
                <div id="myDropdown" class="dropdown-content">
                  <a href="index.php">Editar Perfil Cliente</a>
                  <a id="interCreate" href="crearIntermediario.php">Crear Intermedio</a>
                  <a id="interEdit" href="editarintermediarios.php">Editar Intermediario</a>
                  <a id="sucuCrear" href="crearsucursal.php">Crear Sucursal</a>
                  <a href="documentacionGeneral.php">Documentacion General</a>
                </div>
              </div>
              </li>
              <li class="nav-item" style="margin-top:5px;">
                <div class="dropdown">
              <button onclick="myFunction2()" class="dropbtn">Solicitudes</button>
                <div id="myDropdown2" class="dropdown-content">
                  <a href="solicitudcrear.php">Crear Solicitud</a>
                  <a href="solicitudes.php">Visualizar Solicitud</a>
                </div>
              </div>
              </li>
              <li class="nav-item" style="margin-top:5px;">
                <a class="nav-link" href="#">Servicios</a>
              </li>
              <li class="nav-item" style="margin-top:5px;">
                <a class="nav-link disabled" href="facturacion.php">Facturacion</a>
              </li>
              <li class="nav-item" style="margin-top:5px;">
                  <a class="nav-link disabled" href="#">Reportes</a>
              </li>
            </ul>
      </div>
      
      <div style=" height: 120px; background-color: 2d1a45; align-items: center; justify-content:center">

        <div  style="right: 0px; padding: 10px;  margin-left: 350px; ">
        <div style="margin-left:200px; ">
        <span style="color:azure; margin-left:-150px; " >Gestion de residuos</span>
        <span style="color:azure; margin-left:80px;" >Transformación</span>
        <span style="color:azure; margin-left:38px;" >Servicios</span>
        </div>
          <img src="icons/logosLN/GR_peligrosos_white.png" class="img-responsive" width="80" height="80">
          <img src="icons/logosLN/GR_hospitalarios_white.png" class="img-responsive" width="80" height="80">
          <img src="icons/logosLN/GR_industriales_white.png" class="img-responsive" width="80" height="80">
          <img src="icons/logosLN/TR_aceites_white.png" class="img-responsive" width="80" height="80">
          <img src="icons/logosLN/TR_plasticos_white.png" class="img-responsive" width="80" height="80">
          <img id="prote_marca" src="icons/logosLN/S_proteccion_marca_white.png" class="img-responsive" width="80" height="80">      
          <a href="#"><span style="color:azure;">Salir</span></a>
        </div>
      </div>
      <div style="height: 50px; background-color:white;">
            <b style="margin-left:160px;">Cliente:</b> <br> 
            <h4 id="nombre_Cabecera" style="margin-left:160px;"> </h4>
      </div>      
      <div class="h-75" style="background-color:gainsboro;">
                   
        <div class="mx-auto h-100 w-75" style="background-color: white;">
            <div style="background-color:00d0b7; margin: 0px;">          
              <div id="qab_content" style="text-align:center; display: inline-block;"><span id="qab_message"><p style="text-align:left;margin-left:5%;margin-top:10px;width:400px;"> <span style="margin-right:10px;margin-left:0px; color:white; "> CREAR SUCURSAL </span></p> </span> 
              
              </div>
              
            </div>
            <div style="background-color:aquamarine; margin: 0px; height: 5px;">          
                <div style="display: inline-block;"><span><p style="text-align:left;margin-left:5%;margin-top:10px;width:200px;"> <span style="margin-right:10px;margin-left:0px; color:white; "></span></p> </span> 
                
                </div>
                
              </div>            
            <div>
              <span>
                
              </span>
            </div>
            <div class="mx-auto w-50" >
              <form>
                
                <div class="row">
                  <div class="col">
                    <span>Nombre</span>
                    <input id="nombre_suc" type="text" class="form-control">
                  </div>
                  <div class="col">
                    <span>Correo</span>
                    <input id="email_suc" type="text" class="form-control">
                  </div>                   
                </div>
                
                <div class="row">
                  <div class="col">
                    <span>N.I.T</span>
                    <input id="nit_suc" type="text" class="form-control" value="<?php echo $_SESSION["Nit1"] ?>" disabled>
                  </div>
                  <div class="col">
                    <span>Celular</span>
                    <input id="cel_suc" type="text" class="form-control">
                  </div>                  
                </div>
                
                <div class="row">
                  <div class="col">
                    <span>Direccion</span>
                    <input id="dir_suc" type="text" class="form-control">
                  </div>
                  <div class="col">
                    <span>Contacto</span>
                    <input id="cont_suc" type="text" class="form-control">
                  </div>                  
                </div>
                <div class="row">
                  <div class="col">
                    <span>contacto fijo</span>
                    <input id="contf_suc" type="text" class="form-control">
                  </div>
                  <div class="col">
                    <span>Horaios Atencion</span>
                    <input id="hor_suc" type="text" class="form-control">
                  </div>                  
                </div>
                <div class="row">
                  <div class="col">
                    <span>Departamento</span>
                    <input id="dep_suc" type="text" class="form-control">
                  </div>
                  <div class="col">
                    <span>Municipio</span>
                    <input id="mun_suc" type="text" class="form-control">
                  </div>                  
                </div>
                <br>
                <div class="row">
                  <div class="col" style="margin-left:200px"> 
                    <button type="button" style="background-color:00d0b7" onclick="createInter()"><span style="color:white; ">Guardar</span></button>                                
                  </div>
                </div>
              </form>
            </div>
          </div> 
      </div>  
    </div>
    </body>   
          <div style="background-color:00d0b7; margin: 0px; height: 50px;">          
            </div>  
            <div class="col-lg-1 col-offset-6 centered">
              <img data-src="holder.js/100x100" alt="" />
          </div>
          <script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>
    </html>
