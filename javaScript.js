const myColor = ["red", "blue", "green", "black", "white", "yellow", "blueviolet", "aquamarine"];


const setBg = () => {

    const randomColor = myColor[Math.floor((Math.random() * myColor.length))];
    document.body.style.backgroundColor = randomColor;
}

body.addEventListener("onload", setBg);
setBg();