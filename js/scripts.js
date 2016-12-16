var main = function(){
  $('form').submit(function(event){
    var $input = $(event.target).find('#input-ing');
    var comment = $input.val();

    if (comment !== ""){
      var html = $('<li>').text(comment);
      html.prependTo('#new-ingredients');
      $input.val("");
    }
    return false;
  });
};



$(document).ready(main);
