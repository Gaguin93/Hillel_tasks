function validateForm() {
    const fields = {
        name: {
            value: document.getElementById("name").value,
            regex: /^[A-Za-z\s]+$/,
            errorMessage: "Please enter a valid name.",
        },
        message: {
            value: document.getElementById("message").value,
            regex: /.{5,}/,
            errorMessage: "Message must be at least 5 characters.",
        },
        phone: {
            value: document.getElementById("phone").value,
            regex: /^\+380\d{9}$/,
            errorMessage: "Phone number must start with +380 and have 12 digits.",
        },
        email: {
            value: document.getElementById("email").value,
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: "Please enter a valid email.",
        },
    };

    let isValid = true;
    
    for (const [field, { value, regex, errorMessage }] of Object.entries(fields)) {
        const errorElement = document.getElementById(`${field}Error`);
        errorElement.innerText = "";
        
        if (!regex.test(value)) {
            errorElement.innerText = errorMessage;
            isValid = false;
        }
    }

    if (isValid) {
        console.log("Name:", fields.name.value);
        console.log("Message:", fields.message.value);
        console.log("Phone Number:", fields.phone.value);
        console.log("Email:", fields.email.value);
        alert("Message sent!");
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});
