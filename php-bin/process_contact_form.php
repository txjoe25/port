<?php
	if (isset($_POST['name'], $_POST['email'], $_POST['message'])){
		$to = 'txjoe25@gmail.com';
		$subject = 'Message from ' . $_POST['name'] . ' (' . $_POST['email'] . ')';
		$message = $_POST['message'];
		$headers = "From: " . $_POST['email'] . "\r\n";
		$resume = $_POST['resume'];
		$captcha = $_POST['g-recaptcha'];

		if($_POST['name']=="" || $_POST['email']=="" || $_POST['message']==""){
			header('HTTP/1.1 500 Internal Server Error');
			echo "Error: Your form did not send";
			exit(1);
		}
		if(!$captcha){
			echo "<h2> Please check the captcha form.</h2>"
			exit;
		}
		$response=json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LcKzCkTAAAAAKA95AejR3jDFfKghuyw-pFgBQ6K&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']), true);
        if($response['success'] == false)
        {
          echo '<h2>You are a bot!</h2>';
          exit;
        }
        else
        {
          echo '<h2>Thanks for posting comment.</h2>';
        }
		$sendmail_msg = "Subject: $subject\r\nFrom: Me <joe@joeagnew.com>\r\nTo: Me <txjoe25@gmail.com>\r\n\r\nreply email: ".$_POST['email']."\n\n==============\n$message"."\n==============\nResume request: $resume";
		
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
