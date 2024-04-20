

const indice = document.getElementById('#formato');
let tabela = document.getElementById('#tabela');

addEventListener('click', () => {
    document.getElementById("formato").innerHTML =
        "PORTAL DE TODAS LAS NOTiCIAS DEL MUNDO DE LA VELOCIDAD"
  return
});



    

document.getElementById('crearTarjetas').addEventListener('click', () => {
    var contenedorTarjetas = document.getElementById('contenedorTarjetas');
    var card = document.createElement('div');
    card.classname = 'card';
    card.textContent = 'Circuito Internacional de Baréin, ubicado en la zona desértica de Sakhir, a aproximadamente 31 km de la capital Manama​ Ciudad Sakhir'
    
    contenedorTarjetas.appendChild(card);
    colorTabela();
});


const colorTabela = document.getElementById('#tabela-01');

colorTabela(click, () => { }); 

    






