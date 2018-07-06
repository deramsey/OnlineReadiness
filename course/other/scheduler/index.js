var times = {
p0: {time: "8:00 AM", timeval: "0"},
p1: {time: "8:30 AM", timeval: "1"},
p2: {time: "9:00 AM", timeval: "2"},
p3: {time: "9:30 AM", timeval: "3"},
p4: {time: "10:00 AM", timeval: "4"},
p5: {time: "10:30 AM", timeval: "5"},
p6: {time: "11:00 AM", timeval: "6"},
p7: {time: "11:30 AM", timeval: "7"},
p8: {time: "12:00 PM", timeval: "8"},
p9: {time: "12:30 PM", timeval: "9"},
p10: {time: "1:00 PM", timeval: "10"},
p11: {time: "1:30 PM", timeval: "11"},
p12: {time: "2:00 PM", timeval: "12"},
p13: {time: "2:30 PM", timeval: "13"},
p14: {time: "3:00 PM", timeval: "14"},
p15: {time: "3:30 PM", timeval: "15"},
p16: {time: "4:00 PM", timeval: "16"},
p17: {time: "4:30 PM", timeval: "17"},
p18: {time: "5:00 PM", timeval: "18"},
p19: {time: "5:30 PM", timeval: "19"},
p20: {time: "6:00 PM", timeval: "20"},
p21: {time: "6:30 PM", timeval: "21"},
p22: {time: "7:00 PM", timeval: "22"},
p23: {time: "7:30 PM", timeval: "23"},
p24: {time: "8:00 PM", timeval: "24"},
p21: {time: "8:30 PM", timeval: "25"},
p22: {time: "9:00 PM", timeval: "26"},
p23: {time: "9:30 PM", timeval: "27"},
p24: {time: "10:00 PM", timeval: "28"}
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

