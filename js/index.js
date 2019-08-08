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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav bar
//using appendChild
let newText1 = document.querySelector("nav");
let text1 = document.createTextNode("Click Me");
newText1.appendChild(text1);// adds text
newText1.style.color = "green";

//using prepend
let newText2 = document.querySelector("nav");
let text2 = document.createTextNode("Hi");
newText2.prepend(text2);
newText2.style.color = "green";

let nav1 = document.querySelector(".container a:first-child");
nav1.textContent  = siteContent["nav"]["nav-item-1"];
nav1.style.color = "green";
nav1.addEventListener("click",(event) =>{
  alert("Hello World")
});
let nav2 = document.querySelector(".container a:nth-child(2)");
nav2.style.color = "green";
nav2.textContent = siteContent["nav"]["nav-item-2"];

let nav3 = document.querySelector(".container a:nth-child(3)")
nav3.textContent =siteContent["nav"]["nav-item-3"];;
nav3.style.color = "green";

let nav4 = document.querySelector(".container a:nth-child(4)");
nav4.textContent = siteContent["nav"]["nav-item-4"];
nav4.style.color = "green";

let nav5 = document.querySelector(".container a:nth-child(5)");
nav5.textContent = siteContent["nav"]["nav-item-5"];
nav5.style.color = "green";

let nav6 = document.querySelector(".container a:nth-child(6)");
nav6.textContent = siteContent["nav"]["nav-item-6"];
nav6.style.color = "green";

//title of page
let title = document.querySelector(".cta .cta-text h1");
title.textContent = siteContent["cta"]["h1"];
title.style.width = "15%";
//button under title
let button = document.querySelector(".cta .cta-text button");
button.textContent = siteContent["cta"]["button"];
button.style.width = "24%"
//dom2
button.addEventListener("click", (event) =>{
  alert("The DOM is strong in us")
});

//picture next to title
let ctaPicture = document.querySelector("#cta-img");
ctaPicture.setAttribute("src",siteContent["cta"]["img-src"]);

//features about section
let topContent = document.querySelectorAll(".text-content h4");
topContent[0].textContent = siteContent["main-content"]["features-h4"];
topContent[1].textContent = siteContent["main-content"]["about-h4"];

let topText = document.querySelectorAll(".text-content p"); //use all for array
topText[0].textContent = siteContent["main-content"]["features-content"];// use the 0 cause its an array
topText[1].textContent = siteContent["main-content"]["about-content"];
//picture in the middle
let mainPicture = document.querySelector(".middle-img");
mainPicture.setAttribute("src",siteContent["main-content"]["middle-img-src"]);
// services product vision
let bottomContent = document.querySelectorAll(".bottom-content .text-content h4");
bottomContent[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[1].textContent = siteContent["main-content"]["product-h4"];
bottomContent[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomText = document.querySelectorAll(".bottom-content .text-content p");
bottomText[0].textContent = siteContent["main-content"]["services-content"];
bottomText[1].textContent = siteContent["main-content"]["product-content"];
bottomText[2].textContent = siteContent["main-content"]["vision-content"];

//contact info
let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

let contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

//footer
let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];