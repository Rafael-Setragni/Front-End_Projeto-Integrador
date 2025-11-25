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

Estrutura de pastas:
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
        componentes.js(arquivo JS com codigo de reaproveitamento de componentes)
        scriptCarrosel.js(arquivo JS com codigo de carrosel de imagens)
        scriptMensagemBox.js(arquivo JS com codigo de mensagem após o preenchimento do formulario da pagina contato)
        scriptSexo.js(arquivo JS com codigo para a escolha do sexo no formulario da pagina contato)
    }
    rubrica{
        (rubrica)
    }
    
    index.html(arquivo HTML com codigo da pagina inicial)
    sobre.html(arquivo HTML com codigo da pagina sobre)
    sontato.html(arquivo HTML com codigo da pagina contato)
}

Resumo das três partes do projeto:
Parte 1:
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

Parte 2:
    Na segunda parte do projeto foram acrescentados arquivos JavaScript para tornar possível a interação do usuário com o site.

    ⦁   scriptCarrossel.js implementa um carrossel com três imagens para a página inicial.

    ⦁   scriptMensagemBox.js implementa uma mensagem de êxito quando o usuário completa o cadastro na página de contato.

    ⦁   scriptSexo.js implementa uma imagem que muda conforme o sexo escolhido pelo usuário na página de contato.

Parte 3:
    Na terceira parte do projeto foi acrescentado o arquivo componentes.js para que seja feita a reutilização dos códigos presentes na pasta componentes.

    Foi adicionado no arquivo sobre.html o Google Maps Embed para que os usuários possam visualizar o endereço real da academia.

    Foram utilizados dois ícones — WhatsApp e Instagram — no footer para garantir o acesso às redes sociais do CT para entrar em contato.

Instruções de como rodar o projeto localmente:
    1. Clonar o repositório
    Utilize o comando abaixo para clonar o repositório diretamente do GitHub:
    Comando: git clone https://github.com/Rafael-Setragni/Front-End_Projeto-Integrador.git

    2. Acessar o diretório do projeto
    Após a clonagem, entre na pasta do projeto:
    Comando: cd Front-End_Projeto-Integrador

    3. Abrir o projeto em um editor de código (opcional)
    Caso deseje editar ou analisar os arquivos, abra o projeto em seu editor de preferência, como o Visual Studio Code:
    Comando: code .

    4. Executar o projeto
    Este é um projeto desenvolvido utilizando HTML, CSS e JavaScript. Portanto, não é necessário instalar dependências ou configurar ambientes adicionais.
    Para visualizar o site:
    1-Localize o arquivo index.html na pasta do projeto.
    2-Abra o arquivo diretamente no navegador de sua preferência.

    (Opcional) Utilizando um servidor local
    Para uma navegação mais fluida, recomenda-se utilizar um servidor local. Caso utilize o Visual Studio Code:
    1-Instale a extensão Live Server.
    2-Clique com o botão direito no arquivo index.html.
    3-Selecione "Open with Live Server".