The challenge is to be able to do the following actions in a given website:
 * Trigger form submit with a pair of credentials.
 * Find the form elements in the dom.
 * Obtain the values from the login elements in the dom.

# Load The Extension

1. Go to 'chrome://extensions' in your chrome browser.
2. In the upper right corner check 'Developer mode'
3. In the menu that appeared select 'Load unpacked extension...'
4. Select this folder.

In order to reload your changes:
1. Go to 'chrome://extensions' in your chrome browser.
2. Click 'Update extensions now', 'Ctrl+r', or 'Cmd+r'.


# The Challenge

In this folder there is a file called challenge.js with three functions that you will need to override.
Currently challenge.js has sample code that shows a proof of concept for https://facebook.com

You can test the functions by clicking the UnifyID icon in the top right corner of Google Chrome and select the function
to test from the menu.

Here is what is expected when selecting each option from the menu:
 * Detect Fields: This will call your function `detectFormFields` and put a border around the elements.
 * Login: This will call your function `loginWithCredentials` with fake credentials.
 * Get Form Values: This will alert the result from your function `obtainFieldsValues`

You can change the credentials for testing the Log In in the file ./dist/credentials.json

# Optional

In case that you need to preserve a global state across several pages you can use the background script (background.js)
that is in this folder.
More about background scripts: https://developer.chrome.com/extensions/background_pages
More about communication with the background script: https://developer.chrome.com/extensions/nativeMessaging

# For PayPal

1. Inspected password and log in button fields on the website to see what the id was.
2. Works for https://www.paypal.com/signin. Added conditional to get change ids in getPasswordField and getSubmitButton to password and btnLogin if window.location.href contained "paypal".

# For Instagram

1. Inspected username, password, and log in button fields to see what to select them by.
2. If window.location.href contained "instagram", selected username and password by selecting for input with attribute name = username or attribute password = password. Selected log in button by looking for button with the appropriate classes.

# For Bank of America

1. Inspected username, password, and log in button fields to see what to select them by.
2. Selected username, password, and log in buttons by id. getFormField only drew the box around the username and password fields so I also had to add a conditional to getFormField for when the url contained "www.bankofamerica.com" and to select the form by id.
3. Repeated the process for "secure.bankofamerica.com", except didn't add a conditional for getFormField because the default "getUsernameField().closest('form')" worked fine. Login option is currently failing to click the log in button.

# For Citi

1. Inspected fields to see what ids to select them by and selected the correct ids for username, password, and log in button when window.location.href contained "online.citi.com".
2. Login won't register the username that's input unless it's actually typed in.

# For Yahoo

1. Inspected fields to see what ids to select them by and selected the correct ids for username, password, and log in button when window.location.href contained "login.yahoo.com".
2. Added conditional for when window.location.href contains "login.yahoo.com" to check for when submit button's text is not "Next". When the Login option on the Chrome extension is selected, it checks every 500 ms to see if the "Next" submit button has been clicked already, and clicks the "Sign in" submit button when it finally renders instead of the "Next" submit button. Or times out after ~10 seconds, whichever comes first.
