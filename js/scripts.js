$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    $("#responses").show();
    $("input:checkbox[name=stress-symptoms]:checked").each(function() {
      const stressSymptom = $(this).val();
      $("#responses").append(stressSymptom + "<br>");
    });
    $('#stress-test').hide();
  });
});