// Ano no footer
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// Formulário: abre mailto com assunto/corpo preenchidos
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = (document.getElementById('nome') || {}).value?.trim() || "";
    const email = (document.getElementById('email') || {}).value?.trim() || "";
    const assunto = (document.getElementById('assunto') || {}).value?.trim() || "";
    const msg = (document.getElementById('msg') || {}).value?.trim() || "";
    const tipo = (document.querySelector('input[name="tipo"]:checked') || {}).value || "Não informado";

    const subject = `[${tipo}] ${assunto || "Contato pelo site"}${nome ? " - " + nome : ""}`;
    const body =
`Tipo: ${tipo}
Nome: ${nome || "-"}
E-mail: ${email || "-"}

Mensagem:
${msg || "-"}

(Enviado via site Luely Tecnologia)`;

    const mailto = `mailto:contato@luely.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}