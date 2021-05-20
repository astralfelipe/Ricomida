
$(function () {
    //Tooltip
    $('[data-toggle="tooltip"]').tooltip()

    //Toogle
    $(".card-title").click(function() {
        $(".card-text").toggle();
    });

    //Método on y evento onclick
    $("#title").ready(function() {
        $("h6").dbclick(function() {
         $(this).css("color","red");
        })
    })

    
    //Modal
    $("#enviarCorreo").click(function(event) {
        event.preventDefault();
        $('#send_success').modal('show');
    })
});