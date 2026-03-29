
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// 🔥 Check localStorage on load
window.addEventListener("load", () => {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block";
  }
});

// ✅ Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  alert(`Logged in as ${user}`);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});

// ✅ Existing user login
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");

  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});