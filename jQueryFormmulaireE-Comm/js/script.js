 $(function() {
     $('#feedback').hide()

     $("#submit").click(function() {
         var valider = true;
         if ($("#nom").val() == "") {
             $("#nom").next(".message").fadeIn().text('* veuillez taper votre nom').css('color', 'red');;
             valider = false;
         } else if (!$("#nom").val().match(/^[a-zA-Z]+$/u)) {
             $("#nom").next(".message").fadeIn().text('* veuillez taper un nom convenable').css('color', 'red');
             valider = false;
         } else {
             $("#nom").next(".message").fadeOut();
             $("#nom").next(".message").fadeIn().text('* validé').css('color', 'green');
         }



         if ($("#prénom").val() == "") {
             $("#prénom").next(".message").fadeIn().text('* veuillez taper votre prénom').css('color', 'red');
             valider = false;
         } else if (!$("#prénom").val().match(/^[a-zA-Z]+$/u)) {
             $("#prénom").next(".message").fadeIn().text('* veuillez taper un prénom convenable').css('color', 'red');
             valider = false;
         } else {
             $("#prénom").next(".message").fadeOut();
             $("#prénom").next(".message").fadeIn().text('* validé').css('color', 'green');
         }
         if ($("#Adresse").val() == "") {
             $("#Adresse").next(".message").fadeIn().text('* veuillez taper votre Adresse').css('color', 'red');
             valider = false;
         } else {
             $("#Adresse").next(".message").fadeOut();
             $("#Adresse").next(".message").fadeIn().text('* validé').css('color', 'green');
         }


         if ($("#Email").val() == "") {
             $("#Email").next(".message").fadeIn().text('* veuillez taper votre Adresse email').css('color', 'red');
             valider = false;
         } else if (!$("#Email").val().match(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i)) {
             $("#Email").next(".message").fadeIn().text('* veuillez taper un adresse email convenable').css('color', 'red');
             valider = false;
         } else {
             $("#Email").next(".message").fadeOut();
             $("#Email").next(".message").fadeIn().text('* validé').css('color', 'green');

         }

         if ($("#Password").val() == "") {
             $("#Password").next(".message").fadeIn().text('* veuillez taper un mote de pass').css('color', 'red');
             valider = false;
         } else if (!$("#Password").val().match(/^[a-zA-Z0-9-]$/u) && $("#Password").val().length < 8) {
             $("#Password").next(".message").fadeIn().text('* Au moins 8 caractères').css('color', 'red');
             valider = false;
         } else {
             $("#Password").next(".message").fadeOut();
             $("#Password").next(".message").fadeIn().text('* validé').css('color', 'green');


         }

         if ($("#Password2").val() == "") {
             $("#Password2").next(".message").fadeIn().text('* veuillez taper un mote de pass').css('color', 'red');
             valider = false;
         } else if ($("#Password2").val() != $("#Password").val()) {
             $("#Password2").next(".message").fadeIn().text("* mote de pass n'est pas identique ").css('color', 'red');
             valider = false;
         } else {
             $("#Password2").next(".message").fadeOut();
             $("#Password2").next(".message").fadeIn().text('* validé').css('color', 'green');

         }
         if ($("#phone").val() == "") {
             $("#phone").next(".message").fadeIn().text('* veuillez taper votre numéro télephone').css('color', 'red');
             valider = false;
         } else if (!$("#phone").val().match(/^[0-9]$/u) && $("#phone").val().length < 9) {
             $("#phone").next(".message").fadeIn().text("* numéro télephone n'est pas validé  ").css('color', 'red');
             valider = false;
         } else {
             $("#phone").next(".message").fadeOut();
             $("#phone").next(".message").fadeIn().text('* validé').css('color', 'green');


         }
         if ($("#pays").val() == "pays") {
             $('#pays').next(".message").fadeIn().text('*Obligatoire').css('color', 'red');

             valider = false;
         } else {
             $('#pays').next(".message").fadeOut();

         }

         if ($(':radio[id="celeb"]:checked').val() || $(':radio[id="marie"]:checked').val() || $(':radio[id="divo"]:checked').val() || $(':radio[id="veu"]:checked').val()) {

             $('#radios').next(".message").fadeOut();


         } else {
             $('#radios').next(".message").fadeIn().text('*Obligatoire').css('color', 'red');
             valider = false;

         }
         if (valider) {
             $('#feedback').show()
         }

         return valider;

     });



 });