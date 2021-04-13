$('#back').hide();
$('#res').hide();
$('.resultat').hide();

$('#corriger').on('click', function() {
    var score = 0;
    var norep = 0;
    var inco = 0;


    //===================qst1==================
    if ($(':radio[id="r1"]:checked').val()) {
        $('#rep1').css('color', 'green');
        $('#qst1').css('color', 'green');
        $('#rep2').css('color', 'red');
        $('#rep3').css('color', 'red');
        score++;


    } else if ($(':radio[id="r2"]:checked').val()) {
        $('#rep1').css('color', 'green');
        $('#qst1').css('color', 'red');
        $('#rep2').css('color', 'red');
        $('#rep3').css('color', 'red');

    } else if ($(':radio[id="r3"]:checked').val()) {
        $('#rep1').css('color', 'green');
        $('#qst1').css('color', 'red');
        // $('#rep2').css('color', 'red');
        $('#rep3').css('color', 'red');

    } else if (!$(':radio[id="r1"]:checked').val() && !$(':radio[id="r2"]:checked').val() && !$(':radio[id="r3"]:checked').val()) {
        $('#qst-rep1').css('color', 'orange');
        norep++;
    }
    //=====================qst2=====================

    if ($(':radio[id="r5"]:checked').val()) {
        $('#rep5').css('color', 'green');
        $('#qst2').css('color', 'green');
        $('#rep4').css('color', 'red');
        $('#rep6').css('color', 'red');
        score++;


    } else if ($(':radio[id="r4"]:checked').val()) {
        $('#rep5').css('color', 'green');
        $('#qst2').css('color', 'red');
        $('#rep4').css('color', 'red');
        $('#rep6').css('color', 'red');

    } else if ($(':radio[id="r6"]:checked').val()) {
        $('#rep5').css('color', 'green');
        $('#qst2').css('color', 'red');
        $('#rep4').css('color', 'red');
        $('#rep6').css('color', 'red');
    } else if (!$(':radio[id="r4"]:checked').val() && !$(':radio[id="r5"]:checked').val() && !$(':radio[id="r6"]:checked').val()) {

        $('#qst-rep2').css('color', 'orange');
        norep++;
    }
    //===================qst3-=======================

    if ($(':radio[id="r7"]:checked').val()) {
        $('#rep7').css('color', 'green');
        $('#qst3').css('color', 'green');
        $('#rep8').css('color', 'red');
        $('#rep9').css('color', 'red');
        score++;


    } else if ($(':radio[id="r8"]:checked').val()) {
        $('#rep7').css('color', 'green');
        $('#qst3').css('color', 'red');
        $('#rep8').css('color', 'red');
        $('#rep9').css('color', 'red');

    } else if ($(':radio[id="r9"]:checked').val()) {
        $('#rep7').css('color', 'green');
        $('#qst3').css('color', 'red');
        $('#rep8').css('color', 'red');
        $('#rep9').css('color', 'red');
    } else if (!$(':radio[id="r7"]:checked').val() && !$(':radio[id="r8"]:checked').val() && !$(':radio[id="r9"]:checked').val()) {
        $('#qst-rep3').css('color', 'orange');
        norep++;
    }

    //===================qst4-=======================

    if ($(':radio[id="r12"]:checked').val()) {
        $('#rep12').css('color', 'green');
        $('#qst4').css('color', 'green');
        $('#rep10').css('color', 'red');
        $('#rep11').css('color', 'red');
        score++;


    } else if ($(':radio[id="r10"]:checked').val()) {
        $('#rep12').css('color', 'green');
        $('#qst4').css('color', 'red');
        $('#rep10').css('color', 'red');
        $('#rep11').css('color', 'red');

    } else if ($(':radio[id="r11"]:checked').val()) {
        $('#rep12').css('color', 'green');
        $('#qst4').css('color', 'red');
        $('#rep10').css('color', 'red');
        $('#rep11').css('color', 'red');
    } else if (!$(':radio[id="r12"]:checked').val() && !$(':radio[id="r11"]:checked').val() && !$(':radio[id="r10"]:checked').val()) {
        $('#qst-rep4').css('color', 'orange');
        norep++;
    }
    //===================qst5-=======================

    if ($(':radio[id="r14"]:checked').val()) {
        $('#rep14').css('color', 'green');
        $('#qst5').css('color', 'green');
        $('#rep13').css('color', 'red');
        $('#rep15').css('color', 'red');
        score++;


    } else if ($(':radio[id="r13"]:checked').val()) {
        $('#rep14').css('color', 'green');
        $('#qst5').css('color', 'red');
        $('#rep13').css('color', 'red');
        $('#rep15').css('color', 'red');

    } else if ($(':radio[id="r15"]:checked').val()) {
        $('#rep14').css('color', 'green');
        $('#qst5').css('color', 'red');
        $('#rep13').css('color', 'red');
        $('#rep15').css('color', 'red');
    } else if (!$(':radio[id="r14"]:checked').val() && !$(':radio[id="r13"]:checked').val() && !$(':radio[id="r15"]:checked').val()) {
        $('#qst-rep5').css('color', 'orange');
        norep++;
    }

    inco = 5 - (score + norep);
    $('#res').show();
    $('.resultat').show();
    $('#norep').fadeIn('slow').text("Questions sans réponse : " + norep).css('color', 'orange');
    $('#inco').fadeIn('slow').text("Réponses incorrectes : " + inco).css('color', 'red');


    $('#score').fadeIn('slow').text("Réponses correctes : " + score + "/5").css('color', 'green');

    $('#back').show();
    $("#corriger").hide();



    $("#back").click(function() {
        location.reload(true);
    });





})