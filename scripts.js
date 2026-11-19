/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("form .btn");

    button.addEventListener("click", (event) => {
        event.preventDefault();
        let email = document.querySelector("#email");
        const user = email.value;
        let m = document.querySelector(".message")
        if (user == ""){
            m.innerHTML="<p>Please enter a valid email address.</p>";}
        else{
            let message = "<p>Thank you! Your email address '" + email.value + "' has been added to our mailing list!</p>"
            m.innerHTML = message;
        }       
    })

})