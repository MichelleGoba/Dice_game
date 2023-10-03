var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// generate a random number between 0 and 0.9 multiply by 6 to change between 0-5.9 

 var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png

 var randomImageSource = "images/" + randomDiceImage; // image/dice1.png -images/dice6.png

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomImageSource);