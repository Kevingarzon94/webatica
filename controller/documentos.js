var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

function myOnLoad() {
    cargar_provincias()
   }

   function cargar_provincias() {
    var sessionId = document.getElementById("sessionId").value;
    var id = document.getElementById("id").value;
    var array;
    var codDocuments;

    var that = this;
    var nit_emp = document.getElementById("nitEmp").value;   
    var webMethod = "https://www.impeltechnology.com/rest/api/getPage?&sessionId="+sessionId+"&output=json&viewId=Kk_rgmIrSDiG5giCmJg1yQ&filterName=R8146214&filterValue="+id;
    
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

   
    array.sort();
   
    addOptions("sucursal", array);
   }   
   function addOptions(domElement, array) {
    var select = document.getElementsByName(domElement)[0];
   
    for (var i=0; i<array.length;i++) {
     var option = document.createElement("option");
     switch (array[i].id) {
        case 8449362:
        option.text = "Certificado de Existencia y Rep. Legal";
        break;
        case 8449361:
        option.text = "Cedula Rep. Legal";
        break;
        case 8449365:
        option.text = "Cer. Ingresos decreto 1070 2013";
        break;    
        case 8449364:
        option.text = "Cer. Bancaria menos 30 dias";
        break;   
        case 8449367:
        option.text = "Estados Financieros (últimos 2 años a diciembre 31)";
        break;
        case 8449366:
        option.text = "Ultima Declaración Renta del año inmediatamente anterior";
        break;
        case 8449363:
        option.text = "Auto. Tratamiento de Datos";
        break;
        case 8449368:
        option.text = "Certificacion Bancaria 1";
        break;
        case 8449360:
        option.text = "Rut";
        break;
    } 
     option.value = array[i].id;
     select.add(option);
    }
   }
   function uploadFile (binData,sessionId,idDocumento){

    
    
    var webMethod ="https://www.impeltechnology.com/rest/api/setBinaryData?&sessionId="+sessionId+"&id="+idDocumento+"&fieldName=file&value="+binData+"&contentType=application/pdf&fileName=prueba.pdf&output=json";
    
    $.ajax({
        type: 'POST',
        url: webMethod,
        dataType: 'json',
        async: false,
        contentType:false, 
        processData:false, 
        cache:false,
        success: function(msg) {    
            array = msg;
        },
        error: function(e){
            console.log("Error al cargar el servicio");
        }
    });   

}
    function convertFile(){
    var files = document.getElementById('file').files;
    if (files.length > 0) {
    this.getBase64(files[0]);
    }
}
  function getBase64(file) {
        var sessionId = document.getElementById("sessionId").value;
    var idDocumento = document.getElementById("DocumentName").value; 
    var that = this;
     var reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = function () {
       console.log(reader.result);
       that.uploadFile(reader.result,sessionId,idDocumento);
     };
     reader.onerror = function (error) {
       console.log('Error: ', error);
     };
  }