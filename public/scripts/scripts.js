
$(document).ready(function(){
    $.ajax({
      url: '/contacts',
      type: 'GET',
      success: function(response){
          var options = "";
          for(var i = 0;i < response.length; i++)
          {
              options += "<option value='" + response[i]._id + "'>" +
              response[i].name +"  ("+ response[i].phone +")"+ "</option>";
          }
          $("#contacts").html(options);
      }
    });
  
  $("#contacts").on('change',function(){
      $.ajax({
        url: '/contacts/' + $("#contacts").val(),
        type: 'GET',
        cache: false,
        success: function(response){
              $("#name").val(response.name);
              $("#phone").val(response.phone);
            }
        });
      });
  
  $("#updateb").on('click',function(){
      var Tname = $("#name").val();
      var Tphone = $("#phone").val(); 
      $.ajax({
        url: '/contacts/' + $("#contacts").val(),
        type: 'PUT',
        data: {name:Tname,phone:Tphone},
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
        url: '/contacts/',
        type: 'POST',
        data: "name=" +$("#name").val() + "&phone=" + $("#phone").val(),
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
          url: '/contacts/' + $("#contacts").val(),
          type: 'DELETE',
          success: function(response){
            alert('Contact Deleted');
            window.location.reload();
                },
          error: function(err){
            alert("Error");
                }
            });
          }
        });
  
  });
  
  
  
  