# Dicee_Game

Dicee-Game is a simple Javascript game, where the user can click a button, once the button is submitted, a function is trigger, the dices will generate a random number and select an image according to the number. Whoever has the greatest number wins, if a tie then the computer will also display a message saying "Draw". 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### Links

- Live Site URL: [Live](https://dannyguzman31.github.io/Dicee_Game/)

### What I learned

In this project, I learned to practice my skills as a developer better but also I learned news skills such as JavaScript. 

```js
var randomNumber1 = Math.floor(Math.random()* 6) + 1; // create a random number from 1-6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // random img from source

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);// 
```

## Author

- Website - [Daniel Guzman](https://guzdeveloper.com)
- Linkedin - [@dguzman31](https://www.linkedin.com/in/dguzman31/)
