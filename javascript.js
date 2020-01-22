/* Top Navigation Bar
    Active Page */
/*
var pageContainer = document.getElementById("topnav");

var pages = pageContainer.getElementsByClassName("page");

var i;
for (i = 0; i < pages.length; i++) 
{
    pages[i].addEventListener("click",function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}
*/
var header = document.getElementById("topnav");
var btns = header.getElementsByClassName("page");
for (var i = 0; i < btns.length; i++) 
{
    btns[i].addEventListener("click", function() 
    {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}