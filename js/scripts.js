$('#add').click(function(){
  ('.new-ingredients').append($('<li>', {
    text: $('#input-ing').val()
  }));
});
