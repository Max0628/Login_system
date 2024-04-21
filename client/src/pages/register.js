//client/src/pages/register.js
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    fetchRegisterData(username, email, password);
  });

async function fetchRegisterData(username, email, password) {
  const url = "http://127.0.0.1:8080/user/register";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Failed to register user");
    }
    alert("User registered successfully!");
    console.log("User registered successfully!");
  } catch (error) {
    alert("User registered error!");
    console.error("Error registering user:", error);
  }
}
