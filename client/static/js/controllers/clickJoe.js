function clickJoe(){
      var div = $("#Joe");
      var home = $("#home");
      div.animate({width: '-5em', opacity: '0.8'}, "slow");
      div.animate({height: '7em', opacity: '0.4'}, "slow");
      div.animate({width: '-1em', opacity: '0.8'}, "slow");
      div.attr('src',"/static/images/3004240.jpg");
      $("#about").attr('src',"/static/images/ball3.png");
      div.animate({width: '3em', opacity: '0.8'}, "slow");
      div.animate({height: '3em', opacity: '1'}, "slow");
};