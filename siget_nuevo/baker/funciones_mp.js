     
     $(document).ready(function(){
        var consulta;
        //hacemos focus al campo de búsqueda
        $("#txt_p").focus();

		  
          $("#btn_p").click(function(e){
                                      
              //obtenemos el texto introducido en el campo de búsqueda
              consulta = $("#txt_p").val();
			  //alert (consulta);
              //hace la búsqueda                                                                                  
              $.ajax({
                    type: "POST",
                    url: "busqueda_mP.php",
                    data: "p="+consulta,
                    dataType: "html",
                    beforeSend: function(){
                    //imagen de carga
                    $("#capa_L").html("<p align='center'><img src='images/ajax-loader.gif' /></p>");
					},
                    error: function(){
                    alert("error petición ajax");
                    },
                    success: function(data){                                                    
                    $("#capa_L").empty();
                    $("#capa_L").append(data);                                                             
                    }
              });                                                                         
        });                                                     

	    
        //comprobamos si se pulsa una tecla
        $("#txt_p").keyup(function(e){
		  if (e.which != 13
                        )return;           
              //obtenemos el texto introducido en el campo de búsqueda
              consulta = $("#txt_p").val();
              //hace la búsqueda                                                                                  
              $.ajax({
                    type: "POST",
                    url: "busqueda_mP.php",
                    data: "p="+consulta,
                    dataType: "html",
                    beforeSend: function(){
                    //imagen de carga
                    $("#capa_L").html("<p align='center'><img src='images/ajax-loader.gif' /></p>");
                    },
                    error: function(){
                    alert("error petición ajax");
                    },
                    success: function(data){                                                    
                    $("#capa_L").empty();
                    $("#capa_L").append(data);                                                             
                    }
              });                                                                         
        });                                                     

	    
  		
		});             
    

  
   function cargar(div,desde)
   {
   $(div).load(desde);
   }
 

 
function editar(id) {
   //alert('EDITAR '+id);
		
    $.ajax({
        type: "POST",
        url: "edit_mP.php",
        data: {operacion: 'edicion', id_mesaP: id}
    }).done(function (html) {
        $('#capa_d').html(html);
    });
}

function borrar(id) {
   //alert('BORRAR '+id);
		
    $.ajax({
        type: "POST",
        url: "edit_mP.php",
        data: {operacion: 'baja', id_mesaP: id}
    }).done(function (html) {
        $('#capa_d').html(html);
    });
}

function no_grabar(id) {
   //alert('GRABAR '+id);
		
    $.ajax({
        type: "POST",
        url: "edit_mP.php",
        data: {operacion: 'actualizar', id_mesaP: id}
    }).done(function (html) {
        $('#capa_d').html(html);
    }).false(function () {
        alert('Error al cargar modulo');
    });
}