function openTab(event, tabName)
{
	var i, tablinks, content;

	content = document.getElementsByClassName("content");

	for (i = 0; i < content.length; i++)
		content[i].style.display = "none";

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++)
		tablinks[i].className = tablinks[i].className.replace(" active", "");

	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
}