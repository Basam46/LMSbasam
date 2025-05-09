document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Contoh login sederhana
    if (username === "admin" && password === "1234") {
      // Simpan nama pengguna ke sessionStorage (opsional)
      sessionStorage.setItem("user", username);
      // Arahkan ke dashboard
      window.location.href = "dasboard.html";
    } else {
      alert("Username atau password salah!");
    }
  });
});