const calcular = document.getElementById('btnCalcular');
function CalcularIMC () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('pResultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso/(altura**2)).toFixed(1);
        const pesoidealmin = (18.5 * altura**2).toFixed(1);;
        const pesoidealmax = (24.9 * altura**2).toFixed(1);
        let classificacao = '';
        let sugestao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';

            resultado.classList.remove('alert-danger');
            resultado.classList.remove('alert-warning');
            resultado.classList.remove('alert-success');
            resultado.classList.add('alert-danger');

            sugestao = 'Tente ficar com o peso entre ' + pesoidealmin + ' e ' + pesoidealmax + '.';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
            resultado.classList.remove('alert-danger');
            resultado.classList.remove('alert-warning');
            resultado.classList.remove('alert-success');
            resultado.classList.add('alert-success');
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';

            resultado.classList.remove('alert-danger');
            resultado.classList.remove('alert-warning');
            resultado.classList.remove('alert-success');
            resultado.classList.add('alert-success');

            sugestao = 'Tente ficar com o peso entre ' + pesoidealmin + ' e ' + pesoidealmax + '.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I. Tome cuidado!';

            resultado.classList.remove('alert-danger');
            resultado.classList.remove('alert-warning');
            resultado.classList.remove('alert-success');
            resultado.classList.add('alert-warning');

            sugestao = 'Tente ficar com o peso entre ' + pesoidealmin + ' e ' + pesoidealmax + '.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II. Atenção à sua saúde!';

            resultado.classList.remove('alert-danger');
            resultado.classList.remove('alert-warning');
            resultado.classList.remove('alert-success');
            resultado.classList.add('alert-warning');

            sugestao = 'Tente ficar com o peso entre ' + pesoidealmin + ' e ' + pesoidealmax + '.';
        }else{
            classificacao = 'com obesidade grau III.';

            resultado.classList.remove('alert-danger');
            resultado.classList.remove('alert-warning');
            resultado.classList.remove('alert-success');
            resultado.classList.add('alert-danger');

            sugestao = 'Tente ficar com o peso entre ' + pesoidealmin + ' e ' + pesoidealmax + '.';
        }

        resultado.textContent = `Olá, ${nome}! Com ${peso}kg e ${altura}m, seu IMC é ${valorIMC}. Atualmente, você está ${classificacao} ${sugestao}`;
    }else {
        resultado.classList.add('alert-danger');
        resultado.textContent = 'Para calcular o seu IMC, preencha todos os campos.';
    }
}
calcular.addEventListener('click', CalcularIMC);