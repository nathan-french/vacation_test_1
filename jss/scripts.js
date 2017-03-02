$(document).ready(function() {

  $('.radio').change(function(){
    var select = $("input:radio[name=selector]:checked").val();


    $(".wiki").hide();


    var no_1 = $("no_1");

    if (select === "no_1") {
      $(".output_1").show();
    } else if (select === "yes_1") {
      $(".output_2").show();
    } else if (select === "yes_2") {
      $(".output_3").show();
    } else if (select === "no_2") {
      $(".output_4").show();
    } else if (select === "yes_3") {
      $(".output_5").show();
    }else if (select === "no_3") {
      $(".output_6").show();
    }else if (select === "yes_4") {
      $(".output_7").show();
    }else if (select === "no_4") {
      $(".output_8").show();
    }else if (select === "yes_5") {
      $(".output_9").show();
    }else if (select === "no_5") {
      $(".output_10").show();
    }

 //comment



    console.log("no_1:" + no_1 )
    console.log("radio:" + select)
  });
});
