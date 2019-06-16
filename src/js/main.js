// slider z wiekiem/////////////////////////////////////////
var $range = $('.range');

$range.each(function () {

    var $age = $(this).next('.age');
    let max = this.max;
    let tw = 180; 

    $(this).on('input input.range', function () {

        let w = $(this).width();
        let val = this.value;
        let txt = val;
        let xPX = (val * 4) * (w - tw) / max * 0.7;

        $age.css({ left: xPX - 120 }).attr("data-val", txt);

    });

});
$range.trigger('input.range');
$(window).on("resize", () => $range.trigger("input.range"));
////////////////////////////////////////////////////////////
var $rangeP = $('.rangeP');

$rangeP.each(function () {

    var $period = $(this).next('.period');
    let max = this.max;
    let tw = 60; 

    $(this).on('input input.rangeP', function () {

        let w = $(this).width();
        let val = this.value;
        let txt = "do " + val + " lat";
        let xPX = (val * 2.5) * (w - tw) / max * 0.5;

        $period.css({ left: xPX -165 }).attr("data-val", txt);

    });

});
$range.trigger('input.rangeP');
$(window).on("resize", () => $range.trigger("input.rangeP"));
