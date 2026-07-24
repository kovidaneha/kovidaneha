// ==========================
// Theme Toggle
// ==========================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

const icon = themeBtn.querySelector("i");

if(document.body.classList.contains("light")){

icon.className="fa-solid fa-sun";

}else{

icon.className="fa-solid fa-moon";

}

});

// ==========================
// Custom Cursor
// ==========================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

// ==========================
// Reveal Animation
// ==========================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(70px)";
section.style.transition="all 1s ease";

observer.observe(section);

});

// ==========================
// Active Navbar
// ==========================
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;
const offset=section.offsetTop-150;
const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// Smooth Hover Effect
// ==========================
document.querySelectorAll(".card,.skill,.paint-card,.btn").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateY(-8px) scale(1.03)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="";

});

});

// ==========================
// Hero Typing Effect
// ==========================
const text="Bachelor of Arts in Geography";
const target=document.querySelector(".hero-left h2");

let i=0;

target.innerHTML="";

function typing(){

if(i<text.length){

target.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();

// ==========================
// Scroll Progress Bar
// ==========================
const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.background="#38bdf8";
progress.style.zIndex="9999";
progress.style.width="0%";
progress.style.boxShadow="0 0 12px #38bdf8";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});

// ==========================
// Floating Cards Animation
// ==========================
document.querySelectorAll(".card,.paint-card").forEach((card,index)=>{

card.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:3000+(index*400),

iterations:Infinity

});

});

// ==========================
// Footer Year
// ==========================
const footer=document.querySelector("footer");

footer.innerHTML=`© ${new Date().getFullYear()} Your Name • Geography Portfolio • Made with ❤️ using HTML, CSS & JavaScript`;
