$(document).ready(function(){

  var tot = 0;

  $('.submit').on('click', function(){

    if (tot > 0){
      tot = 0;
    }

  $.each($('input:checked'), function(){

  if($(this).attr("class")=== "a"){
    tot += 3;
  }
  else if($(this).attr("class")=== "b"){
    tot += 2;
  }
  else if($(this).attr("class")=== "c"){
    tot += 1;
  }
  else {
    tot = tot;
  };
});

  if (tot >= 0 && tot <= 3){
  $('.results').html("<strong>You are a(n): <br><p align='center'>Improviser</p></strong><p align='center'><img src='http://res.cloudinary.com/dwuwuaov5/image/upload/v1530814156/OR/improviser.png' alt=''></p><p><strong>Traits:</strong> You frequently wait until the last minute to do assignments, but it's because you've been able to get away with this habit in many classes. Sometimes you miss an assignment or two, or have to pretend to have done reading that you have not, but everyone does that sometimes, right?</p>  <p><strong>Strengths:</strong> You think quickly on your feet, and while this is a true strength, it also can be a crutch that prevents you from being really successful in a class.</p>  <p><strong>Challenges: </strong>As the saying goes, old habits die hard. If you find that you lack a foundation of discipline and personal accountability, it can be difficult to change, especially when the course material becomes difficult or you find yourself struggling to keep up with the pace of the class.</p>  <p><strong>Tips for Success: </strong>The good news is, you can turn this around! Make a plan to organize your time and materials in a reasonable way, and really stick with it. Also, don't be afraid to ask your instructor for help, but be sure to do it before, rather than after, you might fall behind.</p>");
}
else if (tot > 3 && tot < 10){
  $('.results').html("<strong>You are a(n): <br><p align='center'>Pressure Cooker</p></strong><p align='center'><img src='http://res.cloudinary.com/dwuwuaov5/image/upload/v1530814156/OR/pressurecooker.png' alt=''></p><p align='left'><strong>Traits:</strong> You always get things done, and almost always at the last minute. Hey, it takes time to really come up with good ideas!</p>  <p><strong>Strengths:</strong> You work well under pressure and when you finally do sit down to accomplish a task, you can sit and work for hours. In these times, you can be extremely focused and shut out the rest of the world in order to get done what needs to be done.</p>  <p><strong>Challenges: </strong>You sometimes use your ability to work under pressure as an excuse to procrastinate. Sure, you can really focus when the deadline is tomorrow, but is it really the best work you could produce if you had a couple of days of cushion?</p>  <p><strong>Tips for Success: </strong>Give yourself small, achievable deadlines, and stick to them. Make sure they're goals that you really could (and would) achieve in a day. Then don't allow yourself to make excuses. You'll find that it's actually a lot more enjoyable to not be stressed out when completing schoolwork. Who would have known?</p>" );
}

else if (tot > 9 && tot < 16){
  $('.results').html("<strong>You are a(n): <br><p align='center'>Balancing Act</p></strong><p align='center'><img src='http://res.cloudinary.com/dwuwuaov5/image/upload/v1530814156/OR/balancingact.png' alt=''></p><p align='left'><strong>Traits:</strong> You really know what you're capable of, and are ready to do what it takes to get the most out of your classes. Maybe you're naturally gifted in this way or maybe it is a skill that you have developed over time; in any case, you should have the basic organizational skills to succeed in any online class, as long as you keep your balance.</p>  <p><strong>Strengths:</strong> Your strength really lies in your ability to be well-rounded. You may not always complete assignments perfectly every time, but you are remarkably consistent and usually manage to do very well in classes.</p>  <p><strong>Challenges: </strong>Because you're so consistent, sometimes you can get in a bit of a rut where you begin to coast in class, rather than really challenging yourself.</p>  <p><strong>Tips for Success: </strong>Instead of simply doing what works, use each class as an opportunity for growth by engaging thoughtfully with the material and constantly pushing the boundaries of your own expectations for yourself.</p>" );
}

else {
  $('.results').html("<strong>You are a(n): <br><p align='center'>Early Bird</p></strong><p align='center'><img src='http://res.cloudinary.com/dwuwuaov5/image/upload/v1530814156/OR/early_bird.png' alt=''></p><p><p align='left'><strong>Traits:</strong> You like to make checklists and feel great satisfaction when you can cross something off of your to-do list. When it comes to assignments, you want to get started as soon as possible (and maybe start brainstorming before that), because it lets you stay in control.</p>  <p><strong>Strengths:</strong> You know what you want and are driven to figure out how to achieve it. Motivation is never really a problem for you.</p>  <p><strong>Challenges: </strong>Sometimes you can get more caught up in getting things done as quickly as possible and don't give yourself enough time to really mull over issues in all of their complexity.</p>  <p><strong>Tips for Success: </strong>You're extremely organized and on top of your schoolwork, so make sure you take time to really enjoy learning in your classes. Remember, school isn't all deadlines and checkboxes—you also have the opportunity to think about big picture intellectual problems that don't necessarily have clear answers.</p>" );
};

$(document).scrollTop($(document).height());
  });

      $(".reset").click(function(){
    	location.reload();
    });
   });