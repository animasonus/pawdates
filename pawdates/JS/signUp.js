/**
 * Created by Ben on 4/7/2017.
 */
function signUp() {
    var name = document.getElementsByName("firstname")+" "+document.getElementsByName("lastname");
    var email = document.getElementsByName("email");
    var password = document.getElementsByName("password");
    var confirmPwd = document.getElementsByName("confirmpswrd");
    
    createNewUserData(name, email, password);
}