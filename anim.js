// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No se si esto es amor", time: 18 },
  { text: "Rio mirando al phone", time: 30 },
  { text: "Nena te envidia el sol", time: 45},
  { text: "Por que brillas como el", time: 64 },
  { text: "Planetas a tu alredor", time: 73 },
  { text: "Ohhhhh", time: 95 },
  { text: "El viento sopla tu merced", time: 100 },
  { text: "La sabana se hizo mantel", time: 120 },
  { text: "Por que arriba quiero comerte", time: 135 },
  { text: "Tus piernas penetran mi mente...", time: 154 },
  { text: "Y siento ese medio caliente", time: 175 },
  { text: "Hablame que quiero entenderte", time: 183 },
  { text: "TAS susurrando un monton de pecados", time: 196 },
  { text: "Hagamoslo lento que yo soy pasciente", time: 224 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);