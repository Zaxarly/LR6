  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');

  const validEmail = 'qwerty12@gmail.com';
  const validPassword = 'qaeswnfda1234!';

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігаємо відправленню форми за замовчуванням

    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredEmail === validEmail && enteredPassword === validPassword) {
      // Відкриваємо нову вкладку з вмістом
      const newWindow1 = window.open('win_join.html', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400');
      const newWindow2 = window.open('win_join.html', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400');
    } else {
      alert('Невірний логін або пароль');
    }
  });
