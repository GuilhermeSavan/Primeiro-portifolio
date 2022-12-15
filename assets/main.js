
const form = document.querySelector(".form"),
      nome = document.querySelector("#nome"),
      email = document.querySelector("#email"),
      Msn = document.querySelector("#Msn")
      nomereturn = nome.value;

function sendEmail (){
  Email.send({
    SecureToken : "f1f760a1-9312-4f6b-963f-5a41ca0dbdf4",
    To : 'guilherme.savan@gmail.com',
    From : "guilherme.savan@gmail.com",
    Subject : nome.value ,
    Body : "Autor:\n  "+ nome.value+", email:\n  "+ email.value +
    " Mensagem:\n " +Msn.value
}).then(
  message => alert("obrigado pelo contato")
);
}
  