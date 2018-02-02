var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
function loadInfo() {
var sessionId = document.getElementById("sessionId").value;

var that = this;

var nit_emp = document.getElementById("nitEmp").value;
var result;
var webMethod = "https://www.impeltechnology.com/rest/api/getPage?&sessionId="+sessionId+"&output=json&viewId=cixHwl7JRxSyHR0JOPb6bw&objName=Clientes&filterName=Nit&filterValue="+nit_emp;

$.ajax({
type: 'GET',
url: webMethod,
dataType: 'json',
async: false,
success: function(msg) {
   result = msg;
   document.getElementById("nombre_Cabecera").innerHTML = msg[0].Razon_Social;

   
   that.changeProperty(msg[0].R8156824);

},
error: function(e){
    console.log("Error al cargar el servicio");
}
});
}
function createInter(){
    var nombre_inter = document.getElementById("nombre_inter").value;
    var nit_inter = parseInt(document.getElementById("nit_inter").value);
    var dir_inter = document.getElementById("dir_inter").value;
    var sessionId = document.getElementById("sessionId").value;
    var id = document.getElementById("id").value;
    
var webMethod = "https://www.impeltechnology.com/rest/api/createRecord?&output=json&objName=Intermediarios&useIds=false&Nombre="+nombre_inter+"&Nit=" + nit_inter + "&Direccion="+dir_inter+"&sessionId="+sessionId+"&R8172194="+id;

$.ajax({
    type: 'GET',
    url: webMethod,
    dataType: 'json',
    async: false,
    success: function(msg) {
        alert("Intermediario Creado Exitosamente.");
    
    },
    error: function(e){
        console.log("Error al cargar el servicio");
    }
    });
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

