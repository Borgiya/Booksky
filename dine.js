document.addEventListener("DOMContentLoaded",function(){

var popupoverlay=document.querySelector(".popupoverlay");
var popupbox=document.querySelector(".popup");
var addpopupbutton=document.getElementById("add-popup-button");
var cancelPopup=document.getElementById("cancel-popup")
addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
});
cancelPopup.addEventListener("click", function(){
    popupoverlay.style.display="none";
    popupbox.style.display="none";
});
//selecting overallcontainer
var container= document . querySelector(".container")
var booktitleInput=document.getElementById("book-title");
var bookauthor=document.getElementById("book-author");
var description=document.getElementById("book-description");
var addbook=document.getElementById("add-book");
    addbook.addEventListener("click",function(event){
        event.preventDefault();
        var div =document.createElement("div");
        div.setAttribute("class","book-container")
        div.innerHTML=`<h2>${booktitleInput.value}</h2>
                       <h5>${bookauthor.value}</h5>
                       <p>${description.value}</p>
                       <button onclick="deletebutton(event)">Delete</button>`
          container.append(div);
        popupoverlay.style.display="none";
        popupbox.style.display="none";


        booktitleInput.value="";
        bookauthor.value="";
        description.value="";
    })
    function deletebutton(event){
        event.target.parentElement.remove()
    }
});