$(document).ready(function(){
	var form_holder = $('#form_holder');
	var form_holder_feedback = '';
	$(document).on('click', '#send', function(){
		console.log("***********")
		var name= $('[name=name]').val();
		var email = $('[name=email]').val();
		var subject = $('[name=subject]').val();
		var message = $('[name=message]').val();

		$.ajax({
			type: "POST",
			url: "/client/static/php/process_contact_form.php",
			data: { name: name, email : email, subject: subject, message: message}
		}).success(function(html){
			form_holder_feedback = html;
		}).error(function(html){
			form_holder_feedback = '<h2 id="message_feedback"> There was an error sending your message.</h2>';
		});		
	});
});