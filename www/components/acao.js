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