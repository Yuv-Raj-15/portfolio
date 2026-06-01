let btn = document.getElementById("sbmt");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let x=document.getElementById("name").value;
    let y=document.getElementById("email").value;
    let z=document.getElementById("msg").value;
    var templateParams = {
        name: x,
        Email: y,
        notes: z,
    };
    if(x==""||y==""||z=="") btn.innerText="Incomplete Info";
    else{
    emailjs.send('service_ru40mfk', 'template_4lznjbh', templateParams)
    .then(function(){
        btn.style.backgroundColor="#7bf1a8";
        btn.innerText="Request Sent";
        btn.disabled=true;
    })
    .catch(function(){
        btn.style.backgroundColor="red";
        btn.innerText="Unable To Send";
    })}
    
});