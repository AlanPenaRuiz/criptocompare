class API {
    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
        this.obtenerMonedasAPI();
        this.obtenerValores();

    }

    async obtenerMonedasAPI() {
        const url = 'https://api.coingecko.com/api/v3/coins/list';

        // fetch a la api
        const urlObtenerMonedas = await fetch(url);

        // respuesta en json
        const monedas = await urlObtenerMonedas.json();

        return {
            monedas
        }
    }
    async obtenerCambioMonedasAPI() {
        const url = 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies';

        // fetch a la api
        const urlObtenerMonedas = await fetch(url);

        // respuesta en json
        const monedas = await urlObtenerMonedas.json();
        //console.log(monedas)
        return {
            monedas
        }
    }
    construirSelect() {
        this.obtenerMonedasAPI()
            .then(monedas => {
                //console.log(monedas);
                // crear un select de opciones
                const select = document.querySelector('#criptomoneda');

                for (const [key, value] of Object.entries(monedas.monedas)) {
                    //console.log(value.id, value.symbol, value.name)
                    // añadir el Symbol y el Nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.id;
                    opcion.appendChild(document.createTextNode(value.name));
                    select.appendChild(opcion);
                }
            })
        this.obtenerCambioMonedasAPI()
            .then(monedas => {
                //console.log(monedas);
                // crear un select de opciones
                const select = document.querySelector('#moneda');

                for (const [key] of Object.entries(monedas.monedas)) {
                    //console.log(value.id, value.symbol, value.name)
                    // añadir el Symbol y el Nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = monedas.monedas[key];
                    opcion.appendChild(document.createTextNode(monedas.monedas[key]));
                    select.appendChild(opcion);
                    //console.log(monedas.monedas[key])
                }

            })
    }
    async obtenerValores(moneda, criptomoneda) {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${criptomoneda}&vs_currencies=${moneda}`;

        // consultar en rest api
        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();
        //var dataJSON = JSON.parse(resultado);
        //console.log(dataJSON)

        return {
            resultado
        }
    }


}