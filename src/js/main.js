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

var phone = $('#phone4');
phone.blur(function(){
  if(phone.val() != ''){
    $('#submit2').attr('disabled', false);
  } else {
    $('#submit2').attr('disabled', true);
  }
});

$('#recover-phone-done').on('show.bs.modal', function (event) {
  var phone = $('#phone4')
  $('#recover-num').text(phone.val());
});

var mail2 = $('#mail2');
mail2.blur(function(){
  if(mail2.val() != ''){
    if(mail2.val().search(pattern) == 0) {
      $('#valid2').text('');
      $('#submit3').attr('disabled', false);
      mail2.removeClass('error').addClass('ok');
    } else {
      $('#valid2').text('Неверные данные. Проверьте, нет ли опечаток');
      $('#submit3').attr('disabled', true);
      mail2.addClass('error');
    }
  } else {
    $('#valid2').text('Поле e-mail не должно быть пустым!');
    mail2.addClass('error');
    $('#submit3').attr('disabled', true);
  }
});

$('#recover-mail-done').on('show.bs.modal', function (event) {
  var mail = $('#mail2');
  $('#recover-mail-text').text(mail.val());
});