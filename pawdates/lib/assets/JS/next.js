/**
 * Created by Ben on 4/7/2017.
 */
function next() {
    var picList = ["../pics-n-icons/smug3.jpg","../pics-n-icons/smug4.jpg","../pics-n-icons/smug5.jpg","../pics-n-icons/usericon.png"];
    imagesrc = document.getElementById("userPic");
    var randomNumber = Math.floor(Math.random()*5);
    imagesrc.src = picList[randomNumber]
}