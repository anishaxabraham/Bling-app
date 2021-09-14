let root = document.querySelector("#root");

// Setting entire body font to Monteserrat.
document.body.style.cssText = "font-family: Montserrat;";

// Function for creating element.
function createEle(type) {
    return document.createElement(type);
}

// Styling of the entire root element.
root.style.cssText = `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
margin: 1rem 5rem;
padding: 1rem 2rem;
`

// Creating a head element for Bling!! heading.
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

// Creating body element for content and splitting the screen into two: right and left.
let body = createEle('div');
let left = createEle('div');
let right = createEle('div');

body.appendChild(left);
body.appendChild(right);


body.style.cssText = `
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

left.style.cssText = `
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`;

right.style.cssText = `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: -4;
margin-right: 3rem;
padding: 1rem;
width: 25rem;
height: 20rem;
`;
root.appendChild(body);

// Creating variable for content appearing on the left.
let text = createEle('h1');

text.style.cssText = `
font-size: 4rem;
font-weight: bolder;
text-align: center;
text-shadow: 0.15rem 0.15rem gray;
margin-top: -13rem;

`;

right.appendChild(text);

// Intro wraps the first two sentences appearing on the left side.
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

// The image selection items are wrapped in itemsContainer.
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
polaroid.setAttribute("value", "Polaroid");

tv.textContent = "TV";
tv.setAttribute("value", "TV");

traitor.textContent = "Traitor";
traitor.setAttribute("value", "Traitor");

fallGuy.textContent = "Fall Guy";
fallGuy.setAttribute("value", "Fall Guy");

radio.textContent = "Radio";
radio.setAttribute("value", "Radio");

// Path to the corresponding images.
let images = {
    Polaroid : "./assets/images/polaroid.png",
    TV : "./assets/images/tv.png",
    Traitor : "./assets/images/among-us.png",
    FallGuy : "./assets/images/fall-guy-01.png",
    Radio : "./assets/images/radio-02.png"
}

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
let selection1 = createEle('div');
let selection2 = createEle('div');
let selection3 = createEle('div');
let selection4 = createEle('div');

let imgElement = createEle('img');

polaroid.addEventListener("click", (event) => {
    if(event.target.style.backgroundColor === "transparent") {

        event.target.style.backgroundColor = "black";
        event.target.style.color = "white";
        if(text.textContent === "") {
            text.textContent = "Stuff";

        }
        selection2.setAttribute("val2", text.textContent);
        console.log("input:");
        text.style.display = "block";
        imgElement.setAttribute("src", images[event.target.value]);
        console.log(imgElement);
        imgElement.style.cssText = `
        display: block,
        //margin-left: 3rem;
        width: 15rem;
        height: 10rem;
        margin-top: 3rem;
        position: absolute;
        `;
        
        selection1.setAttribute("val1", images[event.target.value]);
        console.log("image:");
        right.appendChild(text);
        right.appendChild(imgElement);
        
    }
    else {
        imgElement.style.cssText = `display:none;`;
        imgElement.removeAttribute("src");
        event.target.style.backgroundColor = "transparent";
        event.target.style.color = "black";
        selection1.setAttribute("src", "");
        console.log(selection1);
    }

})
;

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

// Contains the input, background color selection and blob selection.
let form = createEle('div');

form.style.cssText = `
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: stretch;
margin-top: 2rem;
`;

let input = createEle('input');

input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.setAttribute("placeholder", "Name Your Bling!");

input.addEventListener("input", (e) => {
    console.log(e.target.value);
    text.textContent = e.target.value;
    

});

input.style.cssText = `
width: 10rem;
border-radius: 0.5rem;
border: 1px solid grey;
color: white;
padding: 1rem;
margin-right: 1rem;
background-color: black;
box-shadow: 0.25rem 0.25rem grey;
outline: none;

