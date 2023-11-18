function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// LIGHT & DARK MODE

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
} else {
  setLightMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
    updateBackToTopButtonStyle("light");
  } else {
    setDarkMode();
    updateBackToTopButtonStyle("dark");
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });

  updateBackToTopButtonStyle("dark");
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });

  updateBackToTopButtonStyle("light");
}

// SCROLL TO TOP

const topButton = document.getElementById("back-to-top-btn");

topButton.addEventListener("click", function () {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide the scroll to top button based on scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// Function to update the back-to-top button style based on the theme
function updateBackToTopButtonStyle(theme) {
  const button = document.getElementById("back-to-top-btn");

  if (theme === "dark") {
    button.style.backgroundColor = "transparent";
    button.style.color = "var(--secondary-color)";
  } else {
    button.style.backgroundColor = "transparent";
    button.style.color = "black";
  }
}
