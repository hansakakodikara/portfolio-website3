document.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Message Sent Successfully!");
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)


});