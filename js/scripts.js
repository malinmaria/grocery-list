var main = function(){
  $('form').submit(function(event){
    var $input = $(event.target).find('#input-ing');
    var ing = $input.val();

    if (ing !== ""){
      var html = $('<li data-value="'+ ing +'"></li>').text(ing);
      html.appendTo('#new-ingredients');
      $input.val("");
    }
    return false;
  });
  $('.chkbx').change(function(){
    var value = $(this).val(),
    $list = $('#new-ingredients');
    if(this.checked){
      $list.append("<li data-value='" + value + "'>" + value + "</li>");
    }
    else {
        $list.find('li[data-value="' + value + '"]').slideUp("fast", function() {
            $(this).remove();
        });
    }
    return false;
  });
};

$('.item').click(function(){
  $(this).toggleClass('cross-out');
});

$('.panel').click(function(){
      $(this).next('span').slideToggle();
      $(this).closest('ul').find('span').slideUp();
    });

$(document).ready(main);
