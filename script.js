// ---------- Formulário de contato ----------
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

// ---------- Modo claro / escuro ----------
const botaoTema = document.getElementById('tema');

function aplicarTema(tema) {
    document.body.classList.toggle('claro', tema === 'claro');
    botaoTema.textContent = tema === 'claro' ? '🌙' : '☀️';
}

// Ao abrir o site, usa o tema que a pessoa escolheu da última vez
const temaSalvo = localStorage.getItem('tema') || 'escuro';
aplicarTema(temaSalvo);

botaoTema.addEventListener('click', function () {
    const novoTema = document.body.classList.contains('claro') ? 'escuro' : 'claro';
    aplicarTema(novoTema);
    localStorage.setItem('tema', novoTema);
});