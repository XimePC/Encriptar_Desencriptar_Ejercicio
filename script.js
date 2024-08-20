const inputText = document.getElementById('input-text');
        const encriptarButton = document.getElementById('encriptar');
        const desencriptarButton = document.getElementById('desencriptar');
        const rightSide = document.querySelector('.right-side');

        encriptarButton.addEventListener('click', () => {
            const text = inputText.value.toLowerCase();
            mostrarMensaje(encriptar(text));
        });

        desencriptarButton.addEventListener('click', () => {
            const text = inputText.value.toLowerCase();
            mostrarMensaje(desencriptar(text));
        });

        function encriptar(text) {
            return text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        }

        function desencriptar(text) {
            return text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        }

        function mostrarMensaje(mensaje) {
            rightSide.innerHTML = mensaje ? `<h3>Mensaje Encontrado</h3><p>${mensaje}</p><p>&#x261D; Haz Click sobre el mensaje para copiar.</p>` :
                                             `<h3>Ningún mensaje fue encontrado</h3><p>Ingresa el texto que desees encriptar o desencriptar.</p>`;
            if (mensaje) {
                const mensajeParrafo = rightSide.querySelector('p');
                mensajeParrafo.addEventListener('click', () => copiarTexto(mensajeParrafo));
            }
        }

        function copiarTexto(elemento) {

            const seleccion = window.getSelection();
            const rango = document.createRange();
            rango.selectNodeContents(elemento);
            seleccion.removeAllRanges();
            seleccion.addRange(rango);
            document.execCommand('copy');
            alert('Texto copiado al portapapeles');
        }
