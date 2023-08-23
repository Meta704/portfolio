//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//onSubmit function
function submitForm(e) {
  e.preventDefault();

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var subjectInput = document.getElementById("subject");
  var messageInput = document.getElementById("message");

  var data = {
    name: nameInput.value,
    email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value
  };

  sendEmail(data, function(success) {
    if (success) {
      nameInput.value = "";
      emailInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
    }
  });
}

function sendEmail(data, callback) {
  const sendGridAPIKey = 'N9b55tn2Rluxr-jsrWJSCA';

  const emailData = {
    personalizations: [
      {
        to: [{ email: "meta704@gmail.com" }],
        subject: data.subject,
      },
    ],
    from: { email: data.email },
    content: [
      {
        type: 'text/plain',
        value: `MESSAGE:\n${data.email}\n\n${data.message}`,
      },
    ],
  };

  fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sendGridAPIKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  })
    .then(response => {
      if (response.ok) {
        callback(true);
      } else {
        console.error("Email sending failed. Status: " + response.status + ", Message: " + response.statusText);
        callback(false);
      }
    })
    .catch(error => {
      console.error("Error sending email: " + error);
      callback(false);
    });
}

// Example usage
const emailData = {
  subject: "Test Email",
  email: "sender@example.com",
  message: "This is a test email.",
};

sendEmail(emailData, success => {
  if (success) {
    console.log("Email sent successfully!");
  } else {
    console.log("Email sending failed.");
  }
});

