function encriptar() {
    var text = document.getElementById('txtEncript').value
    if (text == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay texto para Encriptar!'
          })
    } else {
        var txtEncript = text.replace('e', 'enter').replace('i', 'imes').replace('o', 'ober').replace('u', 'ufat').replace('a', 'ai') //the letter "a" is in the end becaus have a problem if there is in the start
        document.getElementById('resultEncript').innerText = txtEncript
        document.getElementById('txtEncript').value = ""
        hiddenBefore()
    }
    
}

function desencriptar() {
    var text = document.getElementById('txtEncript').value
    if (text == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay texto para desencriptar!'
          })
    } else {
        var txtDesencript = text.replace('enter', 'e').replace('imes', 'i').replace('ober', 'o').replace('ufat', 'u').replace('ai', 'a') //the letter "a" is in the end becaus have a problem if there is in the start
        document.getElementById('resultEncript').innerText = txtDesencript;
        document.getElementById('txtEncript').value = ""
        hiddenBefore()
    }
}

function hiddenBefore() {
    var element = document.getElementById('none')
    element.style.visibility = 'hidden'
    var element = document.getElementById('something')
    element.style.visibility = 'visible'
}

function copy () {
    var txtCopy = document.getElementById('resultEncript').value
    navigator.clipboard.writeText(txtCopy)
    document.getElementById('resultEncript').value = ""

    var element = document.getElementById('none')
    element.style.visibility = 'visible'
    var element = document.getElementById('something')
    element.style.visibility = 'hidden'
}   

var btnEncript = document.querySelector("#btnEncript")
btnEncript.onclick = encriptar

var btnDesencript = document.querySelector("#btnDesencript")
btnDesencript.onclick = desencriptar

var btnCopy = document.querySelector("#btnCopy")
btnCopy.onclick = copy