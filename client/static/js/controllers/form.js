$(document).ready(function(){
	console.log("doc.ready");
	var form_holder = $('#form_holder');
	var form_holder_feedback = '';
	$(document).on('click','#weatherb', function(){
		weatherButton();
	});
	$(document).on('click','#Joe', function(){
        clickJoe();
	});
  	$(document).on('click','#twitch',function(){
  		twitchButton();
	}); 
		function weather(){
		var aerisMapBuilder = new aeris.interactive.MapAppBuilder({
        apiId: 'wgE96YE3scTQLKjnqiMsv',
        apiSecret: 'lr5YAfQRoB9KWh7gX3wd3SZMcOj4ACWLNIqgaSF1',
        el: '#map-canvas'
    });
		aerisMapBuilder.start();
		$(document).bind("projectLoadComplete", weather);
	}
	weather();
	$(document).on('click', '#send', function(){
		var name= $('[name=name]').val();
		var email = $('[name=email]').val();
		var subject = $('[name=subject]').val();
		var message = $('[name=message]').val();
		var resume = $('[name=resume]').prop('checked');
		$.ajax({
			type: "POST",
			url: "/php-bin/process_contact_form.php",
			data: { name: name, email : email, subject: subject, message: message, resume: resume}
		}).success(function(html){

			form_holder_feedback = html;
			$(function(){
				$('#success').delay(500).fadeIn('normal', function(){
					$(this).delay(2500).fadeOut();
				});
			});
			$('input[type="text"]').val('');
			$('input[type="email"]').val('');
			$('textarea[name="message"]').val('');
			$('input[type="checkbox"]').removeAttr('checked');
		}).error(function(html){
			console.log(html)
			form_holder_feedback = '<h2 id="message_feedback"> There was an error sending your message.</h2>';
			$(function(){
				$('#fail').delay(500).fadeIn('normal', function(){
					$(this).delay(5500).fadeOut();
				});
			});
			$('input[type="text"]').val('');
			$('input[type="email"]').val('');
			$('textarea[name="message"]').val('');
			$('input[type="checkbox"]').removeAttr('checked');
		});		
	});
	 
});