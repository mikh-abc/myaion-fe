var timeoutRefresh;
var refreshTime = 30000;

function checkReloading()
{
	if (window.location.hash == "#autorefresh")
	{
		timeoutRefresh = setTimeout("window.location.reload();", refreshTime);
		document.getElementById("autorefreshCheckBox").checked = true;
	}
}

function toggleAutoRefresh(checkBox)
{
	if (checkBox.checked)
	{
		window.location.replace("#autorefresh");
		timeoutRefresh = setTimeout("window.location.reload();", refreshTime);
	}
	else
	{
		window.location.replace("#");
		clearTimeout(timeoutRefresh);
	}
}

window.onload = checkReloading;