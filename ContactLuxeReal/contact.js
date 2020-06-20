function initMap() {
    var options = {
      zoom: 15,
      center: { lat: 6.4478, lng: 3.4723 },
    };
  
    var lekki = { lat: 6.4478, lng: 3.4723 };
  
    var map = new google.maps.Map(document.querySelector("#map"), options);
  
    var marker = new google.maps.Marker({ position: lekki, map: map });
  }

  (function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
    })();