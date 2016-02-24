$(document).ready (function(){

  var topIndex = 1;

  //initial duplication and positioning of images
  $( '.sm' ).each(function() {
    var $secondImage = $(this).clone();
    $secondImage.removeClass('sm none');
    $secondImage.addClass('bg hang');
    $secondImage.insertAfter( $(this) )
    $secondImage.css('right', randomPos($secondImage) + 'rem');
  });

  //image click
  $('.hang').click(function() {
    $(this).toggleClass('large');
  });

  $('.hang').hover(function() {
    $(this).css('z-index', topIndex);
    topIndex++;
  });



});

//reposition on resize
$(window).bind('resizeEnd', function(){
    $( '.hang' ).each(function(){
      $(this).css('right', randomPos( $(this) ) + 'rem');
    });
});
//reposition on resize
$(window).resize(function(){
  if(this.resizeTO) clearTimeout(this.resizeTO);
  this.resizeTO = setTimeout(function() {
    $(this).trigger('resizeEnd');
  }, 500);
});


function randomPos(image) {
  var min = 1;
  var max = $('.page').width() - $('.wrap').width() - image.width() - 20;
  return Math.floor((Math.random() * (max - min + 1)) + min) / 20 ;
}
