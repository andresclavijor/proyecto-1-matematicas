module.exports = {
    /**
     * Suma números
     * @example
     * 1 + 1 = 2
     * @param { number } n1 Número 1 a sumar
     * @param { number } n2 Número 2 a sumar
     */
    suma: function(n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 + n2: this.mensajeError();
    },
    /**
     * Resta números
     * @example
     * 1 - 1 = 0
     * @param { number } n1 Número 1 a restar
     * @param { number } n2 Número 2 a restar
     */
    resta: function (n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 - n2: this.mensajeError();
    },
    /**
     * Multiplica números
     * @example
     * 1 / 1 = 1
     * @param { number } n1 Número 1 a multiplicar
     * @param { number } n2 Número 2 a multiplicar
     */
    multiplicacion: function(n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 * n2: this.mensajeError();
    },
    /**
     * Divide números
     * @example
     * 1 / 1 = 1
     * @param { number } n1 Número 1 a dividir
     * @param { number } n2 Número 2 a dividir 
     */
    division: function (n1, n2) {
        return (this.esNumero(n1, n2)) ? n1 / n2: this.mensajeError();
    },
    /**
     * Comprueba si los valores introducidos son de tipo número
     * @param { number } n1 
     * @param { number} n2 
     */
    esNumero: function (n1, n2) {
        if (typeof n1 != 'number' || typeof n2 != 'number') {
            return false;
        }
        return true;
    },
    /**
     * Muestra un mensaje de error cuando no es número uno de los dos o los dos
     */
    mensajeError: function () {
        console.log('Uno de los valores introducidos o los dos no son de tipo numérico');
    }
}