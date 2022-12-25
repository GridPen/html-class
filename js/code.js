$(document).ready(function () {
  $("#portfolio:first").click(function () {
    $("#portfolio:last").fadeToggle(3000);
  });
  $("#servay-form").submit(function () {
    alert("thank you buddy!");
    $("#servay-form").prepend(
      "<div class='alert alert-primary' role='alert' > Thanks " +
        $("#servay-form input[type='text']").val() +
        ", for your vote! </div>"
    );
    $(".main_form").remove();
    return false;
  });
  $("tr").hover(function () {
    $(this).toggleClass("highlight");
  });
  $("#main_form").parent().after("<h2> This a table</h2>"); // need to fix its not working
});
