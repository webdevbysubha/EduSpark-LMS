const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (res.ok) {
      status.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      status.textContent = "❌ Failed to send message. Try again.";
    }
  } catch (error) {
    status.textContent = "❌ Error sending message.";
  }
});


