const form = document.getElementById("form-deposito")
const botao = document.getElementById("btn-enviar");
botao.disable = true

form.addEventListener("submit", function (e) {
    e.preventDefault();
})

function validaFormulario() {
    let mes = document.getElementById("mes-nascimento").value
    let ano = document.getElementById("ano-nascimento").value

    if (mes > ano) {
        alert("Você preencheu o mês de nascimento maior que o ano, preencha novamente");
        return false;
    } else {
        alert("Você nasceu no mês " + mes + " e no ano " + ano)
        return true;
    }
}

console.log (form)