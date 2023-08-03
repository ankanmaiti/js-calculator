const keys = document.querySelectorAll('[data-key]')
const inputs = document.querySelector('.inputs')
const result = document.querySelector('.result')


function clearAll() {
    inputs.innerHTML = '&nbsp;'
    result.innerText = 0
}


function clearLast() {
    let text = inputs.innerText
    inputs.innerText = text.substring(0, text.length - 1)
}


function displayResult( str ) {
    result.innerText = eval( str.trim() )
}


function onKeyPressed( key ){

    switch ( key ) {
        case 'AC':
            clearAll()
            break
        
        case 'C':
        case 'Backspace':
            clearLast()
            break
        
        case '=':
        case 'Enter':
            displayResult( inputs.innerText )
            break
        
        default :
            inputs.innerText += key
            break
    }
}


function detectKey({ target : { dataset } }) {
    onKeyPressed( dataset?.key )

}

keys.forEach(key => key.addEventListener('click', detectKey))


document.body.addEventListener('keydown', ({ key }) => { 
    onKeyPressed(key) 
})