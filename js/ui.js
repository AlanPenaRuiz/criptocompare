var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

class Interfaz {

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        // seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        // mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    // Imprime el resultado de la cotización

    mostrarResultado(resultado, moneda, crypto) {

        // En caso de un resultado anterior, ocultarlo
        const resultadoAnterior = document.querySelector('#resultado > div');

        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }

        // construir el template
        let templateHTML = `
                   <div class="card bg-warning">
                        <div class="demo animated text-light">
                             <h2 class="card-title">Resultado:</h2>
                             <p>El Precio de ${crypto} a moneda ${moneda} es de: ${resultado}</p>
                             
                        </div>
                   </div>
              `;

        this.mostrarOcultarSpinner('block');

        setTimeout(() => {
            // insertar el resultado
            document.querySelector('#resultado').innerHTML = templateHTML;

            // ocultar el spinner
            this.mostrarOcultarSpinner('none');
        }, 3000);
    }

    // Mostrar un spinner de carga al enviar la cotización
    mostrarOcultarSpinner(vista) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}