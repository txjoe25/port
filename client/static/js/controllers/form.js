$(document).ready(function(){
	var form_holder = $('#form_holder');
	var form_holder_feedback = '';
	$(document).on('click', '#send', function(){
		var name= $('[name=name]').val();
		var email = $('[name=email]').val();
		var subject = $('[name=subject]').val();
		var message = $('[name=message]').val();
		var resume = $('[name=resume]').val('checked');
		var captcha = $('[name=captcha]').prop('checked');

		$.ajax({
			type: "POST",
			url: "/php-bin/process_contact_form.php",
			data: { name: name, email : email, subject: subject, message: message, resume: resume, captcha: captcha}
		}).success(function(html){

			form_holder_feedback = html;
			$(function(){
				$('#success').delay(500).fadeIn('normal', function(){
					$(this).delay(2500).fadeOut();
				});
			});
			$('input[type="text"').val('');
			$('input[type="email"').val('');
			$('textarea[name="message"').val('');
			$('input[type="checkbox"').removeAttr('checked');
			$('div[name="captcha"').removeAttr('checked');
		}).error(function(html){
			console.log(html)
			form_holder_feedback = '<h2 id="message_feedback"> There was an error sending your message.</h2>';
			$(function(){
				$('#fail').delay(500).fadeIn('normal', function(){
					$(this).delay(5500).fadeOut();
				});
			});
			$('input[type="text"').val('');
			$('input[type="email"').val('');
			$('textarea[name="message"').val('');
			$('input[type="checkbox"').removeAttr('checked');
			$('div[name="captcha"').removeAttr('checked');

		});		
	});
});
