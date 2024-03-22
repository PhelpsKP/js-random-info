// List of possible choices
function showInfo() {
    var infoList = [
        "Bark",
        "Bork",
        "Idk I only have two dogs",
        "Freya is a cat",
        "Actually I don't like cats right now. UK pissed me off losing to Oakland in the tournament",
        "Hopefully the Bengals make the playoffs this year",
        "<h2>Kitty goes meow</h2>",
    ];

   // Generate a random number and pick that item from the array
var randomizer = Math.floor(Math.random() * infoList.length);
   
   // Write that information in the HTML element that has the ID of "info"
document.getElementById("info").innerHTML = infoList[randomizer];
};