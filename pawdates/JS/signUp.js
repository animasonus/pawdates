/**
 * Created by Ben on 4/7/2017.
 */
function signUp() {
    var firstName = document.getElementsByName("firstname");
    var lastName = document.getElementsByName("lastname");
    var emailAd = document.getElementsByName("emailad");
    var username = document.getElementsByName("username");
    var password = document.getElementsByName("password");
    var confirmPwd = document.getElementsByName("confirmpswrd");
    if (password === confirmPwd){
        createNewUserData(firstName,lastName,username,emailAd,password);
        window.location.replace('http://pawdates.firebaseapp.com/dashboard.html');
    } else{
        alert("Error: passwords do not match.")
    }
}