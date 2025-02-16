const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

bar.addEventListener("click", () => {
    nav.classList.remove("translate-x-full");
    nav.classList.add("translate-x-0");
    
    bar.classList.add("opacity-0", "pointer-events-none"); // Hide bar without using "hidden"
    close.classList.remove("opacity-0", "pointer-events-none"); // Show close button
});

close.addEventListener("click", () => {
    nav.classList.add("translate-x-full");
    nav.classList.remove("translate-x-0");
    
    bar.classList.remove("opacity-0", "pointer-events-none"); // Show bar
    close.classList.add("opacity-0", "pointer-events-none"); // Hide close button
});
