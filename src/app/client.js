const socket = io('http://localhost:8001');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".comntainer");

const name = prompt("enter your name");
window.alert('sad')