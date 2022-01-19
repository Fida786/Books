// Accordion 
// FAQ section 
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
});



// Form Validation
// Contact section

// Get data
const email = document.querySelector("#email");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error")

// Validate data
function validateForm() {
    
    clearMessages();
    let errorFlag = false;

    if (!emailIsValid(email.value)) {
        errorNodes[0].innerText = "Please enter a correct email address.";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "Success!"
    }
}

// Clear error / success message
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    email.classList.remove("error-border");
}

// Check if email is valid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}



// Scroll to top
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function () {
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

// Smooth scrolling
$(function () {
    $('a[href*="#"]:not([data-toggle="tab"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});