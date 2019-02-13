
$(document).ready(function(){
    $.ajax({
      url: '/products',
      type: 'GET',
      success: function(response){
          var options = "";
          for(var i = 0;i < response.length; i++)
          {
              options += "<option value='" + response[i].id + "'>" +
              response[i].name+ "</option>";
          }
          $("#products").html(options);
      }
    });
  
  $("#products").on('change',function(){
      $.ajax({
        url: '/products/' + $("#products").val(),
        type: 'GET',
        cache: false,
        success: function(response){
              $("#name").val(response[0].name);
              $("#price").val(response[0].price);
              $("#stock").val(response[0].stock);
            }
        });
      });
  
  $("#updateb").on('click',function(){
      var Tname = $("#name").val();
      var Tprice = $("#price").val(); 
      var Tstock = $("#stock").val();
      $.ajax({
        url: '/products/' + $("#products").val(),
        type: 'PUT',
        data: {name:Tname,price:Tprice,stock:Tstock},
        cache: false,
        success: function(response){
          alert('Update was performed');
          window.location.reload();
            },
          error: function(err){
            alert("Error");
          }
        });
      });
  
  $("#addb").on('click',function(){
      $.ajax({
        url: '/products/',
        type: 'POST',
        data: "name=" +$("#name").val() + "&price=" + $("#price").val() +"&stock=" + $("#stock").val(),
        success: function(response){
            alert('New Contact Added');
            window.location.reload();
              },
            error: function(err){
            alert("Error");
              }
          });
        });
  
  $("#deleteb").on('click',function(){
    if(confirm("Delete "+$("#name").val() + "?")){
        $.ajax({
          url: '/products/' + $("#products").val(),
          type: 'DELETE',
          success: function(response){
            alert('Product Deleted');
            window.location.reload();
                },
          error: function(err){
            alert("Error");
                }
            });
          }
        });
  
  });
  
  
  
  