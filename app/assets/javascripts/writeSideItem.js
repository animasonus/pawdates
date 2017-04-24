/**
 * Created by Ben on 4/7/2017.
 */
function postSideitem() {
    var sideItem = document.createElement('li');
    var matches = document.getElementsByClassName("matches");
    document.write(sideItem);
    sideItem.innerHTML = '<li class="sidebar-item">\<div id="match_pfp"><img src="pics-n-icons/default_small.jpg"></div>' +
        '\<span id="match_name">Smug Anime Girl</span>\</li>';
    document.body.matches.appendChild(sideItem);
}
window.onload = postSideitem();