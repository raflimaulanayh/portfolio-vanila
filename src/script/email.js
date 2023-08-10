function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
  };

  const serviceID = "service_zjm2yq6";
  const templateID = "template_c4j6nf5";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("subject").value = "";
      console.log(res);
      document.getElementById("popup-open").classList.remove("hidden");
    })
    .catch((err) => {
      alert("Your message failed to sent🙁");
      console.log(err);
    });
}
