$(document).ready(function() {
  $("#addressBook").submit(function(event) {
    var name = $("input#contactName").val();
    var phone = $("input#contactPhone").val();

    $("ul#listedName").prepend('<li>' + name + '</li>');
    event.preventDefault();

    $('ul#listedName').children('li').first().click(function() {
      $(this).after('<p>' + name + ' - ' + phone + '</p>');
        $("p").click(function(){
          $(this).remove();
        });
     });

  });
});
