class LoginPage {
  get username() {
    return $("input[name = 'username']");
  }

  get password() {
    return $("//input[@type='password']");
  }

  get submitButton() {
    return $("#signInBtn");
  }

  Login(username, password) {
    this.username.setValue(username);
    this.password.setValue(password);
    this.submitButton.click();
  }
}

module.exports = new LoginPage();
