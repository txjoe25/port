function closeBall(){
$( "#ball" ).hover(
  function() {
  	$(this).css({"transform": "rotate(180deg)"})
    $( this ).click(function(){
    	$( "#map-canvas" ).hide();
      $("#player1").hide();
    	$( "#ball" ).hide();
    	$( "#home" ).show();
    });
  }, function() {
  	$(this).css({"transform": "rotate(0deg)"})
  }
);
	}; 