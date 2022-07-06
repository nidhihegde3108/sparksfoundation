function sendmail() {
  var params = {
    from_name: document.getElementById("fname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("subject").value,
  }
  emailjs.send("service_y4pd34i","template_dr4f506",params).then(function (res) {
    alert("Thankyou ! for your response");
  })
}