`;


form.appendChild(input);

let dropdown = createEle('select');

let values = ["Gold", "Snow", "DodgerBlue", "LightSalmon", "LightCoral", "LightPink", "OrangeRed", "Tomato", "DarkOrchid", "SpringGreen", "Thistle"];

dropdown.name = "colors";
dropdown.id = "colors";

for (const val of values)
{
    var option = createEle("option");
    option.value = val;
    option.text = val; //val.charAt(0).toUpperCase() + val.slice(1);
    if (val == "Gold") {
        option.setAttribute("selected", "selected");
        document.body.style.backgroundColor = val;
    }
    dropdown.appendChild(option);

}
let backdrop;
dropdown.addEventListener("change", (event) => {
    return changeColor(event.target.value);
})
function changeColor(value) {
    document.body.style.backgroundColor = value;
    backdrop = value;
};

dropdown.style.cssText = `
width: 10rem;
border-radius: 0.5rem;
border: 1px solid grey;
color: gray;
padding: 1rem;
margin-right: 1rem;
background-color: black;
box-shadow: 0.25rem 0.25rem grey;
outline: none;
`;

form.appendChild(dropdown);
let radioDiv = createEle('div');


function makeRadioButton(options) {   
    for (let i = 0; i < options.length; i++) {
        
        let label = createEle("label");
        let radio = createEle("input");
        radio.type = "radio";
        radio.name = options[i].name;
        radio.value = options[i].value;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(options[i].text));
        radioDiv.appendChild(label);
        }
    form.appendChild(radioDiv);
    radioDiv.style.cssText = `
    border-radius: 0.5rem;
    background-color: black;
    box-shadow: 0.25rem 0.25rem grey;
    color: white;
    width: 10rem;
    padding: 0.5rem;
    padding-top:1rem;
    outline: none;
    `;
}

let options = [{
    name: "Button",
    value: "Blob",
    text: "Blob"
}, {
    name: "Button",
    value: "Nope",
    text: "Nope"
}]

let imgBlob = createEle('img');

makeRadioButton(options);
radioDiv.addEventListener("change", (event) => {
    if(event.target.value === "Blob") {
        imgBlob.setAttribute("src", "./assets/images/blob.png");
        console.log(imgElement);
        imgBlob.style.cssText = `
        display: block,
        //margin-left: 3rem;
        width: 18rem;
        height: 15rem;
        margin-top:3rem;
        position: absolute;
        z-index: -1;
        `;
        right.appendChild(imgBlob);
    }
    else {
        imgBlob.style.cssText = `display:none;`;
        imgBlob.removeAttribute("src");
    }
})

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
border: 0.20rem solid black;
box-shadow: 0.25rem 0.25rem grey;
outline: none;
`;



let cardArea = createEle('div');
cardArea.style.cssText = `
display: flex;
flex-direction: row;
justify-content: flex-start;
align-contents: flex-start;
flex-wrap: wrap;
//background-color:red;
// width: 100%;
height: 4rem;
margin-top: 2rem;
`;
cardArea.style.backgroundColor = backdrop;
root.appendChild(cardArea);

function cardGen(el1, el2) {
    // let card = createEle('div');
    // card.style.cssText = `
    // background-color:purple;
    // width: 5rem;
    // height: 10rem;
    // margin:2rem;`;
    // cardArea.appendChild(card);
    let clone = right.cloneNode(true);
    cardArea.appendChild(clone);
    root.appendChild(cardArea);


}
enter.addEventListener("click", (e) => {
    cardGen(selection1, selection2);
    
})

left.appendChild(enter);


let footer = createEle('div');
let item1 = createEle('p');
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

item1.addEventListener("click", () => {
    
    let aItems = document.querySelectorAll('div > a');
    for (let aItem of aItems) {
        
        aItem.addEventListener("mouseover", () => {
            // aItem.style.cssText = `text-decoration: underline;`
            console.log("hi");
        })
}
})

// function underline(target) {
//     target.style.cssText += "text-decoration:underline";
// }
// function noline(target) {
//     target.style.cssText += "text-decoration:none";
// }

footer.style.cssText = `

order:4;
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
font-weight: bold;
text-decoration:none;
`;

// item2.onmouseover = () => {
//     item2.style.cssText += `text-decoration:underline`;
//     document.location.href = 'http://www.google.com';

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
font-weight: bold;
text-decoration:none;
`;
// item2.addEventListener("mouseover",(e) => {
//     underline(e.target);
// });
// item2.addEventListener("mouseout",(e) => {
//     noline(e.target);
// });
item4.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;
text-decoration:none;
`;

item5.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;
text-decoration:none;
`;

item6.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;
text-decoration:none;
`;

root.appendChild(footer);
