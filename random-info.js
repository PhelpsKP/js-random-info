// List of possible choices
function showInfo() {
   var infoList = [
      "Ivan",
      "Cookie",
      "Gary",
      "Vladimir",
      "Tortilla",
      "<h2>I'm an h2!</h2>"
   ];

   // Generate a random number and pick that item from the array
   var randomizer = Math.floor(Math.random() * infoList.length);
   
   // Write that information in the HTML element that has the ID of "info"
   document.getElementById("info").innerHTML = infoList[randomizer];
}