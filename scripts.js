
const button = document.getElementById("welcomeBtn");

button.addEventListener("click", function() {
    alert("Welcome to Mercy City!");
});

const menuBtn = document.getElementById("menuBtn");

const navigation = document.getElementById("navigation");

// OPEN AND CLOSE MENU

menuBtn.addEventListener("click", function() {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";

    menuBtn.setAttribute("aria-expanded", isOpen);

});

// CLOSE MENU WHEN A LINK IS CLICKED

const navLinks = navigation.querySelectorAll("a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});
const filterButtons = document.querySelectorAll(".filter-btn");
const sermonCards = document.querySelectorAll(".sermon-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.category;

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        sermonCards.forEach(function(card) {

            if (
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});