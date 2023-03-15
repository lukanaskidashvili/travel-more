function registration()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let howManyDays = document.getElementById("how-many-days").value;

	let letters = /^[a-zA-Z]+$/;
    let numberPattern = /^\d+$/;


    let isRegistrationCorrect = true;

    if (name=='') {
        isRegistrationCorrect = false;
        console.log(alert);
        alert('please enter your name')
    }
    else if(!letters.test(name)) {
        isRegistrationCorrect = false;
        console.log(alert);
        alert('Name field requires only alphabet characters')
    }

    if (email=='') {
        isRegistrationCorrect = false;
        console.log(alert);
        alert('place enter email with @')
    }
    else if(email.search("@") == -1) {  
        isRegistrationCorrect = false;  
        console.log(alert);
        alert('incorrect email')
    }

    if (phone=='') {
        isRegistrationCorrect = false;
        console.log(alert);
        alert('please enter your phone number')
    }
    else if(!numberPattern.test(phone)) {
        isRegistrationCorrect = false;
        console.log(alert);
        alert('Phone field requires only numbers')
    }
    if (howManyDays=='') {
        isRegistrationCorrect = false;
        console.log(alert);
        alert('please enter your days')
    }
    else if(!numberPattern.test(howManyDays)) {
        isRegistrationCorrect = false;
        console.log(alert);
        alert('days field requires only numbers')
    }

    if (isRegistrationCorrect) {
        alert('congratulations')
        window.location.href = "/car rental.html";
    }
}
function clearInputs() 
{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("how-many-days").value="";
}