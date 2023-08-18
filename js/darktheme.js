var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("darktheme");
    if(document.body.classList.contains("darktheme")){
        icon.src = "imgs/sun.png"
    }else{
        icon.src = "imgs/moon.png"
    }
}