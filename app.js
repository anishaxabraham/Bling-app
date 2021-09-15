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
justify-content: flex-start;
align-items: flex-center;
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
polaroid.setAttribute("id", "btn");
tv.textContent = "TV";
tv.setAttribute("value", "TV");
tv.setAttribute("id", "btn");
traitor.textContent = "Traitor";
traitor.setAttribute("value", "Traitor");

fallGuy.textContent = "Fall Guy";
fallGuy.setAttribute("value", "FallGuy");

radio.textContent = "Radio";
radio.setAttribute("value", "Radio");

let selection1 = createEle('div');
let selection2 = createEle('div');

let imgElement = createEle('img');

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

function itemSelection(event){
    console.log(event.target.value);
    console.log(typeof(event.target));
    if(event.target.style.backgroundColor === "transparent") {

        event.target.style.backgroundColor = "black";
        event.target.style.color = "white";
        if(text.textContent === "") {
            text.textContent = "Stuff";

        }
        selection2.setAttribute("val2", text.textContent);
        text.style.display = "block";
        imgElement.setAttribute("src", images[event.target.value]);
        imgElement.style.cssText = `
        display: block,
        //margin-left: 3rem;
        width: 10rem;
        height: 10rem;
        margin-top: 3rem;
        position: absolute;
        `;
        
        selection1.setAttribute("val1", images[event.target.value]);
        right.appendChild(text);
        right.appendChild(imgElement);
        
    }
    else {
        imgElement.style.cssText = `display:none;`;
        imgElement.removeAttribute("src");
        event.target.style.backgroundColor = "transparent";
        event.target.style.color = "black";
        selection1.setAttribute("src", "");
        
    }
}

polaroid.addEventListener("click", (event) => {
    tv.style.backgroundColor = "transparent";
    tv.style.color = "black";
    traitor.style.backgroundColor = "transparent";
    traitor.style.color = "black";
    fallGuy.style.backgroundColor = "transparent";
    fallGuy.style.color = "black";
    radio.style.backgroundColor = "transparent";
    radio.style.color = "black";
    itemSelection(event);
});

tv.style.cssText = `
background-color: transparent;
border: 0.20rem solid black;
border-radius: 0.5rem;
margin: 1rem;
padding: 1rem;
box-shadow: 0.25rem 0.25rem grey;
`;

tv.addEventListener("click", (event) => {
    polaroid.style.backgroundColor = "transparent";
    polaroid.style.color = "black";
    traitor.style.backgroundColor = "transparent";
    traitor.style.color = "black";
    fallGuy.style.backgroundColor = "transparent";
    fallGuy.style.color = "black";
    radio.style.backgroundColor = "transparent";
    radio.style.color = "black";
    itemSelection(event);

});

traitor.style.cssText = `
background-color: transparent;
border: 0.20rem solid black;
border-radius: 0.5rem;
margin: 1rem;
padding: 1rem;
box-shadow: 0.25rem 0.25rem grey;
`;

traitor.addEventListener("click", (event) => {
    polaroid.style.backgroundColor = "transparent";
    polaroid.style.color = "black";
    tv.style.backgroundColor = "transparent";
    tv.style.color = "black";
    traitor.style.backgroundColor = "transparent";
    traitor.style.color = "black";
    fallGuy.style.backgroundColor = "transparent";
    fallGuy.style.color = "black";
    radio.style.backgroundColor = "transparent";
    radio.style.color = "black";
    itemSelection(event);

});

fallGuy.style.cssText = `
background-color: transparent;
border: 0.20rem solid black;
border-radius: 0.5rem;
margin: 1rem;
padding: 1rem;
box-shadow: 0.25rem 0.25rem grey;
`;
fallGuy.addEventListener("click", (event) => {
    polaroid.style.backgroundColor = "transparent";
    polaroid.style.color = "black";
    tv.style.backgroundColor = "transparent";
    tv.style.color = "black";
    traitor.style.backgroundColor = "transparent";
    traitor.style.color = "black";
    radio.style.backgroundColor = "transparent";
    radio.style.color = "black";
    itemSelection(event);

});

radio.style.cssText = `
background-color: transparent;
border: 0.20rem solid black;
border-radius: 0.5rem;
margin: 1rem;
padding: 1rem;
box-shadow: 0.25rem 0.25rem grey;

`;

radio.addEventListener("click", (event) => {
    polaroid.style.backgroundColor = "transparent";
    polaroid.style.color = "black";
    tv.style.backgroundColor = "transparent";
    tv.style.color = "black";
    traitor.style.backgroundColor = "transparent";
    traitor.style.color = "black";
    fallGuy.style.backgroundColor = "transparent";
    fallGuy.style.color = "black";
    itemSelection(event);

});
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
let backdrop;
for (const val of values)
{
    var option = createEle("option");
    option.value = val;
    option.text = val; //val.charAt(0).toUpperCase() + val.slice(1);
    if (val == "Gold") {
        option.setAttribute("selected", "selected");
        document.body.style.backgroundColor = val;
        backdrop = val;
    }
    dropdown.appendChild(option);

}
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
        display: inline-block,
        //margin-left: 3rem;
        width:18rem;
        height: 17rem;
        margin-top: 3rem;
        position: absolute;
        z-index: -1;
        `;

        
    }
    else {
        imgBlob.style.cssText = `display:none;`;
        imgBlob.removeAttribute("src");
        //right.appendChild(imgBlob);
    }
    right.appendChild(imgBlob);
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
background-color: red;
display:flex;
flex-direction: row;
flex-wrap:wrap;
align-items: flex-start;
justify-content: flex-start;
position:relative;
z-index:1;
`;

root.appendChild(cardArea);
cardArea.addEventListener("mouseover", () => {
    console.log("hey cardarea");
})
let card = createEle('div');

cardArea.appendChild(card);


function cardGen(el1, el2) {
    let card = createEle('div');
    card.style.cssText = `
    width: 20rem;
    height: 25rem;
    margin: 1rem;
    border: 0.5rem solid black;
    z-index: 2;
    
    `;
    card.style.backgroundColor = backdrop;
    cardArea.appendChild(card);

    let clone = right.cloneNode(true);
    console.log(clone);
    
    clone.style.cssText = `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-tems: flex-start;
    width: 15rem;
    height: 20rem;
    margin-top: 0rem;
    margin-left: 2rem;
    position: absolute;
    //border: 0.5rem solid black;
    z-index: 3;
    `;
    
    let imgDel = createEle('input');
    imgDel.setAttribute("type","image");
    imgDel.setAttribute("src", "./assets/images/icon_delete.png");
    imgDel.style.cssText = `
    width: 3rem;
    height: 3rem;
    position:relative;
    margin-left: 16.5rem;
    z-index: 4;
    `;
    
    card.appendChild(imgDel);
    card.appendChild(clone);
    
    
    imgDel.addEventListener("click", () => {
        card.removeChild(clone);
        card.removeChild(imgDel);
        cardArea.removeChild(card);
    })
}
    
    

enter.addEventListener("click", (e) => {
    cardGen(selection1, selection2);
    console.log("button");
    
})

left.appendChild(enter);


let footer = createEle('div');
let item1 = createEle('p');
item1.innerHTML = "\u2665" + " Credits:";
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

// let aItems = document.querySelectorAll('div > a');
// console.log(aItems)
// for (let aItem of aItems) {
//     console.log(aItem);
//     aItem.style.cssText = `
//     margin: 1rem;
//     padding: 1rem;
//     font-weight: bold;
//     `;
// }

footer.style.cssText = `

order:5;
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

item3.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;
text-decoration:none;
`;

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
