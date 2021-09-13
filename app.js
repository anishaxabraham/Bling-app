
let root = document.querySelector("#root");

document.body.style.cssText = "font-family: Montserrat;";

function createEle(type) {
    return document.createElement(type);
}

root.style.cssText = `
margin: 1rem 5rem;
padding: 1rem 2rem;
`
let head = createEle('div');

head.textContent = "BLING!"

head.style.cssText = `
    display:block;
    text-align: center;
    font-weight: bold;
    margin: 2rem;
    font-size: 2rem;
    text-shadow: 0.15rem 0.15rem #FFA500;
`;

root.appendChild(head);

let body = createEle('div');
let right = createEle('div');
let left = createEle('div');
body.appendChild(right);
body.appendChild(left);
body.style.cssText = `
display: flex;`;
root.appendChild(body);

let intro = createEle('div');
let introPara = createEle('p');
let introHead = createEle('h1');

introPara.textContent = "Sizzle your Life";
introHead.innerHTML = "Make a Card<br/>";

introPara.style.cssText = `
font-size: 1.5rem;
margin-top: 1rem;
margin-bottom: 1rem;
`;
intro.appendChild(introPara);

introHead.style.cssText = `
font-size: 4rem;
margin-top: 1rem;
margin-bottom: 1rem;
font-weight: bolder;
`;
intro.appendChild(introHead);

left.appendChild(intro);


let itemsContainer = createEle('div');
let polaroid = createEle('button');
let tv = createEle('button');
let traitor = createEle('button');
let fallGuy = createEle('button');
let radio = createEle('button');

itemsContainer.appendChild(polaroid);
itemsContainer.appendChild(tv);
itemsContainer.appendChild(traitor);
itemsContainer.appendChild(fallGuy);
itemsContainer.appendChild(radio);
itemsContainer.style.cssText = `
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: stretch;
margin-top:3rem;
`;
polaroid.textContent = "Polaroid";
tv.textContent = "TV";
traitor.textContent = "Traitor";
fallGuy.textContent = "Fall Guy";
radio.textContent = "Radio";

polaroid.style.cssText = `
background-color: transparent;
border: 0.20rem solid black;
border-radius: 0.5rem;
margin-right: 1rem;
margin-top: 1rem;
margin-bottom: 1rem;
padding: 1rem;
box-shadow: 0.25rem 0.25rem grey;
`;

// let imgPol = createEle('img');
// imgPol.setAttribute("src", "./assets/images/polaroid.png");
// let imgTV = createEle('img');
// imgTV.setAttribute("src", "./assets/images/tv.png");
// let imgTraitor = createEle('img');
// imgTraitor.setAttribute("src", "./assets/images/among-us.png");
// let imgFallGuy = createEle('img');
// imgFallGuy.setAttribute("src", "./assets/images/fall-guy-01.png");
// let imgRadio = createEle('img');
// imgRadio.setAttribute("src", "./assets/images/radio-02.png");
// let display = createEle('div');
// let count = 1;
// var imgArray = [imgPol, imgTV, imgTraitor, imgFallGuy, imgRadio];
// function showImg(img) {
//     for (i = 0; i < imgArray.length; i++) {
//       imgArray[i].style.cssText = "display:none";
    
//     }
//     console.log(img.style.display);

//     count -= 1;
//     if (count>=0) {
//         console.log("if");
//         console.log(img.style.display);
//         img.style.cssText = "display:block";
//         display.appendChild(img);
//     }
//     img.style.cssText = `
//     width:10rem;
//     `;
    
//   }


// polaroid.addEventListener("click", function () {
//     console.log("clicked");
//     showImg(imgPol);
// });

//root.appendChild(display);
tv.style.cssText = `
background-color: transparent;
border: 0.20rem solid black;
border-radius: 0.5rem;
margin: 1rem;
padding: 1rem;
box-shadow: 0.25rem 0.25rem grey;
`;

traitor.style.cssText = `
background-color: transparent;
border: 0.20rem solid black;
border-radius: 0.5rem;
margin: 1rem;
padding: 1rem;
box-shadow: 0.25rem 0.25rem grey;
`;

fallGuy.style.cssText = `
background-color: transparent;
border: 0.20rem solid black;
border-radius: 0.5rem;
margin: 1rem;
padding: 1rem;
box-shadow: 0.25rem 0.25rem grey;
`;

