$(document).ready(function(){
	var form_holder = $('#form_holder');
	var form_holder_feedback = '';
	console.log("doc.ready")
	$(document).on('click','#Joe', function(){
        var div = $("#Joe");
        var rap = $("#player");

        div.animate({height: '5em', opacity: '0.4'}, "slow");
        div.animate({width: '-5em', opacity: '0.8'}, "slow");
        div.animate({height: '10em', opacity: '0.4'}, "slow");
        div.animate({width: '-10em', opacity: '0.8'}, "slow");
        div.animate({width: '10em', opacity: '0.8'}, "slow");
        div.animate({height: '10em', opacity: '1'}, "slow");
        
        rap.show();
        rap.animate({width: '-5em', opacity: '0.8'}, "slow");
        rap.animate({height: '-5em', opacity: '0.8'}, "slow");

		rap.animate({height: '10em', opacity: '0.4'}, "slow");
  		rap.animate({width: '10em', opacity: '0.8'}, "slow");
  		rap.rotate({ 
		   bind: 
		     { 
		        mouseover : function() { 
		            $(this).rotate({animateTo:180})
		        },
		        mouseout : function() { 
		            $(this).rotate({animateTo:0})
		        }
		     } 
		   
		});
    });

    $(document).on('click','#Joe_Agnew',function(){
	  $( "#Joe" ).css({
	    width: "",
	    height: "",
	    opacity: ""

	  });
	
	  $("#player").hide("Fast")
    })

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
