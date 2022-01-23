const body = document.querySelector("body");

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const selectedImg = images[Math.floor(Math.random() * images.length)];

body.style.background = `no-repeat center/auto url(img/${selectedImg})`;
