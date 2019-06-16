var $range = $('.range');

$range.each(function () {

    var $thumb = $(this).next('.age');
    var max = this.max;
    //   parseInt(this.max, 10);
    var tw = 180; // Thumb width. See CSS

    $(this).on('input input.range', function () {

        var w = $(this).width();
        var val = this.value;
        // parseInt(this.value, 10);
        var txt = val;
        var xPX = (val * 4) * (w - tw) / max * 0.7; // Position in PX
        // var xPC = xPX * 100 / w;     // Position in % (if ever needed)

        $thumb.css({ left: xPX - 120 }).attr("data-val", txt);

    });

});

$range.trigger('input.range'); // Calc on load
$(window).on("resize", () => $range.trigger("input.range")); // and on resize