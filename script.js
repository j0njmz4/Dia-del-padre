const btn = document.getElementById('empezarBtn');
const pantalla1 = document.getElementById('pantalla1');
const pantalla2 = document.getElementById('pantalla2');
const pantalla3 = document.getElementById('pantalla3');
const mensajeAnimado = document.getElementById('mensajeAnimado');
const musica = document.getElementById('musica');
const btnMusica = document.getElementById('btnMusica');

let musicaReproduciendo = false;

btn.addEventListener('click', () => {
    musica.play();
    musicaReproduciendo = true;
    actualizarTextoBoton();

    pantalla1.classList.add('oculto');
    pantalla2.classList.remove('oculto');

    // Animar mensaje letra por letra
    let texto = "Feliz día del padre!";
    let i = 0;
    mensajeAnimado.textContent = "";
    mensajeAnimado.style.opacity = "1";

    const intervalo = setInterval(() => {
        if (i < texto.length) {
            mensajeAnimado.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
            // Pasar a la pantalla 3 con fade-in
            setTimeout(() => {
                pantalla2.classList.add('oculto');
                pantalla3.classList.remove('oculto');
                pantalla3.classList.add('fade-in');
            }, 3000);
        }
    }, 100);
});

// Botón para reproducir/pausar música
btnMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        musicaReproduciendo = true;
    } else {
        musica.pause();
        musicaReproduciendo = false;
    }
    actualizarTextoBoton();
});

function actualizarTextoBoton() {
    btnMusica.textContent = musicaReproduciendo ? "Parar música" : "Reproducir música";
}

// Inicializar texto del botón al cargar página
actualizarTextoBoton();

// Iniciar carrusel Swiper
const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
