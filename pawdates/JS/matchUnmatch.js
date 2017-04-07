/**
 * Created by Ben on 3/13/2017.
 * Updated by Noah on 3/15/2017
 *   to include database references
 *   and cleaning
 */

//to call, uId is needed for both users

function match(userA, userB){
    Array.prototype.includes();
    var userAPMatches = firebase.database().ref("users/" + userA + "/p_matches");
    var userBPMatches = firebase.database().ref("users/" + userB + "/p_matches");

    userAPMatches.push(userB);
    if (userBPMatches.includes(userA)){
        sendMatchRequest(userB);
    }else{
        userBPMatches.push(userA);
    }
}
