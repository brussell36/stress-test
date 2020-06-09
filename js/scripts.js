$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    $("#responses").show();
    $("input:checkbox[name=stress-symptoms]:checked").each(function() {
      const stressSymptom = $(this).val();
      $("#responses").append(stressSymptom + "<br>");
      if (stressSymptom === 'Shallow breathing' || 'Impending sense of doom' || 'Inabiility to form coherent sentences' || 'Finding yourself in an unfamiliar place without any idea how you got there' || 'Itchy eyeballs' || "Walking the dog at 3am, but you don't have a dog" || 'Sweating profusely' || 'Buying things compulsively on the internet') {
        $(".Resource1").show();
      }
      else if (stressSymptom === 'Shallow breathing' && 'Impending sense of doom' || 'Inabiility to form coherent sentences' && 'Finding yourself in an unfamiliar place without any idea how you got there' || 'Itchy eyeballs' && "Walking the dog at 3am, but you don't have a dog" || 'Sweating profusely' && 'Buying things compulsively on the internet') {
        $(".Resource2").show();
      } else {
        $(".Resource3").show();
      }
    });
    $('#stress-test').hide();   
  });
});



