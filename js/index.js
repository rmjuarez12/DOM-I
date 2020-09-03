const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Add nav items
const navItems = document.querySelectorAll("nav a");

navItems.forEach((element, index) => {
  element.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

// Add CTA heading text, button, and image
const ctaHeading = document.querySelector(".cta .cta-text h1");
const ctaButton = document.querySelector(".cta .cta-text button");
const ctaImg = document.getElementById("cta-img");

ctaHeading.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.src = siteContent.cta["img-src"];

// Add top content on the main content area
const topContentHeadings = document.querySelectorAll(".top-content .text-content h4");
const topContentText = document.querySelectorAll(".top-content .text-content p");

topContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
topContentText[0].textContent = siteContent["main-content"]["features-content"];

topContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];
topContentText[1].textContent = siteContent["main-content"]["about-content"];

// Add image on middle section of main area
const middleImg = document.getElementById("middle-img");

middleImg.src = siteContent["main-content"]["middle-img-src"];

// Add bottom content on the main content area
const bottomContentHeadings = document.querySelectorAll(".bottom-content .text-content h4");
const bottomContentText = document.querySelectorAll(".bottom-content .text-content p");

bottomContentHeadings[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentText[0].textContent = siteContent["main-content"]["services-content"];

bottomContentHeadings[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentText[1].textContent = siteContent["main-content"]["product-content"];

bottomContentHeadings[2].textContent = siteContent["main-content"]["vision-h4"];
bottomContentText[2].textContent = siteContent["main-content"]["vision-content"];

// Add the contact details for the contact section
const contactHeading = document.querySelector(".contact h4");
const contactText = document.querySelectorAll(".contact p");

contactHeading.textContent = siteContent.contact["contact-h4"];

contactText[0].textContent = siteContent.contact.address;
contactText[1].textContent = siteContent.contact.phone;
contactText[2].textContent = siteContent.contact.email;

// Add the footer
const pageFooter = document.querySelector("footer p");

pageFooter.textContent = siteContent.footer.copyright;
