$(document).ready(function(){
var val1 = 0;
var val2 = 0;
var val3 = 0;
var val4 = 0;
var val5 = 0;
var val6 = 0;
var val7 = 0;
var val8 = 0;
var val9 = 0;

$('input').on('keyup', function(){

if ($('.1').val()>0){
val1 = parseInt($('.1').val());
}

if ($('.2').val()>0){
val2 = parseInt($('.2').val());
}

if ($('.3').val()>0){
val3 = parseInt($('.3').val());
}

if ($('.4').val()>0){
val4 = parseInt($('.4').val());
}

if ($('.5').val()>0){
val5 = parseInt($('.5').val());
}
if ($('.6').val()>0){
val6 = parseInt($('.6').val());
}
if ($('.7').val()>0){
val7 = parseInt($('.7').val());
}
if ($('.8').val()>0){
val8 = parseInt($('.8').val());
}
if ($('.9').val()>0){
val9 = parseInt($('.9').val());
}

if ($('.1').val().length === 0){
val1 = 0;
}

if ($('.2').val().length === 0){
val2 = 0;
}

if ($('.3').val().length === 0){
val3 = 0;
}

if ($('.4').val().length === 0){
val4 = 0;
}

if ($('.5').val().length === 0){
val5 = 0;
}

if ($('.6').val().length === 0){
val6 = 0;
}

if ($('.7').val().length === 0){
val7 = 0;
}

if ($('.8').val().length === 0){
val8 = 0;
}

if ($('.9').val().length === 0){
val9 = 0;
}

var num =  val1 + val2 + val3+ val4 + val5 + val6 + val7 + val8 + val9;

$('progress').attr('value', num);
var hour = 24 - num;

$('.tot').text(num);

if (num < 25 && num >= 0){

$('.hours').html(hour);
  $('.monty').attr("src", "http://res.cloudinary.com/dwuwuaov5/image/upload/v1530883465/OR/monty.png");
}
else{
  $('.hours').html(hour + " <br> <span class='red'>You have more hours in your schedule than you have in a day. Please enter a total of 24 hours above.</span>");
  $('.monty').attr("src", "http://res.cloudinary.com/dwuwuaov5/image/upload/v1530883465/OR/nervous.png");
};

});
});