// Agrega el valor del botón a la pantalla

const add = (valor) => {
    document.getElementById('screen').value += valor
}

const erase = () => {
    document.getElementById('screen').value = ""
}

const calculate = () => {

    const expression = document.getElementById('screen').value
    try {
        const result = eval(expression)
        document.getElementById('screen').value = result
    } catch (error) {
        document.getElementById('screen').value = "Error de sintaxis"
    }
    
}