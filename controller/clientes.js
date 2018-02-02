
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
           document.getElementById("razon_social").value = msg[0].Razon_Social;
           document.getElementById("nit_prov").value = msg[0].Nit;
           document.getElementById("email").value = msg[0].email;
           document.getElementById("nombre_Cabecera").innerHTML = msg[0].Razon_Social;
           document.getElementById("contacto_emp").value = msg[0].phone;

           //document.getElementById("contacto_emp").style.display = "none"
           //8172000 Intermediario 8171999 Directo
           that.changePropertyInterDirect(msg[0].id);
           
           that.changeProperty(msg[0].R8156824);

        },
        error: function(e){
            console.log("Error al cargar el servicio");
        }
    });
}
    function changePropertyInterDirect(id){
        var sessionId = document.getElementById("sessionId").value;

        var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?&query=select Tipo_Contabilidad from Clientes where id = "+id+"&sessionId="+sessionId+"&output=json";
    
        $.ajax({
            type: 'GET',
            url: webMethod,
            dataType: 'json',
            async: false,
            success: function(msg) {
               if (msg[0][0]==8171999) {
                document.getElementById("interCreate").style.display = "none";
                document.getElementById("interEdit").style.display = "none"; 

               } else {

                document.getElementById("sucuCrear").style.display = "none"; 
               
               }
    
            },
            error: function(e){
                console.log("Error al cargar el servicio");
            }
        });        
    }
    function updateinfoGral (){
        var sessionId = document.getElementById("sessionId").value;        
        var email = document.getElementById("email").value;
        var nit = document.getElementById("nit_prov").value;
        var id = document.getElementById("id").value;
        var contacto = document.getElementById("contacto_emp").value;
        var webMethod = "https://www.impeltechnology.com/rest/api/updateRecord?&objName=Clientes&id="+ id +"&useIds=false&email=" + email + "&phone=" + contacto + "&sessionId="+sessionId;
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

    function changeProperty (R8156824) {
        var lineas_negocio = R8156824;
        for (var i = 0; i < lineas_negocio.length; i++){

             switch (lineas_negocio[i]) {
                 case 8157304:
                 document.getElementById("prote_marca").src = "icons/logosLN/S_proteccion_marca_green.png";
                 break;
                 case 8157294:
                 document.getElementById("plasticos").src = "icons/logosLN/TR_plasticos_green.png";
                 break;
                 case 8157306:
                 document.getElementById("aceites").src = "icons/logosLN/TR_aceites_green.png";
                 break;
                 case 8157307:
                 document.getElementById("industriales").src = "icons/logosLN/GR_industriales_green.png";
                 break;
                 case 8157316:
                 document.getElementById("peligrosos").src = "icons/logosLN/GR_peligrosos_green.png";
                 break;          
             } 

        }
    }
