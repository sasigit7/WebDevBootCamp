//alert("connected");

// Check off Specific Todos by Clicking 
//$("li").click(function() {
  // alert("Clicked Li");
  //$("li").css("color", "gray");

  //$(this).css("color", "gray");
  //$(this).css("text-decoration", "line-through");
  
  //  $(this).css({
  //    color: "gray",
  //    textDecoration: "line-through"
  // });

  // Toggle effect using if else condition:
//  if($(this).css("color") === "rgb(128, 128, 128)") { // If li is gray
//      // turn it black
//      $(this).css({
//         color: "black",
//         textDecoration: "none"
//         });
//     } else {
//       // turn it gray 
//      $(this).css({
//         color: "gray",
//         textDecoration: "line-through"
//      });
//     }
//  });

 // Short cut using toggle class: 
 // Create a class in css file and then use here
 $("li").click(function() {
   $(this).toggleClass("completed");
 });

//  Click on X to Delete todo
$("span").click(function(event){
  //alert("Clicked on a span!");
  // $(this).remove(); // Removes just a span "X"
 // $(this).parent().remove(); // Removes an entire "li" element on clicking "X"
  $(this).parent().fadeOut(500, function() {
      $(this).remove(); // Slowly fades out and removes entire "li" element on clicking "X" 
  }); 
  event.stopPropagation(); // Stops firing further events 
});

