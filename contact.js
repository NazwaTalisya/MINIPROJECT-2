(function(){
    emailjs.init("v0ux4Un29Mouimcu2");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_qd9vz0w', 'template_4am178a', this)
            .then(function(response) {
                alert('Email sent successfully!');
                document.getElementById('contact-form').reset();
            }, function(error) {
                alert('Email failed to send. Please try again later.');
            });
    });
})();