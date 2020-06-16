let color = "purple";
let number = 5;
let word = "cool";

if (color = 'purple'){
    $('.red').css('background-color', 'purple');
}
if (number > 100){
    $('.yellow').text('whoah, thats a big number!')
}else {
    $('.yellow').text('just a regular number, please.')
}
if (word = 'cool'){
    $('.lightblue').text('Power of DOM')
}else {
    $('.darkblue').text('Power of DOM')
}
/*$('#fox-1').text('Macrotis');
$('#fox-2').css('border-color', 'purple');
$('p').css('background-color', 'yellow');*/