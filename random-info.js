// List of possible choices
function displayRandomInfo() {
   var infoList = [
      "Ivan",
      "Cookie",
      "Gary",
      "Vladimir",
      "Tortilla",
      "<h2>I'm an h2!</h2>"
   ];

   // Generate a random number and pick that item from the array
   var randomIndex = Math.floor(Math.random() * infoList.length);
   
   // Write that information in the HTML element that has the ID of "info"
   document.getElementById("info").innerHTML = infoList[randomIndex];
}