$(document).ready(function(){
	var form_holder = $('#form_holder');
	var form_holder_feedback = '';
	$(document).on('click', '#send', function(){
		console.log("***********")
		var name= $('[name=name]').val();
		var email = $('[name=email]').val();
		var subject = $('[name=subject]').val();
		var message = $('[name=message]').val();
		var resume = $('[name=resume').val();

		$.ajax({
			type: "POST",
			url: "/php-bin/process_contact_form.php",
			data: { name: name, email : email, subject: subject, message: message, resume: resume}
		}).success(function(html){
			form_holder_feedback = html;
			$('#send')[0].reset();
		}).error(function(html){
			form_holder_feedback = '<h2 id="message_feedback"> There was an error sending your message.</h2>';
			
		});		
	});
});
