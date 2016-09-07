<?php
	if (isset($_POST['name'], $_POST['email'], $_POST['message'])){
		$to = 'txjoe25@gmail.com';
		$subject = 'Message from ' . $_POST['name'] . ' (' . $_POST['email'] . ')';
		$message = $_POST['message'];
		$headers = "From: " . $_POST['email'] . "\r\n";


		$sendmail_msg = "Subject: Email from AWS\r\nFrom: Me <joe@joeagnew.com>\r\nTo: Me <txjoe25@gmail.com>\r\n\r\n$message";
		$temp = tmpfile();
		$tempFilename = stream_get_meta_data($temp)['uri'];
		fwrite($temp, $sendmail_msg);
		fclose($temp);
		$output = shell_exec('cat '.$tempFilename.' | sendmail '.$to)
		print_r($output);
		//$sent = mail($to,$subject,$message,$headers);

		if($sent) {
			echo '<h2 id="message_feedback">Your message has been sent!</h2>';
		}
		else{
			echo '<h2 id="message_feedback">There was a problem sending your message.</h2>';
		}
	} else {
		echo 'form incomplete';
	}
?>
