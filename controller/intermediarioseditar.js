var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
function myOnLoad() {
    cargar_provincias()
   }
   
   // funcion para Cargar Provincias al campo <select>
   function cargar_provincias() {
    var sessionId = document.getElementById("sessionId").value;
    var id = document.getElementById("id").value;
    var array;
    
    var that = this;
    var nit_emp = document.getElementById("nitEmp").value;   
    var webMethod = "https://www.impeltechnology.com/rest/api/getPage?&sessionId="+sessionId+"&output=json&viewId=FQ_jUYw5T_-8bkxFuS5F0A&filterName=R8172194&filterValue="+id;
    
    $.ajax({
        type: 'GET',
        url: webMethod,
        dataType: 'json',
        async: false,
        success: function(msg) {
            array = msg;
        },
        error: function(e){
            console.log("Error al cargar el servicio");
        }
    });

   
    // Ordena el Array Alfabeticamente, es muy facil ;)):
    array.sort();
   
    addOptions("sucursal", array);
   }
   
   // Rutina para agregar opciones a un <select>
   function addOptions(domElement, array) {
    var select = document.getElementsByName(domElement)[0];
   
    for (var i=0; i<array.length;i++) {
     var option = document.createElement("option");
     option.text = array[i].Nombre;
     option.value = array[i].Nit;
     select.add(option);
    }
   }
   function changeProperty (R8156824) {
    var lineas_negocio = R8156824;
    for (var i = 0; i < lineas_negocio.length; i++){

         switch (lineas_negocio[i]) {
             case 8157304:
             document.getElementById("prote_marca").src = "icons/logosLN/S_proteccion_marca_green.png";
             break; 
         } 

    }
}
    function callInfo (){
        var sessionId = document.getElementById("sessionId").value;
        var nitSucursal = document.getElementById("sucursal").value;
        var webMethod = "https://www.impeltechnology.com/rest/api/getPage?&sessionId="+sessionId+"&output=json&viewId=FQ_jUYw5T_-8bkxFuS5F0A&filterName=Nit&filterValue="+nitSucursal;
        
        $.ajax({
            type: 'GET',
            url: webMethod,
            dataType: 'json',
            async: false,
            success: function(msg) {
            document.getElementById("Nombre").value = msg[0].Nombre;
            document.getElementById("Direccion").value = msg[0].Direccion; 
            document.getElementById("id_inter").value = msg[0].id;
                
            },
            error: function(e){
                console.log("Error al cargar el servicio");
            }
        }); 
    }
    function EditarInter () {
        var sessionId = document.getElementById("sessionId").value;
        var id = document.getElementById("id_inter").value;
        var Direccion = document.getElementById("Direccion").value;
        var webMethod = "https://www.impeltechnology.com/rest/api/updateRecord?&objName=Intermediarios&id="+ id +"&useIds=false&Direccion=" + Direccion + "&sessionId="+sessionId;
        $.ajax({
        type: 'GET',
        url: webMethod,
        async: false,
        success: function(msg) {
            console.log("Bien echo");
        },
        error: function(e){
            console.log("Error al cargar el servicio");
        }
    });
        
    }    