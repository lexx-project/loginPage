function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("Harap isi semua field!");
  } else if (user === "admin" && pass === "1234") {
    alert("Login berhasil! Selamat datang " + user);
  } else {
    alert("Username atau password salah!");
  }
}
