var counter = 2;
function log_in(){
    if(counter % 2 == 0){
        alert('You have been logged in!');
    }
    else {
        alert('You have been logged out!');
    }
    counter += 1;
}
    
function changeImage() {
    var image = document.getElementById("pimg");
    if (image.src.match("images/hoodie-back-logo.png")) {
        image.src = "images/hoodie-front-logo.png";}
    else {
        image.src = "images/hoodie-back-logo.png";
    }
}

