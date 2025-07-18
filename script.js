function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Initialize EmailJS (REPLACE with your actual public key)
emailjs.init("IEZqVK03jMUIwj7_O");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const messageEl = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_pef6tab", "template_5v1lwb4", this).then(
      function () {
        messageEl.style.color = "green";
        messageEl.textContent = "Message sent successfully!";
        form.reset();
        setTimeout(() => {
          messageEl.textContent = "";
        }, 4000); // Clear message after 5 seconds
      },
      function (error) {
        messageEl.style.color = "red";
        messageEl.textContent = "Failed to send message: " + error.text;
      }
    );
  });
});
