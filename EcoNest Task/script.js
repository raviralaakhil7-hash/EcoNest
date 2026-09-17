```javascript
// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });

    // Close menu when a navigation link is clicked
    const navigationLinks = document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuBtn.textContent = "☰";
        });
    });
}


// =========================
// ADD TO CART
// =========================

const buyButtons = document.querySelectorAll(".buy-btn");

let cartCount = 0;

buyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName = button.getAttribute("data-product");

        cartCount++;

        button.textContent = "Added ✓";
        button.disabled = true;

        alert(
            productName +
            " has been added to your cart!\n\n" +
            "Cart items: " +
            cartCount
        );

        setTimeout(function () {
            button.textContent = "Add to Cart";
            button.disabled = false;
        }, 1500);

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

        alert(
            "Thank you, " +
            name +
            "!\n\nYour message has been received."
        );

        contactForm.reset();

    });

}


// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.1
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

}
```
