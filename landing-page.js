function changeText() {
  const accountDetails = document.getElementById('TextChangeUse');
  // Changed the functions to use innerHTML instead of textContent 
  // to allow <br> tag for line breaks.
  accountDetails.innerHTML = `
  <b>Account Name: Freky Andrew-Essien Care Foundation<br>
  Bank Name: United Bank for Africa (UBA)<br>
  Account Number (NGN): 1017713590<br>
  Account Number (USD): 3002023691
  `;
}

function showAccountDetails() {
  const accountDetails = document.getElementById('ButtoninlineEventUse');
  accountDetails.innerHTML = `
  <b>Account Name: Freky Andrew-Essien Care Foundation<br>
  Bank Name: United Bank for Africa (UBA)<br>
  Account Number (NGN): 1017713590<br>
  Account Number (USD): 3002023691
  `;
}

// Ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const contactForm = document.getElementById('contactForm');

  // Add an event listener to handle form submission
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const interests = document.getElementById('interests').value;
      const description = document.getElementById('description').value;
      const referral = document.getElementById('referral').value;
      const firstNotice = document.getElementById('firstNotice').value;
      const attendanceY = document.getElementById('yes').value;
      const attendanceN = document.getElementById('no').value;
      const attendanceT = document.getElementById('tentative').value;
     
      // Simple validation
      if (name && email && phone && interests && description && referral && firstNotice && attendanceY && attendanceN && attendanceT ) {
          // In a real application, data is sent to a server
          alert('Form submitted successfully!');
          contactForm.reset(); // Resets the form after submission
      } else {
          alert('Please fill in all required fields.');
      }
  });
});
