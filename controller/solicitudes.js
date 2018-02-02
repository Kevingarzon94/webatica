
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

               }
    
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
    function solicitudes(){
        var estado = document.getElementById('estado_s').value;
        var that = this;
        var id = document.getElementById("id").value;
        var sessionId = document.getElementById("sessionId").value;
        var dataArray;

        var webMethod = "https://www.impeltechnology.com/rest/api/getPage?&sessionId="+sessionId+"&output=json&viewId=PZz4zo3bS46vyLCI1cJzQQ&filterName=R8206139&filterValue="+id;
    
        $.ajax({
            type: 'GET',
            url: webMethod,
            dataType: 'json',
            async: false,
            success: function(msg) {
                dataArray = msg;
                msg = msg.filter(function (status) {
                    return msg.status !== estado;
                  })
                  console.log(msg);

                that.createTable(dataArray);
            },
            error: function(e){
                console.log("Error al cargar el servicio");
            }
        });        
    }
    function createTable(jsonData) {
      for (var k= 0; k <= $('#grid').find(".item").length; k++) {
      $("#Elements").remove();
      }
      $("#Elements").remove();
      
      for (var i=0; i < jsonData.length; i++ ) {
        var newtr = '<tr class="item" id="Elements">';
        newtr = newtr + '<td class="a"> ' + jsonData[i].createdAt + ' </td>';
        newtr = newtr + '<td class="a"> ' + jsonData[i].Consecutivo_SS+ ' </td>';
        newtr = newtr + '<td class="a">  '+ jsonData[i].R8206105+'</td>'; //Orden de servicio   
        newtr = newtr + '<td class="a">  </td>';
        newtr = newtr + '<td class="a">  </td>';
        newtr = newtr + '<td class="a"> '+ jsonData[i].Cantidad_en_Kg +' </td>';
        newtr = newtr + '<td class="a"> '+ jsonData[i].Cantidad_Embalaje +' </td></tr>';

        $('#ProSelected').append(newtr);
     }
        

    }


    for (var i = 0; i < $(".item").length; i++){
        arrays_table = $(".item").eq(i).find(".a").find(".b");

        this.createSolicitudServicio(arrays_table[0].id,arrays_table[1].id,idOrdenServicio,arrays_table[2].value,arrays_table[3].value,arrays_table[4].value);  
        
    }