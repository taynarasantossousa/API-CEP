const inputCep = document.querySelector("#cep")
const inputEstado = document.querySelector("#estado")
const inputBairro = document.querySelector("#bairro")
const inputLogradouro = document.querySelector("#logradouro")
const inputCidade = document.querySelector("#cidade")
const inputNumero = document.querySelector("#numero")
const inputComplemento = document.querySelector("#complemento")
const btnBuscar = document.querySelector("#btn-buscar")

async function preencherForm() {
    inputBairro.value = ""
    inputEstado.value = ""
    inputLogradouro.value = ""
    inputCidade.value = ""
    inputComplemento.value = ""
    inputNumero.value = ""

    let valueInputCep = inputCep.value
    try {
        let response = await fetch(`https://viacep.com.br/ws/${valueInputCep}/json/ `)
        let data = await response.json()

        if (data.erro == "true") {
            inputNumero.setAttribute("disabled", "")
            inputComplemento.setAttribute("disabled", "")
            alert("Cep Invalido!")
            return
        }

        inputBairro.value = data.bairro
        inputEstado.value = data.estado
        inputLogradouro.value = data.localidade
        inputCidade.value = data.cidade

        inputNumero.removeAttribute("disabled")
        inputComplemento.removeAttribute("disabled")

    } catch (error) {
        inputNumero.setAttribute("disabled", "")
        inputComplemento.setAttribute("disabled", "")
        alert("Cep Invalido!")
    }
}

btnBuscar.addEventListener('click', preencherForm)

function mask() {
    let valueInputCep = inputCep.value
    let lengthInputCep = valueInputCep.length

    if (lengthInputCep == 5) {
        inputCep.value += '-'
    }
}


inputCep.addEventListener('keypress', mask)