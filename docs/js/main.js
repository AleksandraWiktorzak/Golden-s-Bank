// licznik////////////////////////////////////////
jQuery(document).ready(function ($) {
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

        $period.css({ left: xPX - 165 }).attr("data-val", txt);

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

        $amount.css({ left: xPX - 140 }).attr("data-val", txt);

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

f1.addEventListener('click', function () {
    var n = $("input:checked").length;
    if (n === 0) {
        $h3.className = 'alert'
    } else {
        $nr1[0].style.display = 'none';
        $nr2[0].style.display = 'grid';

    }
})
f2.addEventListener('click', function () {
    $nr2[0].style.display = 'none';
    $nr3[0].style.display = 'grid';
})
f3.addEventListener('click', function () {

    $nr3[0].style.display = 'none';
    $nr4[0].style.display = 'grid';
})

var monkey = new RegExp('@')
var dot = new RegExp('.')
var numbers = new RegExp('[0-9]')
var letters = new RegExp('[A-Z]')
var signs = new RegExp('(#|!|$)')
var letters1 = new RegExp('[a-z]')

f4.addEventListener('click', function () {
    var $name = document.getElementById('name')
    var $telephone = document.getElementById('telephone')
    var $email = document.getElementById('email')

    var valiT = letters1.test($telephone.value)
    var valiT1 = letters.test($telephone.value)
    var valiE = monkey.test($email.value)
    var valiE1 = dot.test($email.value)
    var valiN = numbers.test($name.value)
    var valiN1 = letters.test($name.value)

    if ($name.value == '' || $telephone.value == '' || $email.value == '') {
        alert('Wypełnij wszystkie pola.')
        $name.value==''? $name.style.borderColor = 'red': $name.style.borderColor = '$bisque';
        $telephone.value == ''?$telephone.style.borderColor = 'red': $telephone.style.borderColor = '$bisque';
        $email.value == ''?$email.style.borderColor = 'red': $email.style.borderColor = '$bisque';
    }
    else {
        if (valiN == true) {
            alert('Imie nie może zawierać cyfr.')
            $name.style.borderColor = 'red'
        } else if ($name.value.length < 3) {
            alert('Imię musi mieć conajmniej 3 litery')
            $name.style.borderColor = 'red'
        } else {
            if (valiN1 == false) {
                alert('Imie powinno zaczynać się z wielkiej Litery.')
                $name.style.borderColor = 'red'
            } else {
                if ($telephone.value.length < 9) {
                    alert('Numer telefonu powinien mieć 9 cyfr.')
                    $name.style.borderColor = '$bisque'
                    $telephone.style.borderColor = 'red'
                } else if (valiT == true || valiT1 == true) {
                    alert('Numer nie może zawierać liter')
                    $telephone.style.borderColor = 'red'
                } else {
                    if (valiE == false || valiE1 == false) {
                        $telephone.style.borderColor = '$bisque'
                        $email.style.borderColor = 'red'
                        alert('Email powinien zawierać znak małpki "@" oraz kropkę.')
                    } else {
                        $nr4[0].style.display = 'none';
                        $formEnd[0].style.display = 'grid'
                    }
                }
            }

        }
    }


})