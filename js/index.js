const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
//Nav bar
let navItems = document.querySelectorAll('nav a');

let navItem1 = navItems[0];
navItem1.textContent = siteContent["nav"]['nav-item-1'];
let navItem2 = navItems[1];
navItem2.textContent = siteContent["nav"]['nav-item-2'];
let navItem3 = navItems[2];
navItem3.textContent = siteContent["nav"]['nav-item-3'];
let navItem4 = navItems[3];
navItem4.textContent = siteContent["nav"]['nav-item-4'];
let navItem5 = navItems[4];
navItem5.textContent = siteContent["nav"]['nav-item-5'];
let navItem6 = navItems[5];
navItem6.textContent = siteContent["nav"]['nav-item-6'];
// cta header section
let ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.textContent = siteContent["cta"]['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
// main content section

//--top content
let topTextContent = document.querySelectorAll('.top-content .text-content');
let topTextContent1 = topTextContent[0];
let topTextContent2 = topTextContent[1];

let topTextContent1Header = topTextContent1.querySelector('h4');
let topTextContent1Par = topTextContent1.querySelector('p');

topTextContent1Header.textContent = siteContent['main-content']['features-h4'];
topTextContent1Par.textContent = siteContent['main-content']['features-content'];

let topTextContent2Header = topTextContent2.querySelector('h4');
let topTextContent2Par = topTextContent2.querySelector('p');

topTextContent2Header.textContent = siteContent['main-content']['about-h4'];
topTextContent2Par.textContent = siteContent['main-content']['about-content'];

//--middle image

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//--bottom content

let botTextContent = document.querySelectorAll('.bottom-content .text-content');
let botTextContent1 = botTextContent[0];
let botTextContent2 = botTextContent[1];
let botTextContent3 = botTextContent[2];

let botTextContent1Header = botTextContent1.querySelector('h4');
let botTextContent1Par = botTextContent1.querySelector('p');

botTextContent1Header.textContent = siteContent['main-content']['services-h4'];
botTextContent1Par.textContent = siteContent['main-content']['services-content'];

let botTextContent2Header = botTextContent2.querySelector('h4');
let botTextContent2Par = botTextContent2.querySelector('p');

botTextContent2Header.textContent = siteContent['main-content']['product-h4'];
botTextContent2Par.textContent = siteContent['main-content']['product-content'];

let botTextContent3Header = botTextContent3.querySelector('h4');
let botTextContent3Par = botTextContent3.querySelector('p');

botTextContent3Header.textContent = siteContent['main-content']['vision-h4'];
botTextContent3Par.textContent = siteContent['main-content']['vision-content'];

// contact section

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

//footer section

let footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright'];

//Add New Content
//--change nav text color to green

let navAnchors = document.querySelectorAll('nav a');
navAnchors.forEach(anchor => anchor.style.color = 'green');

//--add new items to the nav with .appendChild and .prepend

let homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = 'Home';
document.querySelector('nav').prepend(homeLink);

let darkmodeLink = document.createElement('a');
darkmodeLink.href = '#';
darkmodeLink.textContent = 'DarkMode';
document.querySelector('nav').appendChild(darkmodeLink);

// Stretch

ctaButton.style.backgroundColor = 'yellow';

homeLink.style.color = 'red';
homeLink.style.fontWeight = 'bold';


darkmodeLink.onclick = () => {
  if (darkmodeLink.textContent == "LightMode") {
    document.querySelector('body').style.backgroundColor = "white";
    darkmodeLink.textContent = "DarkMode"
  }
  else {
    document.querySelector('body').style.backgroundColor = "#4f555e";
    darkmodeLink.textContent = "LightMode"
}};