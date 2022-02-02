// Ola, seja bem-vindo ao meu conversor de texto.

function ScriptTexto (){
    const colado = document.querySelector('.cole');
    const selecao = document.querySelectorAll('input');
    let selecionado = '';
    selecao.forEach((item) => {
        item.addEventListener('click', function(){
            selecionado = item.id
        });
    });
    colado.addEventListener('paste', (event) => {
        if(selecionado == 'M'){
            let paste = (event.clipboardData || window.clipboardData).getData('text');
            paste = paste.toUpperCase();
            const resultado = document.querySelector('.resultado');
            resultado.innerHTML = paste;
        };
        if(selecionado == 'm'){
            let paste = (event.clipboardData || window.clipboardData).getData('text');
            paste = paste.toLowerCase();
            const resultado = document.querySelector('.resultado');
            resultado.innerHTML = paste;
        };
        if(selecionado == 'p'){
            let paste = (event.clipboardData || window.clipboardData).getData('text');
            paste = paste.replace(/([!?.]\s+)([a-z])/g, function(m, $1, $2) {
                return $1+$2.toUpperCase();
            });
            const resultado = document.querySelector('.resultado');
            resultado.innerHTML = paste;
        };
        if(selecionado == 'pp'){
            let paste = (event.clipboardData || window.clipboardData).getData('text');
            let pasteCopy = [];
            for(var i = 0; i < paste.length; i++){
                if(paste[i] == ' ' && paste[i+1]){
                    pasteCopy.push(' ');
                    pasteCopy.push(paste[i+1].toUpperCase());
                    i++;
                }else{
                    if(paste[i] !== ' '){
                        pasteCopy.push(paste[i].toLowerCase());
                    };
                };
            };
            paste = '';
            pasteCopy[0] = pasteCopy[0].toUpperCase();
            pasteCopy.forEach((element)=>{
                paste += element;
            });
            const resultado = document.querySelector('.resultado');
            resultado.innerHTML = paste;
        };
    });
};
ScriptTexto();
