// script.js

// Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Example: Drawing a rectangle
ctx.fillStyle = 'yellow';
ctx.fillRect(50, 50, 100, 75); // x, y, width, height

// Example: Drawing a circle
ctx.beginPath();
ctx.arc(200, 100, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = 'blue';
ctx.fill();

// Example: Drawing text
ctx.font = '24px Arial';
ctx.fillStyle = 'red';
ctx.fillText('Hello, Dishu!', 300, 150); // text, x, y
