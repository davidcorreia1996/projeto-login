function mostrarSenha() {
    let inputPass = document.getElementById('isenha')
    let btnShowPass = document.getElementById('btn-senha')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    } else {
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash' )
    }
}