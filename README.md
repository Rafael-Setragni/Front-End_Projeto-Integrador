Nome do Projeto: Desafio CT arena 56

Integrantes: 
Juan Victor da Silva Mota (documentação e programação)
Rafael Setragni(programação)

Tema: Centro de treinamento

Objetivo: Criação de uma plataforma web com intuito de tornar a divulgação mais pratica, tornar o acesso as informações do centro de treinamento mais intuitivo aos clientes e possíveis novos clientes. Atualizar posição digital do CT em relação as demandas tecnológicas modernas.

Público-alvo: Jovens, adultos e idosos com interesse em tópicos como:
⦁	Saúde
⦁	Musculação
⦁	Melhora da autoestima

justificativa do negócio escolhido: Foi selecionado o centro de treinamento arena 56, devido a carência de presença online, pois o CT só possui as redes sociais mínimas para atendimento e divulgação, como: instagram e whatsapp.

Link figma:https://www.figma.com/design/Oyn20QzgaKoFdLwanMJH4J/Sem-t%C3%ADtulo?node-id=0-1&t=LA7wjHRD2ql3nj2t-1

Tecnologias utilizadas: HTML5, CSS3, JavaScript

FRONT-END_PRJETO-INTEGRADOR{
    componentes{
        footer.html(arquivo HTML contendo o codigo do footer)
        header.html(arquivo HTML contendo o codigo do header)
    }
    css{
        responsive.css(arquivo CSS contendo a responcividade do site)
        styles.css(arquivo CSS contendo a estilização do site)
    }
    img{
        (imagens usadas no site)
    }
    js{
        compo
    }
    
    Index.html

    Sobre.html

    Contato.html

    Styles.css

}

Etapas realizadas (com datas e responsáveis):

⦁	Confecção do protótipo de alta fidelidade(figma)
Responsaveis: Juan Victor da Silva Mota e Rafael Setragni
Data: 20/10/2025

⦁	Relatorio:
Responsavel: Juan Victor da Silva Mota
Data: 20/10/2025

⦁	Desenvolvimento das paginas html e css:
Responsavel: Rafael Setragni
Data: 20/10/2025



Justificativas de desing:

⦁	Paleta de cores: 

⦁	Azul (0060C0):
Utilizado no header( barra de navegação ) e footer ( rodapé );

⦁	Azul(0080FF):
Utilizado em cards na pagina index.html, na caixa de texto na pagina sobre.html, no formulário na pagina contato.html e em botões;

⦁	Branco (FFFFFF):
Utilizado em no background do body, na barra de navegação, em elementos textuais;

⦁	Preto (000000):
Utilizado em elementos textuais e em botões; 

A paleta de cores foi selecionada de acordo com as cores do próprio CT, foram utilizadas poucas cores porem com um alto contraste entre elas, garantindo a acessibilidade mínima para pessoas daltônicas.

A fonte selecionada foi a Jersey 25, pois se agarrou bem a estética das paginas.

Fora utilizados dois ícones do whatsapp e instagram no footer para garantir acesso as redes sociais do CT para entrar em contato.

O layout geral da pagina foi definida com base em pesquisas e inspirações com outros sites de academia.

Próximos passos: Adicionar novas paginas(como a pagina de matricula e pagamento), dedicar mais tempo a acessibilidade e responsividade com uso de media cares e detalhamento das paginas que já possuímos.

Utilizamos o JavaScript para tornar possível a interação do usuário com o site. Nele, criamos um carrossel de imagens na página Home, uma mensagem de êxito quando o usuário completa o cadastro e também uma imagem que muda conforme o sexo escolhido pelo usuário.
A interação mais interessante de criar foi a mensagem que aparece ao concluir o cadastro, pois foi possível fazer uso de uma div que só é exibida no site quando a ação é finalizada.Foi possível aprender que o DOM permite manipular dinamicamente os elementos da página, tornando o site mais interativo e responsivo às ações do usuário.


## 1. Revisão e Diagnóstico do Projeto Atual

Ao observar o comportamento da pagina e sua reponsividade foi notado que o layout da pagina começa a ser comprometido em dispositivos mobile e tablets. No modelo de tablet pode se notar o deslocamento de alguns elementos da pagina,já no mobile elementos como: header, cards, foter e formulario ficam completamente desalinhados.

O unico elemento que funcionava bem na parte 1 do projeto era a box de texto com imagens na pagina sobre.html.

Os elementos que mais se repetem nas paginas são: Header e Footer.

## 4. Consolidação de Acessibilidade

## 4.1. Checklist de Acessibilidade

Verifiquem e implementem os seguintes recursos:

**HTML Semântico:**

- [X]  Usam tags semânticas (**`<header>`**, **`<nav>`**, **`<main>`**, **`<section>`**, **`<article>`**, **`<footer>`**)?
- [ ]  Cada página tem apenas um **`<h1>`** (título principal)?
- [X]  Os títulos seguem hierarquia lógica (h1 → h2 → h3)?

**Imagens e Multimídia:**

- [X]  Todas as imagens têm atributo **`alt`** com descrição clara?
- [X]  Imagens decorativas têm **`alt=""`** (vazio)?

**Formulários:**

- [ ]  Todos os campos têm **`<label>`** associado via atributo **`for`**?
- [X]  Campos obrigatórios estão marcados (atributo **`required`** ou indicação visual)?
- [ ]  Placeholders não substituem labels?

**Navegação por Teclado:**

- [X]  Todos os links e botões são acessíveis via Tab?
- [ ]  O foco está visível (estilo **`:focus`** no CSS)?
- [ ]  Há um skip link ("Pular para o conteúdo principal")?

**Contraste e Legibilidade:**

- [X]  Texto e fundo têm contraste adequado (mínimo 4.5:1)?
- [ ]  Tamanho de fonte é legível (mínimo 16px para texto corrido)?
