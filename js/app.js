"use strict";

class Imagem{
	constructor(cod, nome, imagem){
		this.cod = cod;
		this.nome = nome;
		this.imagem = imagem;
	}

	/*
		Recebe varável JSON
	*/
	lista(imagens){
		var lista = document.getElementsByClassName("container")[0];
		for (var i = 0; i < imagens.length; i++) {
			
			let imagemAtual = new Imagem(imagens[i].cod, imagens[i].nome, imagens[i].imagem);
			var componenteDiv, componenteTitulo, componenteImagem;
			
			//imagemAtual.mostraNaTela(imagemAtual);

			componenteDiv	 = imagemAtual.criaComponente("div");
			componenteTitulo = imagemAtual.criaComponente("h2");
			componenteImagem = imagemAtual.criaComponente("img");

			componenteDiv.classList.add("coluna");
			componenteTitulo.innerHTML = imagemAtual.nome;
			componenteImagem.setAttribute("src", imagemAtual.imagem);

			componenteDiv.appendChild(componenteTitulo);
			componenteDiv.appendChild(componenteImagem);

			lista.appendChild(componenteDiv);
			
		}
	}

	mostraNaTela(im){
		console.log(im.cod);
		console.log(im.nome);
		console.log(im.imagem);
	}

	criaComponente(elemento){
		return document.createElement(elemento);
	}
}

var imagens = [
	{
		cod: 1,
		nome: "Magnetismo",
		imagem: "img/01.jpg"
	},
	{
		cod: 2,
		nome: "E.T",
		imagem: "img/02.jpg"
	},
	{
		cod: 3,
		nome: "ACDC",
		imagem: "img/03.jpg"		
	},
	{
		cod: 4,
		nome: "Rio de Janeiro",
		imagem: "img/04.jpg"		
	}
]

let imagem = new Imagem();
imagem.lista(imagens);