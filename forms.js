const form = document.getElementById('form-matricula');

form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();

    const form = document.getElementById('form-matricula');
    const campoA = document.getElementById('campo-A')
    const campoB = document.getElementById('campo-B')
    const mensagemSucesso = `Matrícula solicitada com sucesso!`

    if (campoB.value > campoA.value) {
    alert(mensagemSucesso)
    }

    else (campoB.value < campoA.value); {
    alert("O ano de matrícula precisa ser superior ao ano de nascimento")
    } 

    else if (campoB.value = campoA.value); {
    alert("O ano de matrícula precisa ser superior ao ano de nascimento")
    }
})
console.log(form);