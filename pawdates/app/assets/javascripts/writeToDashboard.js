/**
 * Created by Ben on 3/15/2017.
 */
function postcard(){
    var cardDiv = document.createElement('div');
    document.write(cardDiv);
    cardDiv.innerHTML= '<div class="wrapper">\<div id="card" class="card" data-id="0">\<div id="card_img" class="card_img">' +
        '\<!-- Image containing obligatory smug anime girl-->' +
        '\<img src="default.jpg" width="155" height="155">\</div>\<div id="smug" class="desc">\<center>' +
        '\Smug Anime Girl<br>\Dogs:<br>\[insert dogs here]\</center>\</div>\</div>\</div>';
    document.body.appendChild(cardDiv);
}
window.onload= postcard();