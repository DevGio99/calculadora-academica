export default function calculate(){
    const resultInput = document.getElementById('result')
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
    //eval é um metodo que avalia a string recebida e a executa como se estivesse no console por exemplo 2+2 no console da 4

}