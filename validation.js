function EmailValid(){
    const emailInput=document.getElementById("emailInput").value;
    const emailletters= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailletters.test(emailInput)){
            window.location.href="success.html";
    }
    else{
        document.getElementById("Message").innerText="Email is not valid."
    }
    if(length.emailInput==0)
    {
        document.getElementById("link").href="#";
    }

}
