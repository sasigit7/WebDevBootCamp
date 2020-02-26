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