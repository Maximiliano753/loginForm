function log(event) {
    event.preventDefault(); // предотвращает стандартное поведение формы

    // Получаем значения из полей ввода
    const username = document.getElementById('login').value.trim();
    const password = document.querySelector('input[type="Password"]').value.trim();

    // Проверка на пустые поля
    if (!username || !password) {
        showErrorAnimation();
        return; // Прекращаем выполнение функции
    }

    console.log('Username:', username);
    console.log('Password:', password);

    // Показать всплывающее сообщение
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    notification.classList.add('show');

    // Скрыть сообщение через 3 секунды
    setTimeout(() => {
        notification.classList.remove('show');
        notification.style.display = 'none';
    }, 3000);
}

function showErrorAnimation() {
    const form = document.getElementById('MyForm');
    form.classList.add('shake');

    // Убираем анимацию через 0.5 секунды
    setTimeout(() => {
        form.classList.remove('shake');
    }, 500);
}