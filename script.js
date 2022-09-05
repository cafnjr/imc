var peso;
var altura;
var imc;
var resultado;


function calcular(){
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso/(altura*altura);
    if( peso == ''){
        alert('Digite o seu peso')
        return false;
    }
     else if( altura == ''){
        alert('Digite a sua Altura')
        return false;

    }else if(imc < 17){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu IMC e:<br/> '+ imc.toFixed(2) + "<br/><h3>Você esta muito abaixo do peso </h3>";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
        return false;
    }else if(imc > 17 && imc < 18.49){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu IMC e:<br/> '+ imc.toFixed(2) + "<br/><h3>Você esta abaixo peso ideal</h3>";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
        return false;
    }else if(imc > 18.49 && imc < 24.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu IMC e:<br/> '+ imc.toFixed(2) + "<br/><h3>Você esta peso ideal</h3>";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
        return false;
    }else if(imc > 24.99){
    resultado = document.getElementById("resultado");
    resultado.innerHTML = '<br/> Seu IMC e:<br/> '+ imc.toFixed(2) + "<br/><h3>Você esta acima do peso </h3>";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    return false;
}


    
}