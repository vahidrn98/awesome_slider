$(document).ready(function(){
    $("#flat-slider")
    .slider({
        animate: "slow",
        max: 10,
        step: .0001,
        min: 0,
        range: false
    })
    .slider("pips", {
        first: "pip",
        last: "pip"
    })
    .slider({
        slide: function( event, ui ) {
            $(".absolute").animate({bottom : -6*(ui.value/10)*100 +"%"},1);
        }
    });

    $(".ui-slider-handle").append('<div class="mycontainer"><div class="absolute"><div class="glyph-icon flaticon-emoticon-in-love-face-with-heart-shaped-eyes-in-square-outline"></div><div class="glyph-icon flaticon-emoticon-square-smiling-face-with-closed-eyes"></div><div class="glyph-icon flaticon-emoticon-square-face-with-straight-mouth-and-eyes-lines"></div><div class="glyph-icon flaticon-doubt-on-emoticon-square-face"></div><div class="glyph-icon flaticon-bad-emoticon-square-face"></div><div class="glyph-icon flaticon-anger-emoticon-square-face"></div></div></div>');
});