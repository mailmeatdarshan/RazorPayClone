document.addEventListener('DOMContentLoaded', function() {
  let login = document.getElementById('loginBtn');
  let signup = document.getElementById('signupBtn');
  let signupnow = document.getElementById('signupnowBtn');
  const menuLinks = document.querySelectorAll('#navMenu a');

  const commonLink = "https://razorpay.com/";

  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        alert("you are redirecting to original website");
        window.location.href = commonLink; 
      });
    });
  }

  if (login) {
    login.addEventListener('click', () => {
        alert("you are redirecting to login page");
        window.location.href = 'https://accounts.razorpay.com/auth/?redirecturl=https%3A%2F%2Fdashboard.razorpay.com&auth_intent=login&x-country-code=IN';
    });
  }

  if (signup) {
    signup.addEventListener('click', () => {
        alert("you are redirecting to signup page");
        window.location.href = 'https://accounts.razorpay.com/auth/?redirecturl=https%3A%2F%2Feasy.razorpay.com&auth_intent=signup&x-country-code=IN'
    });
  }

  if (signupnow) {
    signupnow.addEventListener('click', () => {
        alert("you are redirecting to signup page");
        window.location.href = 'https://accounts.razorpay.com/auth/?redirecturl=https%3A%2F%2Feasy.razorpay.com&auth_intent=signup&x-country-code=IN'
    });
  }
});