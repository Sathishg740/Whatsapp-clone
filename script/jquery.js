$(document).ready(function() {
  $("#pills-chats").height(
    $(window).height() * 0.9 - $("#search-input").height()
  );
  $(window).resize(function() {
    $("#pills-chats").height(
      $(window).height() * 0.9 - $("#search-input").height()
    );
    if (navPillsDisplay == "none") {
      if ($("#pills-chats").hasClass("active")) {
        $("#main-screen").show();
        $("#status-screen").hide();
        $("#status-back-button").click();
        if ($("#user-chat").is(":visible")) {
          $("#web-screen").hide();
        }
      }
      if ($("#pills-calls").hasClass("active")) {
        $("#status-back-button").click();
      }
    } else {
      // on small screens
      if ($("#pills-chats").hasClass("active")) {
        if ($("#user-chat").is(":visible")) {
          $("#main-screen").hide();
        }
      }
    }
  });

  //enabling tooltips only on large screens
  if (navPillsDisplay == "none") {
    $('[data-toggle="tooltip"]').tooltip();
  }

  $("#search-button").click(function() {
    $("#search-input").slideDown(300);
    $(".hideOnSearch").slideUp(300);
    $("#header").slideUp(600);
  });

  $("#search-back-button").click(function() {
    $("#search-input").hide();
    $(".hideOnSearch").slideDown(300);
    $("#header").slideDown(600);
  });


  $("#user-picture,#menu-profile").click(function() {
    $("#main-screen").hide();
    $("#user-profile").show();
  });

  //to hide user profile
  $("#profile-back").on("click", function() {
    $("#user-profile").hide();
    $("#main-screen").show();
  });

  

  //to hide user status
  $("#user-chat-back-buton").on("click", function() {
    $("#user-chat").hide();
    $("#main-screen").show();
  });
  $("#chatInput input").keyup(function() {
    if ($(this).val().length > 0) {
      $("#chatInput #send-button").removeClass("fas fa-microphone");
      $("#chatInput #send-button").addClass("fab fa-telegram-plane");
    } else {
      $("#chatInput #send-button").toggleClass(
        "fab fa-telegram-plane fas fa-microphone"
      );
    }
  });
  $("#send-button").on("click", function() {
    if ($("input[name=chatMessage]").val().length > 0) {
      appendChatMessage();
    }
  });
  $("input[name=chatMessage]").keypress(function(e) {
    if (e.which == 13 && $("input[name=chatMessage]").val().length > 0) {
      appendChatMessage();
    }
  });
let appendChatMessage = () =>{
  let dt = new Date();
  let currentTime = dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
   $("#user-chat-container").append(
        '<div class="row sentMessage"><div class="col-auto rounded-left py-1">' +
          $("input[name=chatMessage]").val() +
          ' <small class="pl-2" style="font-size: 0.7rem;color: rgb(136, 155, 122);">'+currentTime+'</small><i class="fas fa-check pl-1" style="font-size: 0.7rem;color: rgba(0,0,0,0.3)"></i></div></div>'
        );
      $("input[name=chatMessage]").val("");
      $("#user-chat-container")
        .stop()
        .animate(
          { scrollTop: $("#user-chat-container")[0].scrollHeight },
          1000
        );
 };
});
