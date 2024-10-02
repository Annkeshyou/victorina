let wreload = document.getElementById("relbutt");
wreload.forEach(function() {
    wreload.addEventListener("click", click);
});

function click() {
    window.location.reload();
}
