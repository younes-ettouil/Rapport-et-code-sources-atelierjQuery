$(function() {

    $(".digit").click(function() {
        $("#zero").val("");
        $("#screen").val($("#screen").val() + $(this).val());
    });
    $("#clearCE").click(function() {
        $("#screen").val($("#screen").val().slice(0, -1));
    });
    $("#clearC").click(function() {
        $("#screen").val("");
    });

    $("#equal").click(function() {
        $("#screen").val(eval($("#screen").val()));
    });


});