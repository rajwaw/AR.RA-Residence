<script>
    function showForm(formType) {
      document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));
      document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));

      document.querySelector(.auth-tab[onclick="showForm('${formType}')"]).classList.add('active');
      document.getElementById(${formType}-form).classList.add('active');
    }

    function handleLogin(event) {
      event.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      if (email && password) {
        showNotification('Login successful!', 'success');
      } else {
        showNotification('Invalid email or password!', 'error');
      }
    }

    function handleRegister(event) {
      event.preventDefault();
      const name = document.getElementById('register-name').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      if (name && email && password.length >= 6) {
        showNotification('Registration successful!', 'success');
      } else {
        showNotification('Please fill out all fields correctly!', 'error');
      }
    }

    function showNotification(message, type) {
      const notification = document.getElementById('auth-notification');
      notification.textContent = message;
      notification.className = notification ${type};
      notification.style.display = 'block';
      setTimeout(() => notification.style.display = 'none', 3000);
    }
  </script>