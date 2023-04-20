document.addEventListener("DOMContentLoaded", function(event) {
    // Ajouter l'écran de chargement
    const loader = document.createElement("div");
    loader.classList.add("loader");
    document.body.appendChild(loader);
});

window.setTimeout(function() {
    // Masquer l'écran de chargement
    const loader = document.querySelector("#loader");
    //loader.style.display = "none"; 

    // Rediriger vers top.html
    window.location.href = "top.html";
}, 9000);
