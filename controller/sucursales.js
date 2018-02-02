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
    var sessionId = document.getElementById("sessionId").value;

    var nombre_suc = document.getElementById("nombre_suc").value;
    var email_suc = document.getElementById("email_suc").value;
    var nit_suc = document.getElementById("nit_suc").value;
    var cel_suc = document.getElementById("cel_suc").value;
    var dir_suc = document.getElementById("dir_suc").value;
    var cont_suc = document.getElementById("cont_suc").value;
    var hor_suc = document.getElementById("hor_suc").value;
    var dep_suc = document.getElementById("cont_suc").value;
    var mun_suc = document.getElementById("mun_suc").value;
    var contf_suc = document.getElementById("contf_suc").value;
;


    var id = document.getElementById("id").value;
    
var webMethod = "https://www.impeltechnology.com/rest/api/createRecord?&output=json&objName=Sucursal1&useIds=false&name="+nombre_suc+"&email=" + email_suc + "&Nit="+nit_suc+"&Departamento="+dep_suc+"&Direccin="+dir_suc+"&Telefono="+ contf_suc +"&sessionId="+sessionId+"&R8173502="+id;

$.ajax({
    type: 'GET',
    url: webMethod,
    dataType: 'json',
    async: false,
    success: function(msg) {
        alert("Sucursal Creada Exitosamente.");
    
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

