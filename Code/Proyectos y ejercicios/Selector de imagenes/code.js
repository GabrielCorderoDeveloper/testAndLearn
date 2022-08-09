var boton = document.getElementById("trabajar");
boton.addEventListener("click", loadImage );

function loadImage() 
{
var id = document.getElementById("interprise");
var value = id.options[id.selectedIndex].value;
switch (value){
    case "Facebook": value = "face.png";
    break;
    case "Apple": value = "apple.jpg"
    break;
    case "Amazon": value = "amazon.jpg"
    break;
    case "Netflix": value = "netflix.jpg"
    break;
    case "Google": value = "google.jpg"
        }
        var image = new Image();
        image.src = value;
        document.getElementById("container").appendChild(image);
        var box = document.getElementById("trabajar");
        box.style.visibility = "hidden";
         var box2 = document.getElementById("interprise");
         box2.style.visibility = "hidden";
}







