const inputUser = document.querySelector("#inputUser");
const inputPassword = document.querySelector("#inputPassword");
const loginButton = document.querySelector(".input-field #loginButton");
const linkToBage = document.querySelector(".input-field .linkToBage");



loginButton.addEventListener("click", function () {
    if (inputUser.value === "Admin" && inputPassword.value === "Admin") {

        linkToBage.href = "../Admin/admin.html"

    } else if (inputUser.value === "" || inputPassword.value === "") {

        linkToBage.href = "../login/login.html"

    } else {

        linkToBage.href = "../user/user.html"
    }
    inputUser.value = "";
});