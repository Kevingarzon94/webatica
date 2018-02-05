<?php session_start(); ?>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
   
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="controller/solicitudcrear.js"></script>

    </head>
    <script type="text/javascript">

</script>    
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
      <div style="height: 60px; background-color: 00d0b7;">
          <ul class="nav nav-tabs nav-justified" >
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
        <span style="color:azure; margin-left:-135px; " >Gestion de residuos</span>
        <span style="color:azure; margin-left:47px;" >Transformación</span>
        <span style="color:azure; margin-left:10px;" >Servicios</span>
        </div>
        <img id="peligrosos" src="icons/logosLN/GR_peligrosos_white.png" width="80" height="80">
        <img id="industriales" src="icons/logosLN/GR_industriales_white.png" width="80" height="80">
        <img id="aceites" src="icons/logosLN/TR_aceites_white.png" width="80" height="80">
        <img id="plasticos" src="icons/logosLN/TR_plasticos_white.png" width="80" height="80">
        <img id="prote_marca" src="icons/logosLN/S_proteccion_marca_white.png" width="80" height="80" style=" margin-left:15px">      
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
              <div id="qab_content" style="text-align:center; display: inline-block;"><span id="qab_message"><p style="text-align:left;margin-left:5%;margin-top:10px;width:400px;"> <span style="margin-right:10px;margin-left:0px; color:white; "> CREAR SOLICITUD </span></p> </span> 
              
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
            <br>
            <div class="container">
            
            <!-- Trigger the modal with a button -->
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Agregar Material</button>
              <input type="hidden" id="ListaPro" name="ListaPro" value="" required />
            <table id="TablaPro" class="table" name="Solicitud_Table">
                <thead>
                    <tr>
                        <th>Grupo de Material</th>
                        <th>Material</th>
                        <th>Cantidad en Kg</th>
                        <th>Tipo Embalaje</th>
                        <th>Cantidad Embalaje</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="ProSelected"><!--Ingreso un id al tbody-->
                    <tr>
                 
                    </tr>
                </tbody>
            </table>
    <!--Agregue un boton en caso de desear enviar los productos para ser procesados-->
                    <div class="form-group">
                        <button onClick="createSolicitud()" id="guardarS" name= "guardar" class="btn btn-info btn-lg pull-right">Grabar Orden de Servicio</button>
                    </div>
  <br>
  <br>     
  <div class="form-group row">
  <div class="col-xs-4">
    <label for="ex3">Observaciones</label>
    <input class="form-control" id="ex3" type="text">
  </div>
</div>
<div class="form-group row">
  <div class="col-xs-2">
    <label for="ex1">Tipo de Servicio</label>
    <input class="form-control" id="ex1" type="text">
  </div>
  <div class="col-xs-2">
    <label for="ex1">Presencial</label>
    <input class="form-control" id="ex1" type="text">
  </div>
  <div class="col-xs-2">
    <label for="ex1">Registro Fotografico</label>
    <input class="form-control" id="ex1" type="text">
  </div>
  <div class="col-xs-2">
    <label for="ex1">Devol de recipientes</label>
    <input class="form-control" id="ex1" type="text">
  </div>

  <div class="form-group row">
  <div class="col-xs-2">
    <label for="ex1">Post-fechar servicio</label>
    <input class="form-control" id="ex1" type="text">
  </div>
  <div class="col-xs-2">
    <label for="ex1">Otros servicios</label>
    <input class="form-control" id="ex1" type="text">
  </div>      
</div>
<br>
        <div class="modal fade" id="myModal" role="dialog">

<div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Agregar producto a la lista</h4>
        </div>
        <div class="modal-body">
             <div class="form-group">
                        <label>Producto</label>
                    <select class="selectpicker form-control" id="pro_id" name="pro_id" data-width='100%' >
                    </select>
    </div>
        </div>
        <div class="modal-footer">
            <!--Uso la funcion onclick para llamar a la funcion en javascript-->
            <button type="button" onclick="agregarProducto()" class="btn btn-default" data-dismiss="modal">Agregar</button>
        </div>
    </div>

</div>
</div>

            </div>
          </div> 
      </div>  
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
    </body>   

    </html>
