import {dataHandler} from "./data_handler.js";


export let usersHandler = {

    addListenerToRegister : function() {
        const saveButton = document.querySelector('#save-user');
        saveButton.addEventListener('click', usersHandler.getUserRegistrationDataFromModal);
    },

     addListenerToLogin : function() {
        const saveButton = document.querySelector('#login-user');
        saveButton.addEventListener('click', usersHandler.getUserLoginDataFromModal)
    },

    getUserRegistrationDataFromModal : function(e) {
        e.preventDefault()
        const newUserData = {}
        let nameInput = document.querySelector('#user-name');
        let emailInput = document.querySelector('#user-email');
        let passwordInput = document.querySelector('#user-password');

        if (validateInput(nameInput) && validateInputEmail(emailInput) && validateInput(passwordInput)) {
            newUserData['name'] = nameInput.value;
            newUserData['email'] = emailInput.value;
            newUserData['password'] = passwordInput.value;
            dataHandler.createNewUser(newUserData, function(message){
                nameInput.value = '';
                if (message.includes('registered')) { $('#modalRegisterForm').modal('toggle') }
                alert(message)
            })
        }
        else { alert('Wrong input! Use letters and numbers only. Minimum 3 characters') }
        emailInput.value = '';
        passwordInput.value = '';
    },


    getUserLoginDataFromModal : function(e) {
        e.preventDefault()
        const loginData ={};
        let emailInput = document.querySelector('#log-user-email');
        let passwordInput = document.querySelector('#log-user-password');
        if (validateInputEmail(emailInput) && validateInput(passwordInput)) {
            loginData['email'] = emailInput.value;
            loginData['password'] = passwordInput.value;
            dataHandler.loginUser(loginData, function(userData) {
                 if (userData.message.includes('logged')) { $('#modalLoginForm').modal('toggle') }
                alert(userData.message)
                toggleUserMenu(userData.user)
            });
        }
        else { alert('Wrong input! Use letters and numbers only. Minimum 3 characters') }
        emailInput.value = '';
        passwordInput.value = '';
    },


    logoutUser : function() {
        dataHandler.logoutUser(function(message) {
        alert(message);
        toggleUserMenu()
        })
    },

    addListenerToLogoutBtn : function() {
        const logoutButton = document.querySelector('#logout');
        if (logoutButton) {
        logoutButton.addEventListener('click', usersHandler.logoutUser)
        }
    }

}

//---------------------------------

function toggleUserMenu(user) {
    user ? addUserMenu(user) : deleteUserMenu()

}

function validateInputEmail(inputEmail) {
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(inputEmail.value);
}

function validateInput(inputName) {
    return inputName.value.length >= 3;
}




function addUserMenu(user) {
    let navbar =  document.querySelector(".navbar-right")
    navbar.innerHTML = `
        <li>
            <a class="nav-link disabled">Logged in as ${user.name}</a>
        </li>
        <li>
            <a class="nav-link" id="logout" href="#"><span class="link fas fa-sign-out-alt"></span> Log out</a>
        </li>
        `;
    usersHandler.addListenerToLogoutBtn();
}

function deleteUserMenu() {
    let navbar =  document.querySelector(".navbar-right")
    navbar.innerHTML = `
        <li>
            <a class="nav-link" id="register" data-toggle="modal" data-target="#modalRegisterForm"
                href="#"><span class="link fas fa-user-plus"></span> Sign in</a>
        </li>
        <li>
            <a class="nav-link" id="login" data-toggle="modal" data-target="#modalLoginForm"
                href="#"><span class="link fas fa-sign-in-alt"></span> Log in</a>
        </li>
    `;
}