const noBtn = document.getElementById('noBtn');
const siBtn = document.getElementById('siBtn');

document.getElementById('lacarta').style.display = 'none';

const texts = [
    '¿Estás completamente segura?',
    '¿Segura, segura?',
    '¿No te queda ninguna duda?',
    '¿Totalmente segura?',
    '¿Segura de verdad?',
    '¿No hay vuelta atrás?',
    '¿Segura al 100%?',
    '¿No te arrepentirás?',
    '¿Segura de eso?',
    '¿No hay margen de error?',
    '¿Segura sin ninguna duda?',
    '¿Estás convencida?',
    '¿Segura y firme?',
    '¿No cambiarás de opinión?',
    '¿Segura sin titubear?',
    '¿No hay dudas?',
    '¿Segura como una roca?',
    '¿No hay ninguna duda?',
    '¿Segura y decidida?',
    '¿Segura sin pensarlo dos veces?'
];

let noCount = 0;

noBtn.addEventListener('click', () => {
    noCount++;
    
    if(noCount < 20) {
        noBtn.textContent = texts[noCount % texts.length];
        noBtn.style.transform = `scale(${1 + noCount * 0.1})`;
    } 
    else {
        noBtn.textContent = 'Ya dale si hija de tu mama';
        noBtn.style.transform = 'scale(1)';
        noCount = 0;
    }
});

siBtn.addEventListener('click', () => {
    alert('Te amo mi preciosa niña y gracias por ser mi San Valentin');

    document.getElementById('pregunta').style.display = 'none';
    document.getElementById('lacarta').style.display = 'block';
});






















// Modo Oscuro
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Guardar el estado del modo oscuro en el localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleDarkModeButton.innerHTML = moonIcon;
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleDarkModeButton.innerHTML = sunIcon;
    }
});

// Animación de los corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posicionamos el corazón de forma aleatoria en la parte superior
    heart.style.left = `${Math.random() * 100}vw`;  // Aleatorio en el eje X
    heart.style.animationDuration = `${Math.random() * 5 + 3}s`;  // Duración aleatoria de la animación

    document.body.appendChild(heart);

    // Eliminamos el corazón después de que se haya animado
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones de forma continua
setInterval(createHeart, 200);