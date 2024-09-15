/* Eventos para los botones principales */
document.getElementById('btnSonidos').addEventListener('click', function() {
    mostrarOpcionesSonidos();
});

document.getElementById('btnAnimaciones').addEventListener('click', function() {
    mostrarOpcionesAnimaciones();
});

document.getElementById('btnEjercicios').addEventListener('click', function() {
    mostrarOpcionesEjercicios();
});

/* Funciones para mostrar las opciones */
function mostrarOpcionesSonidos() {
    document.getElementById('contenido').innerHTML = `
        <div class="ejercicio">
            <h2>Sonidos Calmantes</h2>
            <div class="opciones">
                <button onclick="reproducirSonido('https://ojaramil.github.io/sonidos/sonido-de-calma-1.mp3"')">Sonido de Calma 1</button>
                <button onclick="reproducirSonido('https://ojaramil.github.io/sonidos/sonido-de-calma-2.mp3')">Sonido de Calma 2</button>
                <button onclick="reproducirSonido('https://ojaramil.github.io/sonidos/sonido-de-calma-3.mp3')">Sonido de Calma 3</button>
            </div>
            <div id="player"></div>
        </div>
    `;
}

function reproducirSonido(archivo) {
    document.getElementById('contenido').innerHTML = `
        <div class="ejercicio">
            <h2>Reproduciendo Sonido</h2>
            <div class="audio-player">
                <audio id="audioPlayer" src="${archivo}"></audio>
                <div class="audio-controls">
                    <button onclick="playAudio()">Reproducir</button>
                    <button onclick="pauseAudio()">Pausar</button>
                </div>
            </div>
        </div>
    `;
}

function playAudio() {
    document.getElementById('audioPlayer').play();
}

function pauseAudio() {
    document.getElementById('audioPlayer').pause();
}

function mostrarOpcionesAnimaciones() {
    document.getElementById('contenido').innerHTML = `
        <div class="ejercicio">
            <h2>Animaciones</h2>
            <div class="opciones">
                <button onclick="mostrarAnimacion('animation1')">Animación 1</button>
                <button onclick="mostrarAnimacion('animation2')">Animación 2</button>
                <button onclick="mostrarAnimacion('animation3')">Animación 3</button>
            </div>
        </div>
    `;
}

function mostrarAnimacion(claseAnimacion) {
    document.getElementById('contenido').innerHTML = `
        <div class="${claseAnimacion}"></div>
    `;
}

function mostrarOpcionesEjercicios() {
    document.getElementById('contenido').innerHTML = `
        <div class="ejercicio">
            <h2>Ejercicios de Relajación</h2>
            <div class="opciones">
                <button onclick="mostrarRespiracionProfunda()">Respiración Profunda</button>
                <button onclick="mostrarRelajacionMuscular()">Relajación Muscular</button>
                <button onclick="mostrarVisualizacionGuiada()">Visualización Guiada</button>
            </div>
        </div>
    `;
}

/* Funciones para los ejercicios de relajación */
function mostrarRespiracionProfunda() {
    document.getElementById('contenido').innerHTML = `
        <div class="ejercicio">
            <h2>Ejercicio de Respiración Profunda</h2>
            <p>Encuentra una posición cómoda y sigue las instrucciones.</p>
            <button onclick="iniciarRespiracionProfunda()">Iniciar Ejercicio</button>
            <div id="guiaRespiracion"></div>
        </div>
    `;
}

function iniciarRespiracionProfunda() {
    const guia = document.getElementById('guiaRespiracion');
    const pasos = [
        { mensaje: 'Inhala profundamente por la nariz (4 segundos)...', duracion: 4000 },
        { mensaje: 'Mantén el aire en tus pulmones (7 segundos)...', duracion: 7000 },
        { mensaje: 'Exhala lentamente por la boca (8 segundos)...', duracion: 8000 },
    ];
    let pasoActual = 0;

    function siguientePaso() {
        if (pasoActual < pasos.length) {
            guia.innerHTML = `<p>${pasos[pasoActual].mensaje}</p>`;
            setTimeout(siguientePaso, pasos[pasoActual].duracion);
            pasoActual++;
        } else {
            guia.innerHTML = '<p>Ejercicio completado. ¡Bien hecho!</p>';
        }
    }
    siguientePaso();
}

function mostrarRelajacionMuscular() {
    document.getElementById('contenido').innerHTML = `
        <div class="ejercicio">
            <h2>Relajación Muscular Progresiva</h2>
            <p>Sigue los pasos para relajar cada grupo muscular.</p>
            <button onclick="iniciarRelajacionMuscular()">Iniciar Ejercicio</button>
            <div id="guiaMuscular"></div>
        </div>
    `;
}

function iniciarRelajacionMuscular() {
    const guia = document.getElementById('guiaMuscular');
    const gruposMusculares = [
        'Pies y tobillos',
        'Pantorrillas',
        'Muslos',
        'Glúteos',
        'Abdomen',
        'Pecho',
        'Manos y antebrazos',
        'Brazos y hombros',
        'Cuello',
        'Cara',
    ];
    let indice = 0;

    function siguienteGrupo() {
        if (indice < gruposMusculares.length) {
            guia.innerHTML = `
                <p>Tensa los músculos de: <strong>${gruposMusculares[indice]}</strong> (5 segundos)...</p>
            `;
            setTimeout(() => {
                guia.innerHTML = `
                    <p>Relaja los músculos de: <strong>${gruposMusculares[indice]}</strong></p>
                `;
                indice++;
                setTimeout(siguienteGrupo, 5000);
            }, 5000);
        } else {
            guia.innerHTML = '<p>Ejercicio completado. ¡Bien hecho!</p>';
        }
    }
    siguienteGrupo();
}

function mostrarVisualizacionGuiada() {
    document.getElementById('contenido').innerHTML = `
        <div class="ejercicio">
            <h2>Visualización Guiada</h2>
            <p>Permite que tu mente se relaje mientras sigues esta visualización.</p>
            <button onclick="iniciarVisualizacionGuiada()">Iniciar Ejercicio</button>
            <div id="guiaVisualizacion"></div>
        </div>
    `;
}

function iniciarVisualizacionGuiada() {
    const guia = document.getElementById('guiaVisualizacion');
    const escenas = [
        { mensaje: 'Imagina que estás en una playa tranquila...', duracion: 5000 },
        { mensaje: 'Siente la arena suave bajo tus pies...', duracion: 5000 },
        { mensaje: 'Escucha el sonido relajante de las olas...', duracion: 5000 },
        { mensaje: 'Siente la brisa cálida en tu piel...', duracion: 5000 },
        { mensaje: 'Disfruta de este momento de paz y tranquilidad...', duracion: 5000 },
    ];
    let indice = 0;

    function siguienteEscena() {
        if (indice < escenas.length) {
            guia.innerHTML = `<p>${escenas[indice].mensaje}</p>`;
            setTimeout(siguienteEscena, escenas[indice].duracion);
            indice++;
        } else {
            guia.innerHTML = '<p>Ejercicio completado. ¡Bien hecho!</p>';
        }
    }
    siguienteEscena();
}
