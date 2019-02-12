$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var foodInput= $("input#food").val();
    var musicInput = $("input#music").val();
    var bornInput = $("input#born").val();

    $(".name").text(nameInput);
    $(".food").text(addressInput);
    $(".music").text(locationInput);
    $(".born").text(bornInput);

    var favoriteColor = $("#color").val();

    var ethnicity = $("#ethnicity").val();

    var status = $("input:radio[name=status]:checked").val();

  });
});
