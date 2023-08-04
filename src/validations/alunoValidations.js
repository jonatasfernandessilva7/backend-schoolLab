async function validarCadastro(senhaDeConfirmacao, senha, email) {
    if (senhaDeConfirmacao != senha) {
        console.log("senhas não batem, por favor volte e corrija");
    } else if (!email.includes("@alu.ufc.br")) {
        console.log("por favor volte e insira um email da ufc");
    }

}

module.exports = {
    validarCadastro
}