(document).ready(function(){
    $("#action1").click(function(){
      $("#collapsible1").show();
      $("#action1").hide();
    });
    $("#collapsible1").click(function(){
      $("#action1").show();
      $("#collapsible1").hide();
    });
  
    $("#action2").click(function(){
      $("#collapsible2").show();
      $("#action2").hide();
    });
    $("#collapsible2").click(function(){
      $("#action2").show();
      $("#collapsible2").hide();
    });
  
    $("#action3").click(function(){
      $("#collapsible3").show();
      $("#action3").hide();
    });
    $("#collapsible3").click(function(){
      $("#action3").show();
      $("#collapsible3").hide();
    });
  
  });
  
  $(document).ready(function(){
    $("form#response").submit(function(event){
      const name = $("input#MERGE1").val();
      const email = $("input#MERGE0").val();
      const message =$("input#MERGE6").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert ( name + " we have received your message. Thank you for reaching out to us");
      } else {
        alert("Please enter your name and email");
      }
    });
  });
  $(document).ready(function(){
      $("li#portfoio").mouseover(function(){
        $(this).show("article#da-animate");
      }).mouseout(function(){
        $(this).hide("article#da-animate");
      })
  });
  