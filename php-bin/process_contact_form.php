<?php
	if (isset($_POST['name'], $_POST['email'], $_POST['message'])){
		$to = 'txjoe25@gmail.com';
		$subject = 'Message from ' . $_POST['name'] . ' (' . $_POST['email'] . ')';
		$message = $_POST['message'];
		$headers = "From: " . $_POST['email'] . "\r\n";
		$resume = $_POST['resume'];

		if($_POST['name']=="" || $_POST['email']=="" || $_POST['message']==""){
			header('HTTP/1.1 500 Internal Server Error');
			echo "Error: Your form did not send";
			exit(1);
		}
		if($_SERVER["REQUEST_METHOD"] === "POST"){
	        //form submitted

	        //check if other form details are correct

	        //verify captcha
	        $recaptcha_secret = "6LcKzCkTAAAAABrqYpKlMS6C-va0JOtMeFd16LwM";
	        $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
	        $response = json_decode($response, true);
	        if($response["success"] === true)
	        {
	            echo "Logged In Successfully";
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
	        }
	        else
	        {
	            echo "You are a robot";
	        }
	    }
		
	} else {
		echo 'form incomplete';
	}
?>
