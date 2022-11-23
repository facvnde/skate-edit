//crio a constantes para o body, botão e o menu
const body			= document.querySelector("body");
const botaoMenu		= document.querySelector(".botao-menu");
const menuLateral	= document.querySelector(".menu-lateral");

//crio o evento para que se abra e feche o menu ao ser clicado
botaoMenu.addEventListener('click', ()=>{
	menuLateral.classList.toggle('menu-lateral-aberto');
	body.classList.toggle('fixo');
});