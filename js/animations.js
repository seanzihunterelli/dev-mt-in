$(document).ready(function(){
  $('#view-friends').on('click',function(){
    $('main').css('visibility','hidden');
    $('.friends-view').css('visibility','visible');
    $('footer a').css('text-decoration', 'none');
    $('#view-friends').css('text-decoration','underline');
  });
  $('#find-friends').on('click',function(){
    $('main').css('visibility','hidden');
    $('.search-friends').css('visibility','visible');
    $('footer a').css('text-decoration', 'none');
    $('#find-friends')
      .css('text-decoration','underline')
      .css('');
  });
  $('#update-profile').on('click',function(){
    $('main').css('visibility','hidden');
    $('.update-profile').css('visibility','visible');
    $('footer a').css('text-decoration', 'none');
    $('#update-profile').css('text-decoration','underline');
  });
    $('.save-profile').on('click', function(){
      $('main').css('visibility','hidden');
      $('.landing-page').css('visibility','visible');
  });


});
