const userService = require("../services/alunoService");
const validations = require("../validations/alunoValidations");

const createAluno = async (req, res) => {
    try{
        const { nome, email, curso, senha, senhaConfirm } = req.body;
        let busca = await userService.buscaAluno(email);
        await validations.validarCadastro(senhaConfirm, senha, email);
        if (busca) {
            res.json({message: 'ja existe um usuario com esse email'});
        } else {
            try {
                let user = await userService.createUser(nome, email, curso, senha);
                res.json({user: user,
                          message: 'create user success'});
            } catch (error) {
                res.json({error});
            }
        }
    }catch(error){
        res.json({error})
    }
}

const LoginAluno = async (req, res) => {
    try{
        const { email, senha } = req.body;
        let searchUser = await userService.buscaAluno(email);
        if (searchUser === null) {
            return res.status(400).json({message: 'user not found'})
        } else {
            res.json({
                message: "ok",
                user: searchUser,
            });
        }
    }catch(error{
        res.json({error})
    }
}

const updateAlunoSenha = async (req, res) => {
    try{
        const { email, senha } = req.body
        let busca = await userService.buscaAluno(email);
        if (busca === null) {
            return res.status(400).send('user not found')
        } else {
            try {
                let updateSenha = await userService.updateAluno(email, senha);
                res.json({ message: "att", user: updateSenha });
            } catch (error) {
                res.json({error})
            }
        }
    }
    }catch(error){
        res.json({error: error});
    }
}

const updateAluno = async (req, res) => {
    try{
        let { nome, email, senha, curso } = req.body;
        let userFind = await userService.buscaAluno(email);
        if (!userFind) {
            res.send("user não encontrado");
        } else {
            try {
                let updateDeTudo = await userService.updateDataAluno(nome, email, curso, senha)
                res.json({message: "ok", user: updateDeTudo});
            } catch (erro) {
                console.log(erro);
            }
        }
    }catch(error){
        res.json(erro: error);
    }
}

const PerfilAluno = async (req, res) => {
    try{
        const { nome, email, curso, senha } = req.session;
        let User = await userService.buscaTodosOsDados(nome, email, curso, senha);
        if (User) {
            res.json({User: User});
        } else {
            res.json({message: "erro inesperado, desculpe"});
        }
    }catch(error){
        res.json({erro:error});
    }
}

module.exports = {
    createAluno,
    LoginAluno,
    updateAlunoSenha,
    updateAluno,
    PerfilAluno,
}