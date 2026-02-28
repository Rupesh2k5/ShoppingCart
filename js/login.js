document.addEventListener("DOMContentLoaded", () => {
  console.log("Login page loaded");

  const form = document.getElementById("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirm");
  const toggle = document.getElementById("toggle");
  const title = document.getElementById("title");

  let mode = "login";

  console.log("Current localStorage contents:");
  console.log("users:", localStorage.getItem("users"));
  console.log("loggedInUser:", localStorage.getItem("loggedInUser"));

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    mode = mode === "login" ? "register" : "login";
    title.textContent = mode === "login" ? "Login" : "Register";
    confirmInput.style.display = mode === "register" ? "block" : "none";
    console.log("Switched to mode:", mode);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();
    const confirm = confirmInput.value.trim();

    console.log("Form submitted - Mode:", mode, "Username:", username);

    let users = {};
    try {
      const storedUsers = localStorage.getItem("users");
      console.log("Raw stored users:", storedUsers);
      
      if (storedUsers) {
        users = JSON.parse(storedUsers);
        console.log("Parsed users:", users);
      } else {
        console.log("No users found in localStorage");
        users = {};
      }
    } catch (error) {
      console.error("Error parsing users:", error);
      alert("Error reading user data. Please clear your browser cache and try again.");
      return;
    }

    if (mode === "register") {
      if (users[username]) {
        console.log("Registration failed - User already exists:", username);
        alert("User already exists");
        return;
      }

      if (password !== confirm) {
        console.log("Registration failed - Passwords don't match");
        alert("Passwords do not match");
        return;
      }

      console.log("Registering new user:", username);
      users[username] = password;
      
      localStorage.setItem("users", JSON.stringify(users));
      console.log("User registered successfully. Updated users:", users);
      
      alert("Registered successfully! Please login.");
      
      mode = "login";
      title.textContent = "Login";
      confirmInput.style.display = "none";
      usernameInput.value = "";
      passwordInput.value = "";
      confirmInput.value = "";
    }

    else if (mode === "login") {
      console.log("Attempting login for user:", username);
      console.log("Stored password for this user:", users[username]);
      console.log("Entered password:", password);

      if (!users[username]) {
        console.log("Login failed - User not found:", username);
        alert("User not found. Please register first.");
        return;
      }

      if (users[username] === password) {
        console.log("Login successful for:", username);
        localStorage.setItem("loggedInUser", username);
        console.log("Redirecting to shopping.html...");
        window.location.href = "shopping.html";
      } else {
        console.log("Login failed - Incorrect password for:", username);
        console.log("Expected:", users[username], "Got:", password);
        alert("Incorrect password");
      }
    }
  });
});