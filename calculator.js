const syms=document.querySelectorAll('.sym');
const screen=document.querySelector('#screen');
const ex=document.querySelector('#ex');

syms.forEach((sym)=>{
	sym.addEventListener('click',(e)=>{
		screen.innerText+=sym.innerText;
	})
})

ex.addEventListener('click',(e)=>{
	screen.innerText=eval(screen.innerText);
})

