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

function carregaLista(){
  $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://appmobile3i2.000webhostapp.com/listar.php",//para onde vou enviar
      dataType:"json",
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        var itemlista = "";
        $.each(data.pizzas, function(i,dados){
            itemlista += "<option value="+dados.codigo+">"+dados.sabor+"</option>"
        });
        $("#lista").html(itemlista);
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        navigator.notification.alert("Erro ao buscar registros!");
      }
    });
}


$(document).on("change","#lista",function(){
    var parametro ={
      "codigo":$("option:selected",("#lista")).val()
    };
    
    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://appmobile3i2.000webhostapp.com/listar-um.php",//para onde vou enviar
      data:parametro,
      dataType:"json",
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        $("#codigo").val(data.pizza.codigo);
        $("#sabor").val(data.pizza.sabor);
        $("#valor").val(data.pizza.valor)
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        navigator.notification.alert("Erro ao buscar registros!");
      }
    });
});

$(document).on("click","#editar",function(){
  $("#sabor").prop("readonly", false);
  $("#valor").prop("readonly", false);     
});

$(document).on("click","#cancEdit",function(){
  $("#sabor").val("");
  $("#valor").val("");
  $("#sabor").prop("readonly", true);
  $("#valor").prop("readonly", true);     
});

$(document).on("click", "#salEdit", function(){
   var parametros ={
      "codigo":$("#codigo").val(),
      "sabor":$("#sabor").val(),
      "valor":$("#valor").val()
    };

    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://appmobile3i2.000webhostapp.com/altera.php",//para onde vou enviar
      data:parametros,//o que eu vou enviar
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        navigator.notification.alert(data);
        location.reload();
      },
      error: function(data){
        navigator.notification.alert("Erro ao cadastrar!");
      }
    });
});

$(document).on("click", "#deletar", function(){
   var parametro ={
      "codigo":$("#codigo").val()
    };

    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://appmobile3i2.000webhostapp.com/deletar.php",//para onde vou enviar
      data:parametro,//o que eu vou enviar
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        navigator.notification.alert(data);
        location.reload();
      },
      error: function(data){
        navigator.notification.alert("Erro ao cadastrar!");
      }
    });
});