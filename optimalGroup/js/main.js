$('.phone-pick input').mask('(999) 999-99-99');
$('.phone-pick input').focus(function(){
  $('.phone-pick').addClass('active');
}).blur(function(){
  var $this = $(this),
    val = $this.val();
  if(val.length == 0)
  $('.phone-pick').removeClass('active');
});
$('.confirm__nums input').keypress(function(){
  if(this.value.length > 0) {
    return false;
  }
})
$('.confirm__nums input').bind("change keyup input click", function(e) {
  if (this.value.match(/[^0-9]/g)) {
   this.value = this.value.replace(/[^0-9]/g, '');
  }
});

 $(document).ready(function(){
  var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  var mail = $('#mail');
  
  mail.blur(function(){
    if(mail.val() != ''){
      if(mail.val().search(pattern) == 0) {
        $('#valid').text('');
        $('#submit').attr('disabled', false);
        mail.removeClass('error').addClass('ok');
      } else {
        $('#valid').text('Неверные данные. Проверьте, нет ли опечаток');
        $('#submit').attr('disabled', true);
        mail.addClass('error');
      }
    } else {
      $('#valid').text('Поле e-mail не должно быть пустым!');
      mail.addClass('error');
      $('#submit').attr('disabled', true);
    }
  });
 });