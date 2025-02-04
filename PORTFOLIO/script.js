// Toggle Navbar on Small Screens
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close Navbar When Clicking a Link (for Mobile)
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll(".navbar a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

const words = ["Software Developer", "Frontend Developer", "Backend Designer", "ML Enthusiast"];
let wordIndex = 0;
const textSpan = document.querySelector(".text-animation span");

function changeText() {
  textSpan.textContent = words[wordIndex]; // Update text
  wordIndex = (wordIndex + 1) % words.length; // Cycle through words
}

setInterval(changeText, 4000); // Change text every 4 seconds


// Adding Your Social Media Links
const socialLinks = {
    "facebook": "https://www.facebook.com/share/18ATKMf5LW/",
    "github": "https://github.com/ShatyamYograj",
    "instagram": "https://www.instagram.com/_shatyam_/profilecard/?igsh=MWd5aWNrbnA0dmJleQ==",
    "linkedin": "https://www.linkedin.com/in/shatyam-yograj-54588a259/"
};

// Apply links to social icons
document.querySelectorAll(".social-icons a").forEach(icon => {
    const platform = icon.getAttribute("data-platform");
    if (socialLinks[platform]) {
        icon.setAttribute("href", socialLinks[platform]);
        icon.setAttribute("target", "_blank");
    }
});

























// // Contact Form Handling (Basic Validation & Email Sending)
// const contactForm = document.querySelector("form");
// contactForm.addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     const name = document.querySelector("input[name='name']").value.trim();
//     const email = document.querySelector("input[name='email']").value.trim();
//     const message = document.querySelector("textarea[name='message']").value.trim();

//     if (!name || !email || !message) {
//         alert("Please fill in all fields!");
//         return;
//     }

//     // Email handling - Opens email client with your email
//     const mailtoLink = `mailto:shatyamyograj11@gmail.com?subject=New Message from ${name}&body=${message}%0A%0AFrom: ${email}`;
//     window.location.href = mailtoLink;

//     alert("Your message has been prepared for sending.");
//     contactForm.reset();
// });
