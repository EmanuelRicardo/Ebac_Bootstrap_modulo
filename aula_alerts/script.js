var numero_digitado = window.document.getElementById ('numero_digitado')
var resposta = window.document.getElementById ('resposta')
var resposta_erro = window.document.getElementById ('resposta_erro')
var linha_de_erro = `<div class="alert alert-danger alert-dismissible fade show">
<button class="btn-close" data-bs-dismiss="alert"></button>
Digitou errado!
</div>`

function nome_enviado(event){
    event.preventDefault();

    if (numero_digitado.value == 100){
        resposta.innerHTML = "Parabéns, você acertou!!"
    } else {
        resposta_erro.innerHTML = linha_de_erro
    }
}