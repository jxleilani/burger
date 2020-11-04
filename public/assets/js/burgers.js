$("#submitBtn").on("click", function(event) {
  console.log("button");
    event.preventDefault();
  console.log("button2");
  //   var newBurger = {
  //     name: $("#burger").val().trim(),
  //   };

  //   $.ajax("/api/burgers", {
  //     type: "POST",
  //     data: newBurger
  //   }).then(
  //     function() {
  //       console.log("created new burger");
  //       location.reload();
  //     }
  //   );
});