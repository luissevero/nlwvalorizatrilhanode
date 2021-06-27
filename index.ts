//nomevariavel: tipovariavel
//? : parametro opcional
interface Usuario {
    nome: string, email: string, telefone?: string
}

function enviarEmail({email, nome, telefone}: Usuario){
    console.log(`Oi ${nome} seu email: ${email} e seu telefone: ${telefone}`)
}

enviarEmail({
    email: "Luis", 
    nome: "luis@teste.com", 
    telefone: "5332323232"
})
