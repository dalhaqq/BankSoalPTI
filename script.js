var pertanyaan;
$( document ).ready(function() {
  $.getJSON("database.json", function(data){
    pertanyaan = Object.entries(data);
  });
  $(".card-container").html(`<div class="card">
    <h3>Soal 2</h3>
    <div class="alert alert-success" role="alert">
  A. Jawaban yang benar
    </div>
    <div class="alert alert-danger" role="alert">
  B. Jawaban yang salah
    </div>
    <div class="alert alert-danger" role="alert">
  C. Jawaban yang salah
    </div>
    <div class="alert alert-danger" role="alert">
  D. Jawaban yang salah
    </div>
  </div>`);
});
$("#search").on("keyup", function() {
   var searchValue = $(this).val().trim().toLowerCase();
   $(".card").each(function(index) {
       $row = $(this);
       var rowText = $row.find("h3").text().trim().toLowerCase();
       if (rowText.indexOf(searchValue) > -1) {
         $row.show();
       } else {
         $row.hide();
       }
   });
});

