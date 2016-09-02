<?php
	if (isset($_POST['name'], $_POST['email'], $_POST['message'])){
		$to = 'txjoe25@gmail.com';
		$subject = 'Message from ' . $_POST['name'] . ' (' . $_POST['email'] . ')';
		$message = $_POST['message'];
		$headers = "From: " . $_POST['email'] . "\r\n";

		$sent = mail($to,$subject,$message,$headers);

		if($sent) {
			echo '<h2 id="message_feedback">Your message has been sent!</h2>';
		}
		else{
			echo '<h2 id="message_feedback">There was a problem sending your message.</h2>';
		}
	}
?>