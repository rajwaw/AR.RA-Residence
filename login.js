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
  window.location.href = 'website.html' + params.toString();
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

// Ambil container untuk memasukkan login form
const loginContainer = document.getElementById('login-container');

// Jumlah form login yang ingin dibuat
const numberOfForms = 3;

// Looping untuk membuat form login
let percobaan = 0; // Menghitung jumlah percobaan login

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let correctUsername = "arraresidence";
    let correctPassword = "12345678";

    do {
        // Periksa kredensial
        if (username === correctUsername && password === correctPassword) {
            document.getElementById('loginMessage').innerText = "Login berhasil!";
            document.getElementById('loginMessage').style.color = "green";
            window.location.href = "website.html"; // Redirect ke halaman utama
            break; // Keluar dari loop jika login berhasil
        } else {
            percobaan++;
            document.getElementById('loginMessage').innerText = "Username atau Password salah. Percobaan ke-1 {percobaan} dari 3.";
            document.getElementById('loginMessage').style.color = "red";

            if (percobaan === 3) {
                alert("Anda telah salah memasukkan password 3 kali. Mengarahkan ke halaman reset password...");
                window.location.href = "reset-password.html"; // Ganti dengan URL halaman reset password
                break;
            }
        }
    } while (percobaan > 3);
});

}
