const formulario = document.getElementById('form-contato');
const status = document.getElementById('status');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const assunto = 'Contato pelo portfólio - ' + nome;
    const corpo = mensagem + '\n\nDe: ' + nome + ' (' + email + ')';

    window.location.href =
        'mailto:raffzaccont@gmail.com' +
        '?subject=' + encodeURIComponent(assunto) +
        '&body=' + encodeURIComponent(corpo);

    status.textContent = 'Abrindo seu aplicativo de e-mail...';
    formulario.reset();
});