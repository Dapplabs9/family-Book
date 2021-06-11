var images = ["dhruv.jpeg","soubhya.jpeg","deepak.jpeg"];
var names = ["Dhruv","Soubya","Deepak"];

var i = 0;
function update(){
    i++;
    var family_members = 2;
    if (i > family_members) {
        i = 0;
    }
    var updatedImage = images[i];
    var updated_names = names[i];
    document.getElementById("image1").src = updatedImage;
    document.getElementById("name").innerHTML = updated_names;
}
