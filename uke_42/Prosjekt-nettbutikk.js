const ting = document.getElementById('ting')
const gjem = document.getElementById('gjem')


ting.addEventListener("click", function() {
    gjem.style.display = "flex";
});

ting.addEventListener("mouseleave", function() {
    gjem.style.display = "none";
});
