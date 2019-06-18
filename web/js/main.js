// licznik////////////////////////////////////////
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 1,
        time: 1000
    });
});

// slider z wiekiem/////////////////////////////////////////
var $range = $('.range');

$range.each(function () {

    var $age = $(this).next('.age');
    let max = this.max;
    let tw = 180; 

    $(this).on('input input.range', function () {

        let w = $(this).width();
        let val = this.value;
        let txt = val + ' lat';
        let xPX = (val * 4) * (w - tw) / max * 0.7;

        $age.css({ left: xPX - 120 }).attr("data-val", txt);

    });

});
$range.trigger('input.range');
$(window).on("resize", () => $range.trigger("input.range"));
///////////////slider z czasem kredytu//////////////////////
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
////////////////////////////slider z kwotą///////////////////
var $rangeA = $('.rangeA');

$rangeA.each(function () {

    var $amount = $(this).next('.amount');
    let max = this.max;
    let tw = 60; 

    $(this).on('input input.rangeA', function () {

        let w = $(this).width();
        let val = this.value;
        let txt = val + " tys";
        let xPX = (val * 2.8) * (w - tw) / max * 0.4;

        $amount.css({ left: xPX -140 }).attr("data-val", txt);

    });

});
$range.trigger('input.rangeA');
$(window).on("resize", () => $range.trigger("input.rangeA"));
////////obsługa przycisków///////////////////////////////////
var $nr1 = document.getElementsByClassName('nr1');
var $nr2 = document.getElementsByClassName('nr2');
var $nr3 = document.getElementsByClassName('nr3');
var $nr4 = document.getElementsByClassName('nr4');
var $formEnd = document.getElementsByClassName('form-end')

var f1 = document.getElementById('f1');
var f2 = document.getElementById('f2');
var f3 = document.getElementById('f3');
var f4 = document.getElementById('f4');
var $h3 = document.getElementById('h3-credit')

f1.addEventListener('click', function(){
    var n = $( "input:checked" ).length;
    if(n===0){$h3.className = 'alert'
}else{
    $nr1[0].style.display = 'none';
    $nr2[0].style.display = 'grid';

}  
})
f2.addEventListener('click', function(){
    $nr2[0].style.display = 'none';
    $nr3[0].style.display = 'grid';
})
f3.addEventListener('click', function(){
    
      $nr3[0].style.display = 'none';
    $nr4[0].style.display = 'grid';    
})

        var monkey= new RegExp('@')
        var dot = new RegExp('.')
        var numbers = new RegExp('[^0-9]')
        var letters=new RegExp('[a-z]')
        var signs = new RegExp('(#|!|$)')

    f4.addEventListener('click', function(){
        var $name = document.getElementById('name')
        var $telephone = document.getElementById('telephone')
        var $email = document.getElementById('email')

        
        var valiE = monkey.test($email.value)
        var valiE1 = dot.test($email.value)
        var valiE2 = letters.test($email.value)
        console.log(valiE)
        console.log(valiE1)
        console.log(valiE2)

        var valiN= numbers.test($name.value)
        if(valiN==true ){
            $nr4[0].style.display = 'none';
            $formEnd[0].style.display = 'grid'
        }else{
            $name.style.borderColor = 'red';
            window.alert("Nie zawieraj cyfr w swoim imieniu.")
        }

        if(valiE == true && valiE1==true && valiE2==true ){
            $nr4[0].style.display = 'none';
            $formEnd[0].style.display = 'grid'
        }else{
            $email.style.borderColor = 'red';
            window.alert("Twój email musi zawierać '@' oraz '.'. Nie używaj niedozwolonych znaków: !,#,$,%.")
        }
        // zrobić coś zeby nie wyskakiwaly 2 alerty na raz


              
        
  })