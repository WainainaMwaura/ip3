$(document).ready(function () {
  $('#target').submit(function (e) {
    //the submit function and event handler.
    e.preventDefault()
    alert('')
  })
})

$(document).ready(function () {
  $('.card-text').hide();
  $('.card-img-top').click(function () {
      $('#cardidentity'+$(this).attr('target')).toggle(500);
      return false;
  });  
});