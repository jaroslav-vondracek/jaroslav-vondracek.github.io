// main.js

// Example: Simple form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Perform simple validation (just an example)
      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }
      
      // Do something with the form data (e.g., send via AJAX or fetch)
      // For now, just log it
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      
      alert('Message sent! Thank you for reaching out.');
      
      // Reset the form
      contactForm.reset();
    });
  });
  