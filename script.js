// Agrega el valor del botón a la pantalla

const add = (valor) => {
    document.getElementById('screen').value += valor
}

const erase = () => {
    document.getElementById('screen').value = ""
}