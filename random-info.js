// List of possible choices
function showInfo() {
    var infoList = [
        "Bork",
        "Bark",
        "Some other dog idk I only have two",
        "Freya is a cat",
        "Meow",
        "Dude Bark just ate my hat and I'm VERY mad at him right now",
        "<h2> You'll have to forgive me. Kentucky just lost in the first round so I'm not very happy with cats right now  </h2>"
    ];

   // Generate a random number and pick that item from the array
    var randomizer = Math.floor(Math.random() * infoList.length);
   
   // Write that information in the HTML element that has the ID of "info"
    document.getElementById("info").innerHTML = infoList[randomizer];
   
   };