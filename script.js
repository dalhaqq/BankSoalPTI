var items;
$.getJSON("database.json", function(data){
  items = data;
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

for (const [key, value] of Object.entries(items)) {
  console.log(`${key}: ${value}`);
}