//client/src/pages/login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  fetchLoginData(email, password);
});

async function fetchLoginData(email, password) {
  const url = "http://127.0.0.1:8080/user/login";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    console.error("Login failed");
  }

  const data = response.json();
}
