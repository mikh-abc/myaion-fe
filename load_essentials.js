function showWidgetMenu() {
    document.getElementById("widgetMenuDropdown").classList.toggle("show");
}

function showRankingMenu() {
    document.getElementById("rankingMenuDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu_nav_sub')) {

    var dropdowns = document.getElementsByClassName("menuDropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById("common_menu").innerHTML =
"<div id=\"menu_nav\"><ul>" +
"<li class=\"menu_nav\"><a href=\"/\" title=\"Main\">Main</a></li>" +
"<li class=\"menu_nav\"><a href=\"/history.html\" title=\"History\">History</a></li>" +
"<li class=\"menu_nav\"><a href=\"/online/\" title=\"Aion EU Online Statistics\">Online</a></li>" +
"<li class=\"menu_nav\"><a href=\"/download.html\" title=\"Download aiDPSMeter\">Download</a></li>" +
"<li class=\"menu_nav_sub\"><a href=\"javascript:showWidgetMenu()\" title=\"Widgets\">Widgets</a>" + 
"<div id=\"widgetMenuDropdown\" class=\"menuDropdownContent\">" + 
"<a href=\"/assistance.html\" class=\"menu_nav_sub\">Assistance</a>" +
"<a href=\"/battlefield.html\" class=\"menu_nav_sub\">Battleground</a>" + 
"<a href=\"/myaion.html\" class=\"menu_nav_sub\">MyAion</a>" +
"</div></li>" + 
"<li class=\"menu_nav\"><a href=\"/legal.html\" title=\"Is it legal?\">Is it legal?</a></li>" +
"<li class=\"menu_nav_sub\"><a href=\"javascript:showRankingMenu()\" title=\"Ranking\">Ranking</a>" + 
"<div id=\"rankingMenuDropdown\" class=\"menuDropdownContent\">" + 
"<a href=\"/rankingpvp.html?l=301310000\" class=\"menu_nav_sub\">PvP Runatorium</a>" +
"<a href=\"/rankingpve.html?b=650025\" class=\"menu_nav_sub\">PvE Prigga</a>" + 
"<a href=\"/rankingpve.html?b=858270\" class=\"menu_nav_sub\">PvE Beritra</a>" + 
"<a href=\"/rankingpve.html?b=858277\" class=\"menu_nav_sub\">PvE Weakling Daeva Mob Leader</a>" + 
"<a href=\"/rankingpve.html?b=858115\" class=\"menu_nav_sub\">PvE Daeva Mob Leader</a>" + 
"<a href=\"/rankingpve.html?b=656409\" class=\"menu_nav_sub\">PvE Ereshkigal</a></div></li>" + 
"<li class=\"menu_nav\"><a href=\"https://discord.gg/JJVQgyu\" title=\"Discord\">&zwnj;<img src=\"/img/discord.png\" align=\"top\" width=\"22\" height=\"22\"></a></li>" +
"</ul></div>";

