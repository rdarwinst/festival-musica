document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {

        const imagen = document.createElement('PICTURE');

        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen Galería" loading="lazy">    
        `;

        imagen.onclick = function () {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);

    }
}

function mostrarImagen(id) {

    const imagen = document.createElement('PICTURE');

    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen Galería" loading="lazy">    
    `;

    // Crear Overlay
    const overlay = document.createElement('DIV');
    overlay.classList.add('overlay');
    overlay.appendChild(imagen);

    // Crear Boton Cerrar
    const close = document.createElement('P');
    close.textContent = 'X';
    close.classList.add('cerrar');
    overlay.appendChild(close);

    // Cerrar Imagen
    overlay.onclick = function () {
        overlay.remove();
        body.classList.remove('fijar-body');
    }
    close.onclick = function () {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

