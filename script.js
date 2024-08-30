const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const toggleThemeButton = document.getElementById("toggleTheme");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  toggleThemeButton.textContent = isDarkMode
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// script.js
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');

showPasswordCheckbox.addEventListener('change', function () {
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
// Example of users stored in an object (for simplicity)
const users = {
  admin: { areaCode: "001", password: "adminpass" },
  user1: { areaCode: "002", password: "user1pass" },
  partner: { areaCode: "003", password: "partnerpass"},
};

// Login form submission handler
  document.getElementById("adminloginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Getting form values
    const areaCode = document.querySelector('input[name="area-code"]').value.trim();
    const userId = document.querySelector('input[name="user-id"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    // Check if the user exists in the users object
    if (users[userId]) {
    // Validate area code and password
      if (
        users[userId].areaCode === areaCode &&
        users[userId].password === password
      ) {
        alert(`Logged in successfully as ${userId}!`);
        window.location.href = "admin-dashboard.html"; // Redirect to a general dashboard
      } else {
        alert("Invalid credentials! Please try again.");
      }
    } else {
      alert("User ID not found! Please check your credentials.");
    }
  });

  // Example of users stored in an object (for simplicity)
  const users2 = {
    "corporate1": { areaCode: "001", password: "corp1pass" },
    "corporate2": { areaCode: "002", password: "corp2pass" },
    "corporate3": { areaCode: "003", password: "corp3pass" }
};

// Login form submission handler
document.getElementById('corpo-loginform').addEventListener('submit', function(event) {
    event.preventDefault();

    // Getting form values
    const areaCode = document.querySelector('input[name="area-code"]').value.trim();
    const userId = document.querySelector('input[name="user-id"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    // Check if the user exists in the users object
    if (users2[userId]) {
        // Validate area code and password
        if (users2[userId].areaCode === areaCode && 
            users2[userId].password === password) {
            alert(`Logged in successfully as ${userId}!`);
            if (userId.startsWith('corporate')) {
                window.location.href = "corpo-dashboard.html"; // Redirect to corporate dashboard
            } else {
                window.location.href = "admin-dashboard.html"; // Redirect to a general dashboard
            }
        } else {
            alert("Invalid credentials! Please try again.");
        }
    } else {
        alert("User ID not found! Please check your credentials.");
    }
});

  