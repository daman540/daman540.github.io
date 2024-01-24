let isDark = false;
function darkMode() {
    var element = document.getElementById("darkmode");
    
    if(!isDark){
        element.classList.toggle("dark-mode");

        element.classList.toggle("dark-mode-text")
    }
    
}