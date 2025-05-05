$('#catalog').on('mouseenter', function() {
    anime({
        targets: '#catalog',  // Обрати внимание на правильный селектор
        filter: ['invert(0)', 'invert(1)'],
        duration: 200,
        loop: false,
        easing: 'easeInOutSine',
    });
});

$('#catalog').on('mouseleave', function() {
    anime({
        targets: '#catalog',  // Обрати внимание на правильный селектор
        filter: ['invert(1)', 'invert(0)'],
        duration: 200,
        loop: false,
        easing: 'easeInOutSine',
    });
});
const title = document.querySelector('#name')
const price = document.querySelector("#price");
$('#catalog').on('click', function(){
    window.location.href = 'catalog.html';
});
$('#balencers').on('click', function(){
    window.location.href = 'index.html';
});
$('#user').on('click', function(){
    window.location.href = 'form.html';
});

let item = 0

$('#1').on('click', function(){
    window.location.href = 'item.html?id=1';
});
$('#2').on('click', function(){
    window.location.href = 'item.html?id=2';
});
$('#3').on('click', function(){
    window.location.href = 'item.html?id=3';
});
$('#4').on('click', function(){
    window.location.href = 'item.html?id=4';
});

let condition = true;
function forwards() {
    anime({
        targets: '.burger',
        translateX: ['-100%', '0'],
        backgroundColor: ['white', 'black'],
        color: 'white',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false
}
function backwards() {
    anime({
        targets: '.burger',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
}

$('#love').click(function () {
    if (condition) {
        forwards();
    } else {
        backwards();
    }
});