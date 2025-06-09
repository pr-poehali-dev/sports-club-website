// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = mobileMenuBtn.querySelector(".menu-icon");
const closeIcon = mobileMenuBtn.querySelector(".close-icon");

mobileMenuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");

  if (isOpen) {
    // Close menu
    mobileMenu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  } else {
    // Open menu
    mobileMenu.classList.remove("hidden");
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }
});

// Close mobile menu when clicking on nav links
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
  body.classList.add("dark-theme");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Save theme preference
  const theme = body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Workout booking functionality
const workoutButtons = document.querySelectorAll(".workout-btn");
workoutButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (!this.disabled) {
      // Simple booking simulation
      this.textContent = "Записано!";
      this.style.backgroundColor = "#10b981";
      this.disabled = true;

      // Reset after 3 seconds (for demo purposes)
      setTimeout(() => {
        this.textContent = "Записаться";
        this.style.backgroundColor = "";
        this.disabled = false;
      }, 3000);
    }
  });
});

// News card interaction
const newsLinks = document.querySelectorAll(".news-link");
newsLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // Simulate navigation to news article
    alert("Переход к полной статье... (демо)");
  });
});

// Add loading animation for images
const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("load", function () {
    this.style.opacity = "1";
  });

  // Set initial opacity
  img.style.opacity = "0";
  img.style.transition = "opacity 0.3s ease-in-out";
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Add CSS transition for header
header.style.transition = "transform 0.3s ease-in-out";

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Animate cards on scroll
const cards = document.querySelectorAll(".news-card, .workout-card");
cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(card);
});

// Animate section headers
const sectionHeaders = document.querySelectorAll(".section-header");
sectionHeaders.forEach((header) => {
  header.style.opacity = "0";
  header.style.transform = "translateY(20px)";
  header.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(header);
});

// Hero stats counter animation
const stats = document.querySelectorAll(".stat-item span");
const animateNumber = (element, target) => {
  const increment = target / 50;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = element.textContent.replace(/\d+/, target);
      clearInterval(timer);
    } else {
      element.textContent = element.textContent.replace(
        /\d+/,
        Math.floor(current),
      );
    }
  }, 30);
};

// Trigger stats animation when hero is visible
const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        stats.forEach((stat) => {
          const text = stat.textContent;
          const number = parseInt(text.match(/\d+/)?.[0]);
          if (number) {
            animateNumber(stat, number);
          }
        });
        heroObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

const heroSection = document.querySelector(".hero");
if (heroSection) {
  heroObserver.observe(heroSection);
}

// Form validation (for future use)
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Utility function for API calls (for future use)
const apiCall = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

// Performance optimization: Lazy loading for images
const lazyImages = document.querySelectorAll("img[data-src]");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => imageObserver.observe(img));

// Console welcome message
console.log(
  "%cДобро пожаловать в FitClub! 💪",
  "color: #2563eb; font-size: 16px; font-weight: bold;",
);
console.log("Сайт создан с помощью Поехали! - https://poehali.dev");
