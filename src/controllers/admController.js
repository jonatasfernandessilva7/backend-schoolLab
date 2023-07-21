import admService from '../services/admService';

const AdmLogin = async (req, res) => {

    const { email } = req.body;

    let buscaAdm = await admService.buscaAluno(email);

    try {
        if (buscaAdm === null) {
            return res.status(400).send('user not found');
        } else {
            res.json({user: buscaAdm});
        }
    } catch (error) {
        res.json({error});
    }

}


const buscaTodosOsAlunos = async (req, res) => {
    try {
        const alunos = await admService.buscaAlunos();

        return res.json({
            success: true,
            data: alunos,
            message: "alunos found successfully",
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }

}


const cadastroMonitor = async (req, res) => {

    try {

        const { nome, email, curso, senha } = req.body;

        let busca = await admService.buscaMonitor(email);

        if (busca) {
            res.json({message: "alredy user"});
        } else {
            try {
                novomonitor = await admService.createMonitor(nome, email, curso, senha);
                res.json({message: "ok", user: novomonitor});
            } catch (error) {
                res.send(error);
            }
        }

    } catch (erro) {
        console.log(erro);
    }



}

const delMonitor = async (req, res) => {

    const { email } = req.body;

    let buscaADeletarMonitor = await admService.buscaMonitor(email);

    try {

        if (buscaADeletarMonitor) {
            try {
                monitorADeletar = await admService.deleteMonitor(email);
                res.json({message:"deleted", user: monitorADeletar});
            } catch (erro) {
                res.json({message: erro})
            }
        }
    } catch (error) {
        res.json({error});
    }


}

const delAluno = async (req, res) => {

    const { email } = req.body;

    let buscaADeletar = await admService.buscaUsuarioADeletar(email);

    try {

        if (buscaADeletar) {
            try {
                let alunoADeletar = await admService.deleteUsuario(email);
                res.json({message: "aluno deletado", user: alunoADeletar});
            } catch (erro) {
                res.json({erro: erro})
            }
        }
    } catch (error) {
        res.json({error});
    }


}

const addLab = async (req, res) => {

    try {

        const { numero, status } = req.body;

        let buscaLab = await admService.buscaLab(numero);

        if (buscaLab){
            return res.json({
                message: "laboratorio ja existe, impossível cadastrar"
            })
        }else {

            let newLab = await admService.adicionarLaboratorios(numero, status);

            return res.json({
                message: "laboratorio criado com sucesso",
                data: newLab
            })
        }
    }catch(erro){
        return res.json({erro: erro})
    }


}


module.exports = {
    AdmLogin,
    cadastroMonitor,
    delMonitor,
    delAluno,
    buscaTodosOsAlunos,
    addLab,
}