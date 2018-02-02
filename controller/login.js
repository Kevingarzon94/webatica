var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

function login(){
    var userPortal = document.getElementById("user").value
    var that = this;
    var user = "industria.kg";
    var pass = "qwerty123";
    var sessionId;
    var validateUser;

    var webMethod = "https://www.impeltechnology.com/rest/api/login?loginName="+ user +"&password="+ pass +"&output=json";
    
    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){

            sessionId = msg.sessionId;
            validateUser = that.validateUser(sessionId,userPortal);
            if (validateUser.length > 0){
                window.location.href = 'index.php?sessionId='+sessionId+'&nit='+validateUser[0][1]+'&id='+validateUser[0][2]; 
            } else {
                alert("Usuario o Contraseña Invalido.");
                return;
            }
                
        
        },
        error: function(e){
            alert("Usuario o contraseña Incorrecta");
        }
    });

}

function validateUser(sessionId,userPortal) {
    var arrayCount;
    var webMethod = "https://www.impeltechnology.com/rest/api/selectQuery?&query=select loginName,nit,id from clientes where loginName = '" + userPortal + "'&sessionId="+ sessionId +"&output=json&maxRows=3000";
    
    $.ajax({
        type: 'POST',
        url: webMethod,
        async: false,
        dataType: 'json',
        success: function(msg){
           arrayCount = msg;
        },
        error: function(e){
            alert("Usuario o contraseña Incorrecta");
        }
    });
    return arrayCount;
}

