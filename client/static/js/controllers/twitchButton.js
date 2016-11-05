function twitchButton(){
	$("#home").hide();
	$("#player1").show();
	$("#ball").show();
	closeBall();
	var options = {
		
	width: 1500,
	height: 3000,
	channel: "txjoe25",
	//video: "{VIDEO_ID}"
	};

	var player = new Twitch.Player("{PLAYER_DIV_ID}", options);
	player.setVolume(0.5);
}

