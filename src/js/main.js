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

var phone = $('#phone');
var password_reg = $('#password');
$('#registration input').blur(function(){
  var nums_confirm = true;
  $('#confirm_num li').each(function(){
    if($(this).find('input').val() == '') {
      nums_confirm = false;
    }
  });
  if(!nums_confirm) {
    $('.confirm__nums').removeClass('valid').addClass('invalid');
  } else {
    $('.confirm__nums').removeClass('invalid').addClass('valid');
  }
  if(phone.val() != '' && password_reg.val() != '' && nums_confirm){
    $('#submit-reg').attr('disabled', false);
  } else {
    $('#submit-reg').attr('disabled', true);
  }
});


var phone2 = $('#phone2');
var password2 = $('#password2');
password2.blur(function(){
  if(phone2.val() != '' && password2.val() != ''){
    $('#submit1').attr('disabled', false);
  } else {
    $('#submit1').attr('disabled', true);
  }
});

var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
var mail = $('#mail');
var password3 = $('#password3');

password3.blur(function(){
  if(mail.val() != '' && password3.val() != ''){
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

var phone4 = $('#phone4');
phone4.blur(function(){
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

var pass4 = $('#password4');
var pass5 = $('#password5');
$('#new-pass input').blur(function(){
  if(pass4.val() != '' && pass5.val() != '' && pass4.val() == pass5.val()){
    $('#save_pass').attr('disabled', false);
    $('#valid-pass').text('');  
  } else {
    $('#save_pass').attr('disabled', true);
    $('#valid-pass').text('Пароли должны совпадать');  
  }
});