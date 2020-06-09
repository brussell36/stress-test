$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    $("#responses").show();
    $("input:checkbox[name=stress-symptoms]:checked").each(function() {
      let stressSymptom = $(this).val();
      $("#responses").append(stressSymptom + "<br>");
      if (stressSymptom === 'Shallow breathing') {
        $(".Resource1").show();
      } else if (stressSymptom === 'Impending sense of doom') {
        $(".Resource2").show();
      } else {
        $(".Resource3").show();
      }
    });
    $('#stress-test').hide();   
  });
});



