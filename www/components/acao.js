// This is a JavaScript file

$(document).on("click","#listar",function(){
  $(location).attr("href","listar.html");
});

$(document).on("click","#salvar",function(){
    var parametros ={
      "sabor":$("#sabor").val(),
      "valor":$("#valor").val()
    };

    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://appmobile3i2.000webhostapp.com/cadastra.php",//para onde vou enviar
      data:parametros,//o que eu vou enviar
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        navigator.notification.alert(data);
        $("#sabor").val("");
        $("#valor").val("")
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        navigator.notification.alert("Erro ao cadastrar!");
      }
    });
});

