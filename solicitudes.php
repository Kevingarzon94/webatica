<?php session_start(); ?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
<html>
    
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
        crossorigin="anonymous">
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
        crossorigin="anonymous"></script>
<!-- Kendo -->
<style>html { font-size: 14px; font-family: Arial, Helvetica, sans-serif; }</style>
<title></title>
<link rel="stylesheet" href="https://kendo.cdn.telerik.com/2017.3.1026/styles/kendo.common-material.min.css" />
<link rel="stylesheet" href="https://kendo.cdn.telerik.com/2017.3.1026/styles/kendo.material.min.css" />
<link rel="stylesheet" href="https://kendo.cdn.telerik.com/2017.3.1026/styles/kendo.material.mobile.min.css" />

<script src="https://kendo.cdn.telerik.com/2017.3.1026/js/jquery.min.js"></script>
<script src="https://kendo.cdn.telerik.com/2017.3.1026/js/kendo.all.min.js"></script>
<!-- Kendo -->
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
<script src="controller/solicitudes.js"></script>
        <script type="text/javascript">
        $('#datepicker').datepicker;
        </script>
      </head>
    <body>
    <div>
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
      <input id="sessionId" type="text" value="<?php echo $_SESSION["sessionId1"] ?>" hidden>
    <input id="nitEmp" type="text" value="<?php echo $_SESSION["Nit1"] ?>" hidden>
    <input id="id" type="text" value="<?php echo $_SESSION["id1"] ?>" hidden>

      <div style=" height: 120px; background-color: 2d1a45; align-items: center; justify-content:center">

        <div  style="right: 0px; padding: 10px;  margin-left: 350px; ">
        <div style="margin-left:200px; ">
        <span style="color:azure; margin-left:-150px; " >Gestion de residuos</span>
        <span style="color:azure; margin-left:80px;" >Transformación</span>
        <span style="color:azure; margin-left:38px;" >Servicios</span>
        </div>
          <a href="#"><img src="icons/logosLN/GR_peligrosos_white.png" class="img-responsive" width="80" height="80"></a>
          <a href="#"><img src="icons/logosLN/GR_hospitalarios_white.png" class="img-responsive" width="80" height="80"></a>
          <a href="#"><img src="icons/logosLN/GR_industriales_white.png" class="img-responsive" width="80" height="80"></a>
          <a href="#"><img src="icons/logosLN/TR_aceites_white.png" class="img-responsive" width="80" height="80"></a>
          <a href="#"><img src="icons/logosLN/TR_plasticos_white.png" class="img-responsive" width="80" height="80"></a>
          <a href="#"><img src="icons/logosLN/S_proteccion_marca_white.png" class="img-responsive" width="80" height="80"></a>s      
          <a href="#"><span style="color:azure;">Salir</span></a>
        </div>
      </div>
      <div style="height: 70px; background-color:white;">
            <b style="margin-left:325px;">Cliente:</b> <br> 
            <h4 style="margin-left:325px;"id="nombre_Cabecera"> </h4>
      </div>      
      <div class="h-100" style="background-color:gainsboro;">
                   
        <div class="mx-auto h-100 w-75" style="background-color: white;">
            <div style="background-color:00d0b7; margin: 0px;">          
              <div style="text-align:center; display: inline-block;"><span><p style="text-align:left;margin-left:5%;margin-top:10px;width:400px;"> <span style="margin-right:10px;margin-left:0px; color:white; "> CONSULTE AQUI </span></p> </span> 
              
              </div>
              
            </div>
            <div style="background-color:aquamarine; margin: 0px; height: 5px;">          
                <div style="display: inline-block;"><span><p style="text-align:left;margin-left:5%;margin-top:10px;width:200px;"> <span style="margin-right:10px;margin-left:0px; color:white; "></span></p> </span> 
                
                </div>
                
              </div>          
               <br> 
            <div>
                <div class="container">
                    <div class="row">
                      <div class="form-group col-md-4">
                        <select class="form-control" id="estado_s">
                              <option value="Estado de la Solicitud">Estado de la Solicitud</option>
                              <option value="Creado">Creado</option>
                              <option value="Cargado">Cargado</option>
                              <option value="Almacenado">Almacenado</option>
                              <option value="Tratado">Tratado</option>
                              <option value="Certificado">Certificado</option>
                              <option value="Cerrado">Cerrado</option>
                        </select>                          
                      </div>
                    </div>
                  </div>

                      <div class="container">
                        <div class="row">
                          <div class="form-group col-md-8">
                            <button type="button" style="background-color:00d0b7; justify-content: center; align-items: center;" onClick="solicitudes()"><span style="color:rgb(10, 60, 61); ">Buscar</span></button>                      
                          </div>
                        
                        </div>
                      </div>
            </div>
            <div style="background-color:00d0b7; margin: 0px;">          
                <div style="text-align:center; display: inline-block;"><span><p style="text-align:left;margin-left:5%;margin-top:10px;width:400px;"> <span style="margin-right:10px;margin-left:0px; color:white; "> Resultados de la consulta </span></p> </span> 
                
                </div>
                
              </div>
              <div style="background-color:aquamarine; margin: 0px; height: 5px;">          
                  <div style="display: inline-block;"><span><p style="text-align:left;margin-left:5%;margin-top:10px;width:200px;"> <span style="margin-right:10px;margin-left:0px; color:white; "></span></p> </span> 
                  
                  </div>
                  <div id="example">
                    <table id="grid">
                        <colgroup>
                            <col />
                            <col />
                            <col style="width:90px" />
                            <col style="width:90px" />
                            <col style="width:90px" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Fecha creacion</th>
                                <th>Consecutivo</th>
                                <th width="15%">Consecutivo OS</th>
                                <th>Sede</th>
                                <th>Direccion</th>
                                <th>Cantidad(Kg)</th>
                                <th>Cantidad Embalaje</th>
                            </tr>
                        </thead>
                        <tbody id="ProSelected">
                        <tr>

                        </tr>
                        </tbody>
                    </table>
        
                    <script>
                        $(document).ready(function() {
                            $("#grid").kendoGrid({
                                height: 350,
                                sortable: true
                            });
                        });
                    </script>
                </div>                  
                </div> 
              
          </div>
           
      </div>  
    </div>
    </body>   
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


