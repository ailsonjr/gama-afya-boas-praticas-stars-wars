#Gama Academy :)

##Boas Práticas de Desenvolvimento

### Projeto Star Wars Single Page Application

Usado um framework em Javascript end-to-end para redenrizar elementos em HTML, o mesmo já está pré-setado
no [repositório](https://github.com/mrdouglasmorais/template-node-fulljs`) do professor [Douglas Morais](https://github.com/mrdouglasmorais).

##Os pilares de desenvolvimento para boas práticas usados são:

 - [BEM ou Bloco, Elemento e Modificador](http://getbem.com/introduction/):
  - Padrão de nomenclatura CSS que facilita a manutenção do código;

 - [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/):
  - Composto por átomos, moléculas, organismos, templates e página, onde:
  - Átomos - seriam botões, inputs e qualquer elemento interativo;
  - Moléculas - conjunto de átomos, como por exemplo um formulário;
  - Organismos - conjunto de moléculas, como um card onde o formulário está inserido;
  - Templates - componentes com organismos;
  - Pages - Páginas completas.

## Sobre o projeto:

Com um framework pré-setado, foi usado a linguagem SASS para fazer a estilização e o framework possui uma configuração para que, ao rodar o comando *npm run build*, é criado uma pasta chamada **dist** que facilita a implantação do repositório em plataformas de hospedagem, nesse projeto foi usado o [vercel](https://vercel.com/).
Durante o desenvolvimento a página foi dividida em 2 seções, uma imagem que fica no canto inferior esquerdo muda para a segunda seção ao clicá-la e no canto inferior direito da segunda seção jhá outra imagem que ao clicá-la, volta para a primeira seção.

A pagina se encontra hospedada no [link](https://gama-afya-boas-praticas-stars-wars.vercel.app/)

![Page gif](/src/img/GamaAcademy-StarWars.gif)

[Repositório Original](https://github.com/mrdouglasmorais/template-node-fulljs)
