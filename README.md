# :checkered_flag: SCHOOL LAB UFC

Monitoramento e controle do fluxo de entrada e saída nos laboratórios.

## :technologist: Membros da equipe e Orientador

Membro 538429 - Gustavo Menezes De Sousa - Análise e Desenvolvimento De Sistemas

Membro 540089 - Jônatas Fernandes Silva - Análise e Desenvolvimento De Sistemas

Membro 539644 - Robert Michael Ávila - Análise e Desenvolvimento De Sistemas

Prof. Orientador - Anderson Uchôa.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- administrador
- aluno
- monitor
- aluno não logado

## :spiral_calendar: Entidades ou tabelas do sistema

- usuários
- monitores
- laboratórios
- computadores

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

**Funcionalidades gerais e de usuário comum:**

- login com autenticação
- perfil de usuário
- cadastro de usuário
- reserva do computador no laboratório especificado
- histórico de uso
- Atualização de dados do perfil
- Ver um tutorial de como mexer no site
- Ter uma aba de sugestões para emitir opiniões e sugestões sobre o site

**Funcionalidades monitores:**

- Escolha do laboratório onde ele monitora
- Visualização dos computadores em uso do laboratório
- Visualização do usuário de cada computador

**Funcionalidades adm geral:**

- escolha de qual laboratório em que vai supervisionar
- escolha de qual computador vai supervisionar
- poder ver detalhes do histórico do computador
- poder ver detalhes do histórico do usuário
- poder excluir a conta do usuário
- Cadastrar monitores
- Excluir monitores
- Cadastrar o número de computadores dos laboratórios


## :desktop_computer: Tecnologias e frameworks utilizados

**Backend:**

- Node js
- express js
- Prisma
- body-parser
- NodeMailer
- sqlite


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuários | X |  X  | X | X |
| Monitores | X |   X |  X | X|
| Administradores | X |   X |   | |

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| POST | /Aluno/cadastro/login |
| POST | /Aluno/login/home |
| POST | /esqueceuASenha|
| POST | /Monitor/cadastro/loginMonitor|
| POST | /Monitor/login/home|
| POST | /Aluno/Contato|
| POST | /admgeral/Adm/home|
| POST | /admgeral/CadastroMonitor|
| PUT | /Aluno/perfil |
| PUT | /Aluno/recuperacao/inserirNovaSenha |
| DELETE | /views/admgeral/DeletarMonitor |
| DELETE | /views/admgeral/DeletarAluno |

## Documentação
* [Documento de visão do projeto]
* [Regras gerais da disciplina]
