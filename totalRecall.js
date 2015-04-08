

$(document).ready(function() {

  var app = {};

  app.score = [];
  app.avatarIndex = 0;
  app.buttonIndex = 0;

  $('.buttons').on('click', '.btn', function() {
    avatarAnimateOut();
  });



  var avatarAnimateIn = function() {
    app.avatarIndex++;
    $('#avatar').attr('src', totalRecall.data[app.avatarIndex].url);
    $('#avatar').toggleClass('bounceInLeft').toggleClass('bounceOutLeft');
  };

  var avatarAnimateOut = function() {
    $('#avatar').toggleClass('bounceInLeft').toggleClass('bounceOutLeft');
    // $('#avatar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', avatarAnimateIn);
  };

  var animateNames = function() {
    var timer = setInterval(function() {
      app.buttonIndex++;

      if (app.buttonIndex === 4) {
        app.buttonIndex = 0;
        clearTimeout(timer);
      }

      $(".buttons button:nth-child(" + app.buttonIndex + ")")
        .toggleClass('bounceInRight')
        .toggleClass('bounceOutRight');
    }, 50);
  };

  var init = function() {
    // $('#avatar').attr('src', totalRecall.data[0].url);
    $('#avatar').addClass('bounceInLeft');

    var timer = setInterval(function() {
      app.buttonIndex++;

      if (app.buttonIndex === 4) {
        app.buttonIndex = 0;
        clearTimeout(timer);
      }

       $(".buttons button:nth-child(" + app.buttonIndex + ")").css("visibility", "visible").addClass('bounceInRight');
    }, 50);
  };

  init();
});
