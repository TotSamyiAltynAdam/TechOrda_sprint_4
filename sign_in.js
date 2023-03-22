let email = document.getElementById('email');
let password = document.getElementById('password');

let signIn = document.getElementById('signIn');

let login = document.getElementsByClassName('login')[0];
let register = document.getElementsByClassName('register')[0];

let users = [];

function initArray(){
    if(localStorage != null){
        users = JSON.parse(localStorage.user);
    }
}

function checkForLogIn(){
    let authorization = false;
    for(let user of users){
        if(user.email === email.value && user.password == password.value){
            login.innerHTML = user.fullName;
            register.innerHTML = '<a href="main.html">Logout</a>';

            authorization = true;
            loginPage.remove();

            let successDiv = document.createElement('div');
            successDiv.className = 'success';

            let successMessage = document.createElement('div');
            successMessage.className = 'successMessage';
            successMessage.innerHTML = `Welcome ${user.fullName}`;

            let successEmail = document.createElement('div');
            successEmail.className = 'data';
            successEmail.innerHTML = `EMAIL:<br><div>${user.email}</div>`;

            let successFullName = document.createElement('div');
            successFullName.className = 'data';
            successFullName.innerHTML = `FULL NAME:<br><div>${user.fullName}</div>`;

            let successCountry = document.createElement('div');
            successCountry.className = 'data';
            successCountry.innerHTML = `COUNTRY:<br><div>${user.country}</div>`;

            let successBirthDate = document.createElement('div');
            successBirthDate.className = 'data';
            successBirthDate.innerHTML = `BIRTHDATE:<br><div>${user.birthdate}</div>`;

            successDiv.append(successMessage);
            successDiv.append(successEmail);
            successDiv.append(successFullName);
            successDiv.append(successCountry);
            successDiv.append(successBirthDate);
            document.body.append(successDiv);
            break;
        }
    }
    if(!authorization) alert("Wrong input");
}

signIn.onclick = checkForLogIn;