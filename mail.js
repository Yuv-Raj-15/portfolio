let btn = document.getElementById("sbmt");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    var templateParams = {
        name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        notes: document.getElementById("msg").value,
    };
    emailjs.send('service_ru40mfk', 'template_4lznjbh', templateParams)
    .then(function(){
        btn.style.backgroundColor="#7bf1a8";
        btn.innerText="Request Sent";
        btn.disabled=true;
    })
    .catch(function(){
        btn.style.backgroundColor="red";
        btn.innerText="Unable To Send";
    })
    
});