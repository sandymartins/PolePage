var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

let nomeOk = false
let emailOk = false
let mensagemOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
  
    if(nome.value.length < 3) {
      txtNome.innerHTML = 'Nome inválido. Digite ao menos 3 caracteres.'
      txtNome.style.color = "red"
      nomeOk = false
    } else {
      txtNome.innerHTML = 'Nome válido.'
      txtNome.style.color = 'chartreuse'
      nomeOk = true
    }
  }

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
  
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      txtEmail.innerHTML = 'Email inválido.'
      txtEmail.style.color = 'red'
      emailOk = false
    } else {
      txtEmail.innerHTML = 'Email válido.'
      txtEmail.style.color = 'chartreuse'
      emailOk = true
    }
  }

function validaEmail2() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')
  
    if(email.value.match(regex)){
      txtEmail.innerHTML = 'Email válido.'
      txtEmail.style.color = 'chartreuse'
      emailOk = true
    } else {
      txtEmail.innerHTML = 'Email inválido.'
      txtEmail.style.color = 'red'
      emailOk = false
    }
  }

function validaMensagem() {
    let txtMsg = document.querySelector('#txtMsg')
  
    if(mensagem.value.length >= 100) {
      txtMsg.innerHTML = 'Mensagem muito grande, digite no máximo 100 caracteres.'
      txtMsg.style.color = 'red'
      mensagemOk = false
    } else {
      txtMsg.innerHTML = mensagem.value.length + '/100'
      txtMsg.style.color = 'white'
      mensagemOk = true
    }
  }

function enviarForm() {
    if(nomeOk === true && emailOk === true && mensagemOk === true) {
      alert(nome.value + ', a sua mensagem foi enviada com sucesso!!!')
    } else {
      alert('Por favor, verifique os campos novamente e os preencha corretamente.')
    }
  
  }