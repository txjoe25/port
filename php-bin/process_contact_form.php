<?php
	if (isset($_POST['name'], $_POST['email'], $_POST['message'])){
		$to = 'txjoe25@gmail.com';
		$subject = 'Message from ' . $_POST['name'] . ' (' . $_POST['email'] . ')';
		$message = $_POST['message'];
		$headers = "From: " . $_POST['email'] . "\r\n";
		$resume = $_POST['resume'];

		if($_POST['name']=="" || $_POST['email']=="" || $_POST['message']==""){
			header('HTTP/1.1 500 Internal Server Error');
			echo "error message";
			exit(1);
		}
		$sendmail_msg = "Subject: $subject\r\nFrom: Me <joe@joeagnew.com>\r\nTo: Me <txjoe25@gmail.com>\r\n\r\nreply email: ".$_POST['email']."\n\n==============\n$message"."\n==============\n$resume";
		
		$temp = tmpfile();
		$tempFilename = stream_get_meta_data($temp)['uri'];
		fwrite($temp, $sendmail_msg);
		fclose($temp);
		
		file_put_contents($tempFilename, $sendmail_msg);	

		$cmd = 'cat '.$tempFilename.' | sendmail '.$to;
		$output = shell_exec($cmd);

		if($output == "") {
			echo '<h2 id="message_feedback">Your message has been sent!</h2>';
		}
		else{
			header('HTTP/1.1 500 Internal Server Error');
			echo '<h2 id="message_feedback">There was a problem sending your message.</h2>';
		}
	} else {
		echo 'form incomplete';
	}
?>
