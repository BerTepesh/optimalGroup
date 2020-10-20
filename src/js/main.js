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