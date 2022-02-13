$('#dashboard').on('click', function(){
    $('#content').toggle()
})

$('#cashMachine').on('click', function(){
    if ($(this).html() == 'Abrir caixa'){
        $(this).html('Fechar caixa')
        $('.alert').html('Caixa aberto com sucesso!').show()
        setTimeout( function(){ 
            $('.alert').hide()
        }, 2000)
    } else {
        $(this).html('Abrir caixa')
        $('.alert').html('Caixa fechado com sucesso!').show()
        setTimeout( function(){ 
            $('.alert').hide()
        }, 2000)
    }
})

var canvas = document.getElementById("barChart");
var ctx = canvas.getContext('2d');
      
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;
      
var data = {
    labels: ["Eletrodoméstico", "Cama, Mesa e Banho", "Esporte e Lazer", "Informática"],
    datasets: [
        {
            fill: true,
            backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)',],
            data: [50, 60, 70, 180],
        }
        ]
};

var options = {
    title: {
        display: true,
        text: 'Principais Categorias',
        position: 'top'
        },
    rotation: -0.7 * Math.PI
};

var myBarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});
      