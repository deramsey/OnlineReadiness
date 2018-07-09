var tips = [
"Having a newer computer will help online classes run smoother and allow you to have compatibility with the latest technology.",
"Taking CIS 110 as a seated course in your first semester will help you improve your basic computer skills.",
"Having high speed internet with WiFi enables you to have a smoother online experience when it is most convenient for you.",
"Taking CIS 110 as a seated course in your first semester will help you improve your internet skills.",
"Try to stay up-to-date with new technology by reading more about it online.",
"Taking CIS 110 as a seated course in your first semester will help you improve your skills with productivity software.",
"Remember that online courses are just as challenging, sometimes more so, as seated courses.",
"Work on being more outgoing in order to more easily communicate with your instructor and your fellow classmates.",
"People learn best in different ways. However, you can also train yourself to learn in different ways. Discuss learning options with your instructor and work extra hard with material that might not fit your preferred learning style.",
"Talk to your advisor about ways to improve your writing skills.",
"Talk to your advisor about ways to improve your reading skills.",
"Try to stay in regular communication with your instructor.",
"If you're having a problem, contact your instructor right away using his or her preferred method of contact in order to get your question answered quickly.",
"Make sure to stay civil in discussions in online classes. Be respectful of your classmates and their opinions.",
"Start making plans for assignments and projects as early as possible. That way, you know you'll get your assignment done on time.",
"Try working on creating habits that will improve your work ethic. Your advisor can give you tips on how to do this.",
"Make sure to maintain a quiet, well-organized workspace. Having a good place to work helps you get the job done.",
"A general rule of thumb is to expect to work about 2 hours outside of class for every class credit hour. So, if you're taking a 3 hour course, you should expect to work, at least, 6 hours on homework.",
"Don't wait to work on your assignments. The longer you put them off, the tougher they'll be able to do. Starting early gives you time to ask questions.",
"Try to maintain a good balance with school, work, and personal life. Sometimes this might mean making sacrifices in order to do something important. Talk about these decisions with your advisor."
];

$(document).ready(function(){

  var tot = 0;

  $("#lastname").hide();
  $("#idin").hide();
  $("#assessment").hide();
  $("#results").hide();
  

  $('.submit').on('click', function(){

    if (tot > 0){
      tot = 0;
    }

var indexloc = 0;

$.each($('input:checked'), function(){

  if($(this).attr("class")=== "a"){
    tot += 3;
    indexloc += 1;
  }
  else if($(this).attr("class")=== "b"){
    tot += 2;
    indexloc += 1;
  }
  else if($(this).attr("class")=== "c"){
    tot += 1;
    $('.extratips').append("<li>" + tips[indexloc] + "</li>");
    indexloc += 1;
  }
  else {
    tot = tot;
    $('.extratips').append("<li>" + tips[indexloc] + "</li>");
    indexloc += 1;
  };
});






if (tot >= 0 && tot <= 29){
  $('.results').html("<strong>Your final score is: " + ((tot * 100)/60).toFixed() + "</strong><br>Based on the results of this assessment, you have quite a bit to work on in order to prepare for success in online courses. You will find some tips for improvement below. It is also strongly suggested that you work through our <a href='http://www.areyouonlineready.com/course'>online readiness course</a> in order to further improve your skills. Please print your results and take them to your advisor.");
}
else if (tot > 29 && tot < 45){
  $('.results').html("<strong>Your final score is: " + ((tot * 100)/60).toFixed() + "</strong><br>Based on the results of this assessment, you're almost ready to be successful in online courses. You just need a little more help to get you where you need to be. You will find some tips for improvement below. It is also suggested that you work through our <a href='http://www.areyouonlineready.com/course'>online readiness course</a> in order to further improve your skills. Please print your results and take them to your advisor.");
}
else {
  $('.results').html("<strong>Your final score is: " + ((tot * 100)/60).toFixed() + "</strong><br><p>Congratulations! Based on the results of this assessment, you have the skills necessary to be successful in online courses. Even though you're already doing very well, there is always room to get even better. You'll find some tips for improvement below. Please print your results and take them to your advisor.");
}

$(".fullname").html($('.fnamein').val() + " " + $('.lnamein').val());

if ($(".idin").val().length > 0){
  $(".studentid").text($(".idin").val());
}
else {
  $(".sid").hide();
};

$("#results").show();
var scrtop = $(document).scrollTop();
$(document).scrollTop(scrtop + 300);
return false;
});

$('.n1').on("click", function(){

$('.name').text($('.fnamein').val());

if(!$('.fnamein').val()){
  $(".frequired").show();
}
else{
  $('.frequired').hide();
  $('#lastname').show();
  $(document).scrollTop($(document).height());
};


});



$('.n2').on("click", function(){

if(!$('.lnamein').val()){
  $(".lrequired").show();
}
else{
  $('.lrequired').hide();
  $('#idin').show();
  $(document).scrollTop($(document).height());
};

});

$('.n3').on("click", function(){
$('#assessment').show();
var scrtop = $(document).scrollTop();
$(document).scrollTop(scrtop + 300);
});


});