/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */
function getUsernameField() {
  if (window.location.href.toLowerCase().indexOf("www.instagram.com") !== -1) {
    return $("input[name='username']");
  } else if (window.location.href.toLowerCase().indexOf("www.bankofamerica.com") !== -1) {
    return $("#onlineId1");
  } else if (window.location.href.toLowerCase().indexOf("secure.bankofamerica.com") !== -1) {
    return $("#enterID-input");
  } else if (window.location.href.toLowerCase().indexOf("online.citi.com") !== -1) {
    return $("#usernameMasked");
  } else if (window.location.href.toLowerCase().indexOf("login.yahoo.com") !== -1) {
    return $("#login-username");
  }

  return $("#email");
}

function getPasswordField() {
  if (window.location.href.toLowerCase().indexOf("www.paypal.com") !== -1) {
    return $("#password");
  } else if (window.location.href.toLowerCase().indexOf("www.instagram.com") !== -1) {
    return $("input[name='password']");
  } else if (window.location.href.toLowerCase().indexOf("www.bankofamerica.com") !== -1) {
    return $("#passcode1");
  } else if (window.location.href.toLowerCase().indexOf("secure.bankofamerica.com") !== -1) {
    return $("#tlpvt-passcode-input")
  } else if (window.location.href.toLowerCase().indexOf("online.citi.com") !== -1) {
    return $("#password");
  } else if (window.location.href.toLowerCase().indexOf("login.yahoo.com") !== -1) {
    return $("#login-passwd");
  }

  return $("#pass");
}

function getFormField() {
  if (window.location.href.toLowerCase().indexOf("www.bankofamerica.com") !== -1) {
    return $("div.login-inputs")
  }

  return getUsernameField().closest("form");
}

function getSubmitButton() {
  if (window.location.href.toLowerCase().indexOf("www.paypal.com") !== -1) {
    return $("#btnLogin");
  } else if (window.location.href.toLowerCase().indexOf("www.instagram.com") !== -1) {
    return $("button._ah57t._84y62._i46jh._rmr7s");
  } else if (window.location.href.toLowerCase().indexOf("www.bankofamerica.com") !== -1) {
    return $("#hp-sign-in-btn");
  } else if (window.location.href.toLowerCase().indexOf("secure.bankofamerica.com") !== -1) {
    return $("a.btn-bofa.btn-bofa-blue.btn-bofa-small.btn-bofa-noRight");
  } else if (window.location.href.toLowerCase().indexOf("online.citi.com") !== -1) {
    return $("#signInBtn");
  } else if (window.location.href.toLowerCase().indexOf("login.yahoo.com") !== -1) {
    return $("#login-signin");
  }

  return $("#loginbutton");
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  let usernameField = getUsernameField();
  let passwordField = getPasswordField();

  usernameField.val(username);
  passwordField.val(password);

  // if (window.location.href.toLowerCase().indexOf("online.citi.com") !== -1) {
  //   console.log("attempting to press key");
  //   var e = jQuery.Event("keydown");
  //   e.which = 65;
  //   e.keyCode = 65;
  //   usernameField.trigger(e);
  // }

  setTimeout(() => {
  	getSubmitButton().click();
  }, 1000)

  if (window.location.href.toLowerCase().indexOf("login.yahoo.com") !== -1) {
    var totalTimePassed = 0;

    var submitYahooPassword = () => {
      if (getSubmitButton().text() === "Next" && totalTimePassed < 10000) {
        setTimeout(submitYahooPassword, 500);
        totalTimePassed += 500
      } else {
        getSubmitButton().click();
      }
    };

    setTimeout(() => {
      submitYahooPassword();
    })
  }
};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  // console.log("form field", getFormField());
  // console.log("submit button", getSubmitButton());
  // console.log("username", getUsernameField());
  // console.log("password", getPasswordField());

  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField()
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    username: getUsernameField().val(),
    password: getPasswordField().val()
  };

};
