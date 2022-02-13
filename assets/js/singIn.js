btnSubmit = document.querySelector('a')

btnSubmit.addEventListener('click', function() {
    checkFields()
})

function checkFields(){
    inputEmail = document.querySelector('#inputEmail').value
    inputPassword = document.querySelector('#inputPassword').value

    shortPassword = inputPassword.length < 8
    invalidEmail = !inputEmail.includes('@')
    emptyEmail = inputEmail == ''
    emptyPassword = inputPassword == ''


    if (shortPassword){
        btnSubmit.setAttribute('href', 'index.html')
        alert('Senha deve conter pelo menos 8 caracteres')
    }else if (invalidEmail) {
        btnSubmit.setAttribute('href', 'index.html')
        alert('Por favor insira um e-mail válido')
    }else if (emptyEmail || emptyPassword){
        btnSubmit.setAttribute('href', 'index.html')
        alert('Por favor insira login e senha')
    }else {
        btnSubmit.setAttribute('href', 'pages/home.html')
    }
}