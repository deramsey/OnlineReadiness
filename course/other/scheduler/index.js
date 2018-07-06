var times = {
p0: {time: "12:00 AM", timeval: "0"},
p1: {time: "12:30 AM", timeval: "1"},
p2: {time: "1:00 AM", timeval: "2"},
p3: {time: "1:30 AM", timeval: "3"},
p4: {time: "2:00 AM", timeval: "4"},
p5: {time: "2:30 AM", timeval: "5"},
p6: {time: "3:00 AM", timeval: "6"},
p7: {time: "3:30 AM", timeval: "7"},
p8: {time: "4:00 AM", timeval: "8"},
p9: {time: "4:30 AM", timeval: "9"},
p10: {time: "5:00 AM", timeval: "10"},
p11: {time: "5:30 AM", timeval: "11"},
p12: {time: "6:00 AM", timeval: "12"},
p13: {time: "6:30 AM", timeval: "13"},
p14: {time: "7:00 AM", timeval: "14"},
p15: {time: "7:30 AM", timeval: "15"},
p16: {time: "8:00 AM", timeval: "16"},
p17: {time: "8:30 AM", timeval: "17"},
p18: {time: "9:00 AM", timeval: "18"},
p19: {time: "9:30 AM", timeval: "19"},
p20: {time: "10:00 AM", timeval: "20"},
p21: {time: "10:30 AM", timeval: "21"},
p22: {time: "11:00 AM", timeval: "22"},
p23: {time: "11:30 AM", timeval: "23"},
p24: {time: "12:00 PM", timeval: "24"},
p25: {time: "12:30 PM", timeval: "25"},
p26: {time: "1:00 PM", timeval: "26"},
p27: {time: "1:30 PM", timeval: "27"},
p28: {time: "2:00 PM", timeval: "28"},
p29: {time: "2:30 PM", timeval: "29"},
p30: {time: "3:00 PM", timeval: "30"},
p31: {time: "3:30 PM", timeval: "31"},
p32: {time: "4:00 PM", timeval: "32"},
p33: {time: "4:30 PM", timeval: "33"},
p34: {time: "5:00 PM", timeval: "34"},
p35: {time: "5:30 PM", timeval: "35"},
p36: {time: "6:00 PM", timeval: "36"},
p37: {time: "6:30 PM", timeval: "37"},
p38: {time: "7:00 PM", timeval: "38"},
p39: {time: "7:30 PM", timeval: "39"},
p40: {time: "8:00 PM", timeval: "40"},
p41: {time: "8:30 PM", timeval: "41"},
p42: {time: "9:00 PM", timeval: "42"},
p43: {time: "9:30 PM", timeval: "43"},
p44: {time: "10:00 PM", timeval: "44"},
p45: {time: "10:30 PM", timeval: "45"},
p46: {time: "11:00 PM", timeval: "46"},
p47: {time: "11:30 PM", timeval: "47"}
};

$(document).ready(function(){

function addtimes(val){
  $.each(times, function(i, value){
  $(val).append("<option value='" + times[i]["timeval"] + "'>" + times[i]["time"] + "</option>")
});
};

function inner(){$(".input").append("<tr class='innersched'><td><input type='text'></td><td><input class='daycheck' type='checkbox' name='days' value='sun'></td><td><input type='checkbox' class='daycheck' name='days' value='mon'></td><td><input type='checkbox' class='daycheck' name='days' value='tue'></td><td><input type='checkbox' class='daycheck' name='days' value='wed'></td><td><input type='checkbox' class='daycheck' name='days' value='thu'></td><td><input type='checkbox' class='daycheck' name='days' value='fri'></td><td><input type='checkbox' class='daycheck' name='days' value='sat'></td><td><select class='times1'> </select></td><td><select class='times2'> </select></td></tr>");
addtimes("select");
}

inner();


$(".addrow").on("click", function(){
inner();
});

$(".test").on("click", function(){
$('.innersched').each(function(i, el){
  $(".daycheck:checked").each(function(i, el){
var thisday = $(this).val();
var hourone = $(this).parents(".innersched").find($(".times1 option:selected")).val();
var hourtwo = $(this).parents(".innersched").find($(".times2 option:selected")).val();
var classname = $(this).parents(".innersched").find($("input[type=text]")).val();

$("." + thisday + hourone).text(classname);

var i = hourone;
while(i <= hourtwo){
  $('.' + thisday + i).addClass("choice");
  i++;
}

});
});
});
    $(".reset").click(function(){
    	location.reload();
    });
});

