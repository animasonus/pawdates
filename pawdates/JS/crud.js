// Firebase database CRUD (Create, Read, Update, Destroy)

function createNewUserData(name, email, password) {
	// Called by onClick after profile has been verified
	var user = firebase.auth().currentUser;
	var uId = user.uid;

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		if (errorCode == 'auth/email-already-in-use') {
			alert("Email is already in use.");
		} else if (errorCode == 'auth/invalid-email') {
			alert("Invalid Email.");
		} else if (errorCode == 'auth/operation-not-allowed') {
			alert("Noah fucked up. Sorry about that.");
		} else if (errorCode == 'auth/weak-password') {
			alert("Password is too weak.");
		} else {
			alert(errorMessage);
		}
	});

	var userRef = firebase.database().ref('users');
	var newUserRef = userRef.push(uId);
	newUserRef.set({
		username: name,
		email: email,
		p_matches: [],
		matches: [],
		dogs: []
	});
}

/* function updateUserData(uId, name = '', owner_type = '', desc = '') {
	// Gets updated information from settings window
}*/