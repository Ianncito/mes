// Contraseña para acceder al contenido
const correctPassword = "inefablemiamorporti"; // Cambia esto por tu contraseña deseada

function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    const contentScreen = document.getElementById('content-screen');

    if (passwordInput === correctPassword) {
        // Si la contraseña es correcta, mostramos el contenido
        loginScreen.classList.add('hidden');
        contentScreen.classList.remove('hidden');
    } else {
        // Si la contraseña es incorrecta, mostramos un mensaje de error
        errorMessage.classList.remove('hidden');
    }
}