const loginForm = document.querySelector("form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("hello");
const logout = document.querySelector(".fa-arrow-left");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);

  paintGreeting(userName);
}

function logoutSubmit() {
  localStorage.clear();
  window.location.reload();
}

logout.addEventListener("click", logoutSubmit);

function paintGreeting(userName) {
  greeting.innerText = `Welcome back, ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const dbUsername = localStorage.getItem(USERNAME_KEY);

if (dbUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreeting(dbUsername);
}
