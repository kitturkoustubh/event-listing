$(document).ready(function() {
  $('#signup-form').on('submit', function(event) {
    event.preventDefault();
    let form = $(this)[0];
    let isValid = form.checkValidity();
    $(this).addClass('was-validated');
    
    if (isValid) {
      // All fields are valid, redirect to the Sign In page
      window.location.href = 'signin.html';
    }
    // If not valid, Bootstrap's validation will show the error messages
  });

  $('#signin-link').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'signin.html';
  });
});

$(document).ready(function() {
  // Sign Up form validation
  $('#signup-form').on('submit', function(event) {
    event.preventDefault();
    let form = $(this)[0];
    let isValid = form.checkValidity();
    $(this).addClass('was-validated');
    
    if (isValid) {
      // All fields are valid, redirect to the Sign In page
      window.location.href = 'signin.html';
    }
    // If not valid, Bootstrap's validation will show the error messages
  });

  $('#signin-link').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'signin.html';
  });

  // Sign In form validation
  $('#signin-form').on('submit', function(event) {
    event.preventDefault();
    let form = $(this)[0];
    let isValid = form.checkValidity();
    $(this).addClass('was-validated');
    
    if (isValid) {
      // All fields are valid, redirect to the Event Details page
      window.location.href = 'event-details.html';
    }
    // If not valid, Bootstrap's validation will show the error messages
  });

  $('#signup-link').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'signup.html';
  });

  $(document).ready(function() {
  // Sign Up form validation
  $('#signup-form').on('submit', function(event) {
    event.preventDefault();
    let form = $(this)[0];
    let isValid = form.checkValidity();
    $(this).addClass('was-validated');
    
    if (isValid) {
      window.location.href = 'signin.html';
    }
  });

  $('#signin-link').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'signin.html';
  });

  // Sign In form validation
  $('#signin-form').on('submit', function(event) {
    event.preventDefault();
    let form = $(this)[0];
    let isValid = form.checkValidity();
    $(this).addClass('was-validated');
    
    if (isValid) {
      window.location.href = 'event-details.html';
    }
  });

  $('#signup-link').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'signup.html';
  });

  // Create Event form validation and submission
  $('#create-event-form').on('submit', function(event) {
    event.preventDefault();
    let form = $(this)[0];
    let isValid = form.checkValidity();
    $(this).addClass('was-validated');
    
    if (isValid) {
      let newEvent = {
        name: $('#event-name').val(),
        venue: $('#venue').val(),
        date: $('#date').val(),
        time: $('#time').val(),
        details: $('#details').val(),
        website: $('#website').val(),
        eligibility: $('#eligibility').val(),
        host: $('#host-name').val()
      };

      // Store event in localStorage
      let events = JSON.parse(localStorage.getItem('events')) || [];
      events.push(newEvent);
      localStorage.setItem('events', JSON.stringify(events));

      // Redirect to event list page
      window.location.href = 'event-list.html';
    }
  });

  // Display events on event list page
  if (window.location.pathname.endsWith('event-list.html')) {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.forEach(function(event, index) {
      $('#events-container').append(`
        <div class="col-md-4 mb-4">
          <div class="card event-card" data-id="${index}">
            <img src="dummy-event-image.jpg" class="card-img-top" alt="Event Image">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text"><strong>Date:</strong> ${event.date}</p>
              <p class="card-text"><strong>Time:</strong> ${event.time}</p>
              <p class="card-text"><strong>Location:</strong> ${event.venue}</p>
              <a href="event-details.html" class="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>
      `);
    });
  }
});
});

$(document).ready(function() {
  // Sign Up form validation
  $('#signup-form').on('submit', function(event) {
    event.preventDefault();
    let form = $(this)[0];
    let isValid = form.checkValidity();
    $(this).addClass('was-validated');
    
    if (isValid) {
      window.location.href = 'signin.html';
    }
  });

  $('#signin-link').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'signin.html';
  });

  // Sign In form validation
  $('#signin-form').on('submit', function(event) {
    event.preventDefault();
    let form = $(this)[0];
    let isValid = form.checkValidity();
    $(this).addClass('was-validated');
    
    if (isValid) {
      window.location.href = 'event-details.html';
    }
  });

  $('#signup-link').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'signup.html';
  });

  // Create Event form validation and submission
  $('#create-event-form').on('submit', function(event) {
    event.preventDefault();
    let form = $(this)[0];
    let isValid = form.checkValidity();
    $(this).addClass('was-validated');
    
    if (isValid) {
      let newEvent = {
        name: $('#event-name').val(),
        venue: $('#venue').val(),
        date: $('#date').val(),
        time: $('#time').val(),
        details: $('#details').val(),
        website: $('#website').val(),
        eligibility: $('#eligibility').val(),
        host: $('#host-name').val()
      };

      // Store event in localStorage
      let events = JSON.parse(localStorage.getItem('events')) || [];
      events.push(newEvent);
      localStorage.setItem('events', JSON.stringify(events));

      // Redirect to event list page
      window.location.href = 'event-list.html';
    }
  });

  // Display events on event list page
  if (window.location.pathname.endsWith('event-list.html')) {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.forEach(function(event, index) {
      $('#events-container').append(`
        <div class="col-md-4 mb-4">
          <div class="card event-card" data-id="${index}">
            <img src="dummy-event-image.jpg" class="card-img-top" alt="Event Image">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text"><strong>Date:</strong> ${event.date}</p>
              <p class="card-text"><strong>Time:</strong> ${event.time}</p>
              <p class="card-text"><strong>Location:</strong> ${event.venue}</p>
              <a href="event-details.html?eventId=${index}" class="btn btn-primary view-details-btn">View Details</a>
            </div>
          </div>
        </div>
      `);
    });
  }

  // Load event details on event details page
  if (window.location.pathname.endsWith('event-details.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('eventId');
    let events = JSON.parse(localStorage.getItem('events')) || [];
    let event = events[eventId];

    if (event) {
      $('#event-image').attr('src', 'dummy-event-image.jpg'); // Update with actual image source
      $('#event-name').text(event.name);
      $('#event-venue').text(event.venue);
      $('#event-date').text(event.date);
      $('#event-time').text(event.time);
      $('#event-details').text(event.details);
      $('#event-website').attr('href', event.website).text(event.website);
      $('#event-eligibility').text(event.eligibility);
      $('#event-host').text(event.host);
    }
  }
});

// Example functions for edit and delete actions
function editEvent() {
  // Implement your edit logic here, e.g., open a modal or navigate to an edit page
  console.log('Edit event clicked');
}

function deleteEvent() {
  // Implement your delete logic here, e.g., show confirmation dialog and delete the event
  console.log('Delete event clicked');
}

