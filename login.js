function hideseek() {

  var password = document.getElementById("password");
  if (password.type === "password") {
      password.type = "text";
  }
  else {
      password.type = "password";
  }
}
function kirimData() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simpan data ke URL
  var params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

  // Redirect ke halaman hasil dengan query string
  window.location.href = 'landing.html?' + params.toString();
  return false; // Mencegah submit form standar
}


function togglePassword() {
      const passwordField = document.getElementById('password');
      if (passwordField.type === 'password') {
          passwordField.type = 'text';
      } else {
          passwordField.type = 'password';
      }
  }

 // Fungsi untuk menampilkan atau menyembunyikan password
function hideseek() {
const passwordField = document.getElementById('password');
passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}

// Fungsi untuk menyimpan data username dan password ke local storage dan melakukan validasi
function kirimData() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username === '' || password === '') {
  alert('Username dan Password wajib diisi.');
  return false;
}

// Simpan ke local storage
localStorage.setItem('username', username);
localStorage.setItem('password', password);

alert('Data berhasil disimpan!');
return true; // Lanjutkan submit
}