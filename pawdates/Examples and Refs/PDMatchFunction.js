/**
 * Created by Ben on 3/13/2017.
 */
/*function User(name){
    this.name = name;
    this.p_matches = [];
}*/
function match(userA, userB){
    Array.prototype.includes();
    userA.p_matches.push(userB);
    if (userB.p_matches.includes(userA)){
        return true
    }else{
        userB.p_matches.push(userA);
        return false
    }
}
/*var firstUser = new User("bob");
var secondUser = new User("bill");
match(firstUser,secondUser);
match(secondUser,firstUser);*/
