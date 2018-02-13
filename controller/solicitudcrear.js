
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

    this.cargar_provincias();
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

    function cargar_provincias() {
        var sessionId = document.getElementById("sessionId").value;
        var id = document.getElementById("id").value;
        var array;
        var codDocuments;
    
        var that = this;
        var nit_emp = document.getElementById("nitEmp").value;   
        var webMethod = "https://www.impeltechnology.com/rest/api/getPage?&sessionId="+sessionId+"&output=json&viewId=AmcTfamMRte_92bgSjIizA&filterName=R_Cliente_TP&filterValue="+id;
        
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
       
        addOptions("pro_id", array);
       }
       function findmaterialGroup(cod){
        var sessionId = document.getElementById("sessionId").value;
        var GrupoM;
        var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?&sessionId="+ sessionId +"&query=select R_Agrupa_TP from Tabla_Precios where id = " + cod + "&output=json";
        
        $.ajax({
            type: 'GET',
            url: webMethod,
            dataType: 'json',
            async: false,
            success: function(msg) {    
                GrupoM = msg[0][0];

            },
            error: function(e){
                console.log("Error al cargar el servicio");
            }
        });      
        return GrupoM;
        }
        function fidnmaterialGroupName(cod){
            var sessionId = document.getElementById("sessionId").value;
            var GrupoText;
            var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?&sessionId="+ sessionId +"&query=select name from Agrupador where id = " + cod + "&output=json";
            
            $.ajax({
                type: 'GET',
                url: webMethod,
                dataType: 'json',
                async: false,
                success: function(msg) {    
                    GrupoText = msg[0][0];
    
                },
                error: function(e){
                    console.log("Error al cargar el servicio");
                }
            });      
            return GrupoText;
            }        
        function findmaterial(cod){
            var sessionId = document.getElementById("sessionId").value;
            var GrupoM;
            var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?&sessionId="+ sessionId +"&query=select R_Material_TP from Tabla_Precios where id = " + cod + "&output=json";
            
            $.ajax({
                type: 'GET',
                url: webMethod,
                dataType: 'json',
                async: false,
                success: function(msg) {    
                    GrupoM = msg[0][0];
    
                },
                error: function(e){
                    console.log("Error al cargar el servicio");
                }
            });      
            return GrupoM;
            }       
       function addOptions(domElement, array) {
        var select = document.getElementsByName(domElement)[0];
       
        for (var i=0; i<array.length;i++) {
         var option = document.createElement("option");
         option.text = array[i].Nom_Material; 
         option.value = array[i].id;
         select.add(option);
        }
       }
       function agregarProductoauto() {

        
        // Guarde en la tabla orde de servicio
        // le asocia el id a la solicitud de servicio 
        
        var newtr = '<tr class="item"  data-id="'+sel+'">';
        newtr = newtr + '<td class="iProduct" ><input class="form-control" id="11" name="precio" value="23" required /></td>';
        newtr = newtr + '<td> <input  class="form-control" id="1" name="precio" value="23" required /></td>';
        newtr = newtr + '<td><input  class="form-control" id="2" name="cantidad" value="2" required /></td>';
        newtr = newtr + '<td><input  class="form-control"  id="3" name="total" value="46" required /></td>';
        newtr = newtr + '<td><button type="button" class="btn btn-danger btn-xs remove-item"><i class="fa fa-times"></i></button></td></tr>';
        
        $('#ProSelected').append(newtr); //Agrego el Producto al tbody de la Tabla con el id=ProSelected
        
        RefrescaProducto();//Refresco Productos

}



  // Refresca Producto: Refresco la Lista de Productos dentro de la Tabla
  // Si es vacia deshabilito el boton guardar para obligar a seleccionar al menos un producto al usuario
  // Sino habilito el boton Guardar para que pueda Guardar
  function RefrescaProducto(){
    var ip = [];
    var i = 0;
    $('#guardar').attr('disabled','disabled'); //Deshabilito el Boton Guardar
    $('.iProduct').each(function(index, element) {
        i++;
        ip.push({ id_pro : $(this).val() });
    });
    // Si la lista de Productos no es vacia Habilito el Boton Guardar
    if (i > 0) {
        $('#guardar').removeAttr('disabled','disabled');
    }
    var ipt=JSON.stringify(ip); //Convierto la Lista de Productos a un JSON para procesarlo en tu controlador
    $('#ListaPro').val(encodeURIComponent(ipt));
}


   function agregarProducto() {

        var sel = $('#pro_id').find(':selected').val(); //Capturo el Value del Producto
        var text = $('#pro_id').find(':selected').text();//Capturo el Nombre del Producto- Texto dentro del Select
        var sptext = text.split();
        
        var GroupM = this.findmaterialGroup(sel);
        var GroupMtext = this.fidnmaterialGroupName(GroupM);
        var idMaterial = this.findmaterial(sel);


        var newtr = '<tr class="item"  data-id="'+sel+'">';
        newtr = newtr + '<td class="a iProduct" ><input  class="b form-control" id="'+GroupM+'" name="Grupo" value="'+GroupMtext+'" required /></td>';
        newtr = newtr + '<td class="a"> <input  class="b form-control" id="'+idMaterial+'" name="material" value="'+text+'" required /></td>';
        newtr = newtr + '<td class="a"><input  class="b form-control" id="c_s" name="cantidad" required/></td>';
        newtr = newtr + '<td class="a"><select class="b selectpicker form-control embalaje" id="t_emb" name="t_emb" data-width="100%"></select></td>';
        newtr = newtr + '<td class="a"><input  class="b form-control"  id="kg_s" name="cantidadEmbalaje" required /></td>';
        newtr = newtr + '<td class="a"><button type="button" class="btn btn-danger btn-xs remove-item"><i class="fa fa-times"></i></button></td></tr>';
        
        $('#ProSelected').append(newtr); //Agrego el Producto al tbody de la Tabla con el id=ProSelected
        
        RefrescaProducto();//Refresco Productos
            
        $('.remove-item').off().click(function(e) {
            $(this).parent('td').parent('tr').remove(); //En accion elimino el Producto de la Tabla
            if ($('#ProSelected tr.item').length == 0)
                $('#ProSelected .no-item').slideDown(300); 
            RefrescaProducto();
        });        
       $('.iProduct').off().change(function(e) {
            RefrescaProducto();
       });
       this.cargar_tipoembalaje(); // Carga el select con los tipos de embalaje
}
function createOrdeServicio(){
var idOrden;
var sessionId = document.getElementById("sessionId").value;
var id = document.getElementById("id").value;

var webMethod = "https://www.impeltechnology.com/rest/api/createRecord?&output=json&objName=Orden_de_Servicio&useIds=false&R8183919="+id+"&sessionId="+sessionId;

$.ajax({
    type: 'GET',
    url: webMethod,
    dataType: 'json',
    async: false,
    success: function(msg) {
        idOrden = msg.id; 
    },
    error: function(e){
        console.log("Error al cargar el servicio");
    }
    });

    return idOrden;
}
function createSolicitud () {
    var valor1;
    var idOrdenServicio = this.createOrdeServicio();

    var arrays_table;
    for (var i = 0; i < $(".item").length; i++){
        arrays_table = $(".item").eq(i).find(".a").find(".b");

        this.createSolicitudServicio(arrays_table[0].id,arrays_table[1].id,idOrdenServicio,arrays_table[2].value,arrays_table[3].value,arrays_table[4].value);  
        
    }

}
function createSolicitudServicio(grupo,material,idOrdenservicio,cantidadkg,t_embalaje,c_embalaje){
    var sessionId = document.getElementById("sessionId").value;
    var id = document.getElementById("id").value;
    
    var webMethod = "https://www.impeltechnology.com/rest/api/createRecord?&output=json&objName=Solicitud_Servicio&useIds=false&R8206152="+grupo+"&R8206161="+material+"&R8206105="+idOrdenservicio+"&R8206139="+id+"&Cantidad_en_Kg="+cantidadkg+"&R8208895="+t_embalaje+"&Cantidad_Embalaje="+c_embalaje+"&sessionId="+sessionId;
    
    $.ajax({
        type: 'GET',
        url: webMethod,
        dataType: 'json',
        async: false,
        success: function(msg) {
            alert("Solicitud Creada Correctamente"); 
        },
        error: function(e){
            console.log("Error al cargar el servicio");
        }
        });
    
       
    }

    function validateSession() {
        
        
    }

    function cargar_tipoembalaje() {
        var sessionId = document.getElementById("sessionId").value;
        var id = document.getElementById("id").value;
        var array;
    
        var that = this;
        var webMethod = "https://www.impeltechnology.com/rest/api/getPage?&sessionId="+sessionId+"&output=json&viewId=iFoP7eHsRbSc6GW3cdaSJA";
        
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
       
        addOptions2("t_emb", array);
       }
       function addOptions2(domElement, array) {  
        var InputSelect = document.getElementsByName(domElement); // se toma el DOM select t_emb
        var select;

    for (var k= 0; k<InputSelect.length;k++){ // se crea un arreglo que recorra el DOM select
        select = document.getElementsByName(domElement)[k];

        if (select.value == "") {
        for (var i=0; i<array.length;i++) { //llena el DOM en la posicion que se encuentre
         
         var option = document.createElement("option");
         option.text = array[i].name; 
         option.value = array[i].id;
         select.add(option);
        }
    }
    }
       }