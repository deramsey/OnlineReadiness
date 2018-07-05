var tot = 0;

$('.a1').draggable({
    revert: "invalid",
	  refreshPositions: true,
	  cursor: "move"

});
$('.b1').draggable({
    revert: "invalid",
	  refreshPositions: true,
	  cursor: "move"

});

$('.a').droppable({
  accept: ".a1",
        drop: function( event, ui ) {
        $( this )
        $(ui.draggable).css('backgroundColor', 'green');
        $(ui.draggable).css('color', 'white');
        tot += 1;
        if (tot === $(".a1").length + $(".b1").length){
        alert("Congratulations! You sorted everything correctly. Close this window to continue.");
};
        }
});

$('.b').droppable({
  accept: ".b1",
        drop: function( event, ui ) {
        $( this )
        $(ui.draggable).css('backgroundColor', 'green');
        $(ui.draggable).css('color', 'white');
        tot += 1;
        if (tot === $(".a1").length + $(".b1").length){
        alert("Congratulations! You sorted everything correctly. Close this window to continue.");
};
        }
});

    $("button").click(function(){
    	location.reload();
    });