radio.style.cssText = `
background-color: transparent;
border: 0.20rem solid black;
border-radius: 0.5rem;
margin: 1rem;
padding: 1rem;
box-shadow: 0.25rem 0.25rem grey;

`;

left.appendChild(itemsContainer);

let form = createEle('div');

form.style.cssText = `
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: stretch;
margin-top: 2rem;
`;

let input = createEle('input');
let dropdown = createEle('select');
//let radio_home = createEle('div');

input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.setAttribute("placeholder", "Name Your Bling!");


input.style.cssText = `
width: 10rem;
border-radius: 0.5rem;
border: 1px solid grey;
color: white;
padding: 1rem;
margin-right: 1rem;
background-color: black;
box-shadow: 0.25rem 0.25rem grey;

`;

input.addEventListener("click", (e) => {
    console.log(e.target.value);
})
dropdown.style.cssText = `
width: 10rem;
border-radius: 0.5rem;
border: 1px solid grey;
color: gray;
padding: 1rem;
margin-right: 1rem;
background-color: black;
box-shadow: 0.25rem 0.25rem grey;
`;



var values = ["gold", "snow", "DodgerBlue", "LightSalmon", "LightCoral", "LightPink", "OrangeRed", "Tomato", "DarkOrchid", "SpringGreen", "Thistle"];


dropdown.name = "colors";
dropdown.id = "colors";

for (const val of values)
{
    var option = createEle("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    dropdown.appendChild(option);

}

form.appendChild(input);
form.appendChild(dropdown);

function makeRadioButton(options) {
    let radioHome = document.createElement("div");
    for (let i = 0; i < options.length; i++) {
        let label = document.createElement("label");
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = options[i].name;
        radio.value = options[i].value;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(options[i].text));
        radioHome.appendChild(label);
        
        }
      form.appendChild(radioHome);
      radioHome.style.cssText = `
      background-color: black;
      box-shadow: 0.25rem 0.25rem grey;
      color: white;
      width: 20rem;
      padding: 0.5rem;
      padding-top:1rem;
      `;
}
let options = [{
    name: "box",
    value: "Blob",
    text: "Blob"
}, {
    name: "box",
    value: "Nope",
    text: "Nope"
}]

makeRadioButton(options);
left.appendChild(form);



let enter = createEle('button');
enter.style.cssText = `
margin-top: 2rem;
background-image: url("./assets/images/camera.png");
width: 4rem;
height: 4rem;
font-size: 1rem;
background-size: 2rem 2rem;
padding: 1rem;
background-repeat: no-repeat;
background-position: center;
border-radius: 0.5rem;
background-color: transparent;
`;

left.appendChild(enter);



let footer = createEle('div');
let item1 = createEle('a');
item1.textContent = "Credits:";
let item2 = createEle('a');
item2.setAttribute("href", "#");
item2.textContent = "Polaroid";
let item3 = createEle('a');
item3.setAttribute("href", "#");
item3.textContent = "TV";
let item4 = createEle('a');
item4.setAttribute("href", "#");
item4.textContent = "Traitor";
let item5 = createEle('a');
item5.setAttribute("href", "#");
item5.textContent = "Fall Guy";
let item6 = createEle('a');
item6.setAttribute("href", "#");
item6.textContent = "Radio";
footer.appendChild(item1);
footer.appendChild(item2);
footer.appendChild(item3);
footer.appendChild(item4);
footer.appendChild(item5);
footer.appendChild(item6);

let aItems = document.querySelectorAll('footer > a');

// function underline(target) {
//     target.style.cssText += "text-decoration:underline";
// }
// function noline(target) {
//     target.style.cssText += "text-decoration:none";
// }

footer.style.cssText = `
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
margin-top: 5rem;`;

item1.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;`;

item2.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;`;

// item2.onmouseover = () => {
//     item2.style.cssText += `text-decoration:underline`;
// }

// item2.onmouseout = () => {
//     item2.style.cssText += `text-decoration:none`;
// }

// item2.addEventListener("mouseover",(e) => {
//     underline(e.target);
// });
// item2.addEventListener("mouseout",(e) => {
//     noline(e.target);
// });
item3.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;`;
item2.addEventListener("mouseover",(e) => {
    underline(e.target);
});
item2.addEventListener("mouseout",(e) => {
    noline(e.target);
});
item4.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;`;

item5.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;`;

item6.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;`;
root.appendChild(footer);
