// ============================================
// FORM VALIDATION
// ============================================

function formValidator() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    if (isNotEmpty(name, "Please enter your name")) {
        if (isNotEmpty(subject, "Please enter a subject")) {
            if (lengthRestriction(message, 10, 500)) {
                if (emailValidator()) {
                    return true;
                }
            }
        }
    }

    return false;
}

function isNotEmpty(elem, helperMsg) {
    if (elem.value.length === 0) {
        alert(helperMsg);
        elem.focus();
        return false;
    }
    return true;
}

function lengthRestriction(elem, min, max) {
    if (elem.value.length >= min && elem.value.length <= max) {
        return true;
    } else {
        alert("Please enter between " + min + " and " + max + " characters");
        elem.focus();
        return false;
    }
}

function emailValidator() {
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var email_name = document.getElementById("email");
    var email_value = email_name.value;

    if (!email_value.match(emailExp) || email_value.length === 0) {
        document.getElementById('email_err').innerHTML = 'This is not a valid email format.';
        document.getElementById('email_err').style.color = "#FF0000";
        email_name.focus();
        return false;
    } else {
        document.getElementById('email_err').innerHTML = 'Valid email format';
        document.getElementById('email_err').style.color = "#00AF33";
        return true;
    }
}
