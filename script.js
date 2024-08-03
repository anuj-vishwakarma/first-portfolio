
'use-strict';

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themeToggleButton = document.getElementById('theme-toggle');
const themeToggleButtonMobile = document.getElementById('theme-toggle-mobile');
const themeStylesheet = document.getElementById('theme-stylesheet');


themeToggleButton.addEventListener('click', () => {
  if (themeStylesheet.getAttribute('href') === 'darkMode.css' || themeStylesheet.getAttribute('href') === 'mediaqueries.css') {
    themeStylesheet.setAttribute('href', 'style.css');
  } else {
    themeStylesheet.setAttribute('href', 'darkMode.css');
  }
});

themeToggleButtonMobile.addEventListener('click', () => {
  if (themeStylesheet.getAttribute('href') === 'style.css' || themeStylesheet.getAttribute('href') === 'mediaqueries.css') {
    themeStylesheet.setAttribute('href', 'darkMode.css');
  } else {
    themeStylesheet.setAttribute('href', 'style.css');
  }
});





// for dark-mode image change
function toggleTheme() {
  const img = document.getElementById('theme-toggle');
  const img_mobile = document.getElementById('theme-toggle-mobile');
  const github_image = document.getElementById('github-image');
  const linkedin_image = document.getElementById('linkedin-image');
  const experience_image = document.getElementById('experience-image');
  const education_image = document.getElementById('education-image');
  // const checkmark_image = document.getElementById('checkmark-light-image');
  const mail_image = document.getElementById('mail-image');
  const arrow_image = document.getElementById('arrow-image');


  const darkMode = img.src.includes('darkmode.png');
  const lightMode = img.src.includes('lightmode.png');
  const isDarkModeMobile = img_mobile.src.includes('darkmode.png');

  if (darkMode) {
    img_mobile.src = './assets/lightmode.png';
    img.src = './assets/lightmode.png';
    github_image.src = './assets/github-light.png';
    linkedin_image.src = './assets/linkedin-light.png';
    experience_image.src = './assets/experience-light.png';
    education_image.src = './assets/education-light.png';
    // checkmark_image.src = './assets/checkmark-light.png';
    mail_image.src = './assets/email-light.png';
    arrow_image.src = './assets/arrow-light.png';
    arrow_image1.src = './assets/arrow-light.png';
    arrow_image2.src = './assets/arrow-light.png';
    themeToggleButtonMobile.src = './assets/lightmode.png';

  }

  else {
    themeToggleButtonMobile.src = './assets/darkmode.png';
    img.src = './assets/darkmode.png';
    github_image.src = './assets/github.png';
    linkedin_image.src = './assets/linkedin.png';
    experience_image.src = './assets/experience.png';
    education_image.src = './assets/education.png';
    checkmark_image.src = './assets/checkmark.png';
    mail_image.src = './assets/email.png';
    // img.src = './assets/darkmode.png';
    img_mobile.src = './assets/darkmode.png';
    linkedin_image.src = './assets/linkedin.png';
    arrow_image.src = './assets/arrow.png';
  }
}


function loco() {
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true,
  });

  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("body").style.transform ? "transform" : "fixed",
  });
}

loco()


window.addEventListener('load', function () {
  if (performance.navigation.type === 1) {
    // Page was reloaded
    window.scrollTo(0, 0);
  }
});
