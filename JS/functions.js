//newsletter validator

document.getElementById("emailSubs").addEventListener("input", function() {
    const email = this.value;
    const newsletterValidation = document.getElementById("newsletter__validation");
    if (email.includes("@" && ".")) {
        newsletterValidation.innerText = "Correo valido";
        newsletterValidation.classList.add("newsletter__valid");
        newsletterValidation.classList.remove("newsletter__not-valid");
    } else {
        newsletterValidation.innerText = "Introduce un correo valido";
        newsletterValidation.classList.add("newsletter__not-valid");
        newsletterValidation.classList.remove("newsletter__valid");
    }
});

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    const email = document.getElementById("emailSubs").value;
    const name = document.getElementById("nameSubs").value;
    const newsletterValidation = document.getElementById("newsletter__validation");
    if (email.includes("@" && ".") && name.trim() !== "") {
        newsletterValidation.innerText = "Gracias por subscribirte!!";
        newsletterValidation.classList.add("newsletter__valid");
        newsletterValidation.classList.remove("newsletter__not-valid");
    } else {
        newsletterValidation.innerText = "Introduce un correo valido y un nombre";
        newsletterValidation.classList.add("newsletter__not-valid");
        newsletterValidation.classList.remove("newsletter__valid");
    }
});