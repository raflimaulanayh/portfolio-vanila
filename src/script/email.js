function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
  };

  const serviceID = "service_zjm2yq6";
  const templateID = "template_c4j6nf5";

  if (params.email === "") {
    alert("Your message failed to sent🙁");
  } else {
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("btn-submit").innerHTML = "Submitting...";
        setTimeout(() => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("popup-open").classList.remove("hidden");
          document.getElementById("btn-submit").innerHTML = "Submitted";
          console.log(res);
        }, 500);
      })
      .catch((err) => {
        alert("Your message failed to sent🙁");
        console.log(err);
      });
  }
}
