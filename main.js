let email = document.getElementById('email');
let password = document.getElementById('password');
let fullName = document.getElementById('fullName');
let country = document.getElementById('country');
let birthdate = document.getElementById('birthdate');

let registerButton = document.getElementById('registerButton');

let users = [];

function initArray(){
    if(localStorage.user != null){
        users = JSON.parse(localStorage.user);
    }else if(users.length!=0){
        localStorage.user = JSON.stringify(users);
    }
}

function updateStorage(){
    localStorage.user = JSON.stringify(users);
}

function createNewAccount(){
    let stored = false;
    for(let user of users){
        if(user.email===email.value){
            stored = true;
            email.value = '';
            password.value = '';
            fullName.value = '';
            country.value = '';
            birthdate.value = '';
            break;
        }
    }
    if(!stored){
        let newUser={email: `${email.value}`, password: `${password.value}`, 
        fullName: `${fullName.value}`, country: `${country.value}`, birthdate: `${birthdate.value}`};
        users.push(newUser);
        updateStorage();
        alert('success');
    }else{
        alert('This account was created earlier');
    }
}
registerButton.onclick = createNewAccount;