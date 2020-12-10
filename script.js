//pegar o container do texto
const postWrap = document.querySelector('.post-wrap');

//criar a barrinha
 let bar = document.createElement('div');

bar.style.height = "4px";
bar.style.width = "0px";
bar.style.backgroundColor = "#6633cc";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0.2s"

//adiciona no corpo da pagina
document.body.append(bar); 


//atualizar a barrinha



//verificar o movimento do scroll
document.addEventListener('scroll', () => {
    // tamanho da caixa que contem o texto
    const textHeight = postWrap.offsetHeight
    //posicionamento na pagina no eixo  Y
    const pagePositionY = window.pageYOffset

    //regra de 3 
    const updatedBar = pagePositionY * 100 / textHeight
    bar.style.width = updatedBar + "%"
  
})