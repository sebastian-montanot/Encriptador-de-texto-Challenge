const inputTexto = document.querySelector("#textin") //id del input
const outputTexto = document.querySelector("#textout") //id del output

function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    outputTexto.value = textoEncriptado
    outputTexto.style.backgroundImage = "none"
    inputTexto.value = textoEncriptado
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    outputTexto.value = textoDesencriptado
    outputTexto.style.backgroundImage = "none"
    inputTexto.value = textoDesencriptado
}

function encriptar(strEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strEncriptada = strEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (strEncriptada.includes(matrizCodigo[i][0])){
            strEncriptada = strEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return strEncriptada;
}

function desencriptar(strDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strDesencriptado = strDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (strDesencriptado.includes(matrizCodigo[i][1])){
            strDesencriptado = strDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return strDesencriptado;
}

function copiar(){

    outputTexto.select()
    navigator.clipboard.writeText(outputTexto.value)
    outputTexto.value = ""
    }

document.getElementById("botCopiar").addEventListener("click",function(){
    this.value="¡Copiado!"
    setTimeout(()=> this.value="Copiar", 1500)})