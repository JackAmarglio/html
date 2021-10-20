document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('my-navbar').style.display = "flex";
        }
        else{
            document.getElementById('my-navbar').style.display = "none";
        }
    })
})
  