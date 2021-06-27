function enviarEmail(_a) {
    var email = _a.email, nome = _a.nome, telefone = _a.telefone;
    console.log("Oi " + nome + " seu email: " + email + " e seu telefone: " + telefone);
}
enviarEmail({
    email: "Luis",
    nome: "luis@teste.com",
    telefone: "5332323232"
});
