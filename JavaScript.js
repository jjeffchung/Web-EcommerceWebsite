var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
  if(MenuItems.style.maxHeight == "0px"){
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick=function(){
  ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick=function(){
  ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function(){
  ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function(){
  ProductImg.src = SmallImg[3].src;
}

function validateForm() {

  if (document.forms ["myForm"] ["fname"].value == ""){
    alert ("Please, provide your first name.");
  return false;

 } else if (document.forms ["myForm"] ["lname"].value == ""){
 alert ("Please, provide your last name.");
 return false;

 } else if (document.forms ["myForm"] ["emailadd"].value == ""){
  alert ("Please, provide a valid email address.");
return false;

 } else if (document.forms ["myForm"] ["subject"].value == ""){
 alert ("Please, provide some feedback for your topic message.");
 return false;
 }
}
