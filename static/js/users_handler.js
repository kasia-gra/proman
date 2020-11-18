import {dataHandler} from "./data_handler.js";
import {htmlCreator} from "./html_creator.js"
import {util} from "./util.js";
import {dom}from "./dom.js";


export let usersHandler = {

    addListenerToRegister: function () {
        const saveButton = document.querySelector('#save-user');
        saveButton.addEventListener('click', usersHandler.getUserRegistrationDataFromModal);
    },

    addListenerToLogin: function () {
        const saveButton = document.querySelector('#login-user');
        saveButton.addEventListener('click', usersHandler.getUserLoginDataFromModal)
    },

    getUserRegistrationDataFromModal: function (e) {
        e.preventDefault()
        const newUserData = {}
        let nameInput = document.querySelector('#user-name');
        let emailInput = document.querySelector('#user-email');
        let passwordInput = document.querySelector('#user-password');

        if (validateInput(nameInput) && validateInputEmail(emailInput) && validateInput(passwordInput)) {
            newUserData['name'] = nameInput.value;
            newUserData['email'] = emailInput.value;
            newUserData['password'] = passwordInput.value;
            dataHandler.createNewUser(newUserData, function (message) {
                nameInput.value = '';
                if (message.includes('registered')) {
                    $('#modalRegisterForm').modal('toggle')
                }
                alert(message)
            })
        } else {
            wrongInputAlert(emailInput, passwordInput)
        }
    },


    getUserLoginDataFromModal: function (e) {
        e.preventDefault()
        const loginData = {};
        let emailInput = document.querySelector('#log-user-email');
        let passwordInput = document.querySelector('#log-user-password');
        if (validateInputEmail(emailInput) && validateInput(passwordInput)) {
            loginData['email'] = emailInput.value;
            loginData['password'] = passwordInput.value;
            dataHandler.loginUser(loginData, function (userData) {
                if (userData.message.includes('logged')) {
                    $('#modalLoginForm').modal('toggle')
                    toggleUserMenu(userData.user);
                    localStorage.setItem("user_id", `${userData["user"].id}`);
                    localStorage.setItem("user_name", `${userData["user"].name}`);
                    const userId = parseInt(localStorage.getItem("user_id"));
                    util.showButtonsForLoggedInUser();
                    util.clearAllBoards();
                    dom.loadBoards(userId);
                }
                alert(userData.message)
                passwordInput.value = ''
            });
        } else {
            wrongInputAlert(emailInput, passwordInput)
        }
    },


    logoutUser: function () {
        dataHandler.logoutUser(function (message) {
            alert(message);
            toggleUserMenu()
            localStorage.removeItem("user_id")
            localStorage.removeItem("user_id");
            util.hideButtonsIfLoggedOut();
            util.clearAllBoards();
            dom.loadBoards();
        })
    },

    addListenerToLogoutBtn: function () {
        const logoutButton = document.querySelector('#logout');
        if (logoutButton) {
            logoutButton.addEventListener('click', usersHandler.logoutUser)
        }
    }

}

//---------------------------------

function toggleUserMenu(user) {
    if (user) {
        htmlCreator.addUserMenu(user);
        usersHandler.addListenerToLogoutBtn();
    }
    else {
        htmlCreator.deleteUserMenu()
    }
}

function validateInputEmail(inputEmail) {
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(inputEmail.value);
}

function validateInput(inputName) {
    return inputName.value.length >= 3;
}

function wrongInputAlert(emailInput, passwordInput) {
    alert('Wrong input! Use letters and numbers only. Minimum 3 characters')
    emailInput.value = '';
    passwordInput.value = '';
}
