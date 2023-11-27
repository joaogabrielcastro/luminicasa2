const header = document.querySelector('header');
header.addEventListener('submit', function () {
    console.log('teste');
});

let arandela = document.getElementById('arandela');
arandela.addEventListener('submit', function (){
    arandela = 1500;
    console.log(arandela);
});


