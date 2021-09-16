let root = document.querySelector("#root");

// Setting entire body font to Monteserrat.
document.body.style.cssText = "font-family: Montserrat;";

// Function for creating element and appending children.
function createEle(type) {
    return document.createElement(type);
}

function appendCh(children, parent) {
    for(let child of children) {
        parent.appendChild(child);
    }
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

appendCh([left, right], body);
// body.appendChild(left);
// body.appendChild(right);


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
margin-right: 1rem;
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


introHead.style.cssText = `
font-size: 4rem;
margin-top: 1rem;
margin-bottom: 1rem;
font-weight: bolder;
`;
appendCh([introPara, introHead], intro);
left.appendChild(intro);

// The image selection items are wrapped in itemsContainer.
let itemsContainer = createEle('div');
let polaroid = createEle('button');
let tv = createEle('button');
let traitor = createEle('button');
let fallGuy = createEle('button');
let radio = createEle('button');

appendCh([polaroid, tv, traitor, fallGuy, radio], itemsContainer);

left.appendChild(itemsContainer);


itemsContainer.style.cssText = `
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: stretch;
margin-top:3rem;
`;

polaroid.textContent = "Polaroid";
polaroid.setAttribute("value", "Polaroid");
polaroid.classList.add("tile");

tv.textContent = "TV";
tv.setAttribute("value", "TV");
tv.classList.add("tile");

traitor.textContent = "Traitor";
traitor.setAttribute("value", "Traitor");
traitor.classList.add("tile");

fallGuy.textContent = "Fall Guy";
fallGuy.setAttribute("value", "FallGuy");
fallGuy.classList.add("tile");

radio.textContent = "Radio";
radio.setAttribute("value", "Radio");
radio.classList.add("tile");

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


let tileItems = document.getElementsByClassName('tile');
for(let tileItem of tileItems) {
    tileItem.style.cssText =`
    background-color: transparent;
    border: 0.20rem solid black;
    border-radius: 0.5rem;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 0.25rem 0.25rem grey;
    `;
}

// Function for action on clicking tiles.

function itemSelection(event){
    console.log(event.target.value);
    console.log(typeof(event.target));
    let callings = document.getElementsByClassName("tile");
    for (let calling of callings) {
        if ( calling.value !== event.target.value) {
            calling.style.backgroundColor = "transparent";
            calling.style.color = "black";
        }
    }
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
        appendCh([text, imgElement], right);
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
    itemSelection(event);
});

tv.addEventListener("click", (event) => {
    itemSelection(event);

});

traitor.addEventListener("click", (event) => {
    itemSelection(event);

});

fallGuy.addEventListener("click", (event) => {
    itemSelection(event);

});


radio.addEventListener("click", (event) => {
    itemSelection(event);

});


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

// Function for baackground change on selection.
for (const val of values)
{
    var option = createEle("option");
    option.value = val;
    option.text = val; 
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

// Function for creating radio buttons.
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
    }
    right.appendChild(imgBlob);
})

left.appendChild(form);

// Camera button.
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

// Area where the card is generated.
let cardArea = createEle('div');

cardArea.style.cssText = `

display:flex;
flex-direction: row-reverse;
flex-wrap:wrap;
align-items: center;
justify-content: center;
position:relative;
z-index:1;
margin-top:1rem;
`;

root.appendChild(cardArea);

let card = createEle('div');

cardArea.appendChild(card);

// Function for generation of card.
function cardGen(el1, el2) {
    let card = createEle('div');
    card.style.cssText = `
    width: 20rem;
    height: 25rem;
    margin: 1rem;
    border: 0.25rem solid black;
    z-index: 2;
    box-shadow: 0.25rem 0.25rem grey;
    
    `;
    card.style.backgroundColor = backdrop;
    cardArea.appendChild(card);

    let clone = right.cloneNode(true);
    
    clone.style.cssText = `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-tems: flex-start;
    width: 15rem;
    height: 20rem;
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
    appendCh([imgDel,clone], card);
    
    imgDel.addEventListener("click", () => {
        imgDel.style.cssText =`
        cursor: pointer;
        `;
        card.removeChild(clone);
        card.removeChild(imgDel);
        cardArea.removeChild(card);
    })
}
    
// Event listener for the button flash. 
enter.addEventListener("click", (e) => {
    enter.style.backgroundColor = "white";
    setTimeout(function(){
        enter.style.backgroundColor = "transparent";
   },100); 
    
    cardGen(selection1, selection2);
    console.log("button");
    
})

left.appendChild(enter);

let footer = createEle('div');
let item1 = createEle('p');
item1.innerHTML = "\u2665" + "Credits:";

item1.style.cssText = `
margin: 1rem;
padding: 1rem;
font-weight: bold;`;

let item2 = createEle('a');
item2.classList.add('footer-style');
item2.setAttribute("href", "#");
item2.textContent = "Polaroid";

let item3 = createEle('a');
item3.classList.add('footer-style');
item3.setAttribute("href", "#");
item3.textContent = "TV";

let item4 = createEle('a');
item4.classList.add('footer-style');
item4.setAttribute("href", "#");
item4.textContent = "Traitor";

let item5 = createEle('a');
item5.classList.add('footer-style');
item5.setAttribute("href", "#");
item5.textContent = "Fall Guy";

let item6 = createEle('a');
item6.classList.add('footer-style');
item6.setAttribute("href", "#");
item6.textContent = "Radio";

let items = [item1,item2,item3,item4,item5,item6];
appendCh(items, footer);
root.appendChild(footer);
let aItems = document.getElementsByClassName('footer-style');


for (let aItem of aItems) {
    aItem.addEventListener("mouseover", () => {
        aItem.style.textDecoration = "underline";
    })
    aItem.addEventListener("mouseout", () => {
        aItem.style.textDecoration = "none";
    })
    aItem.style.cssText = `
    margin: 1rem;
    padding: 1rem;
    font-weight: bold;
    text-decoration:none;
    color: black;
    `;
}

footer.style.cssText = `

order:5;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
margin-top: 5rem;`;


function myFunctionx(x) {
    if (x.matches) { 
        root.style.margin = "1rem 5rem";
        root.style.padding = "1rem 2rem";
        head.style.display = "block";
        head.style.textAlign = "center";
        head.style.fontWeight = "bold";
        head.style.margin = "2rem";
        head.style.fontSize = "2rem";
        right.style.marginRight = "1rem";
        right.style.padding = "1rem";
        right.style.width = "60%";
        right.style.height = "20rem";

        body.style.display = "flex";
        body.style.flexDirection = "row";
        left.style.width = "100%";
        right.style.marginLeft = "1rem";
        form.style.flexWrap = "wrap";
        itemsContainer.style.flexWrap = "wrap";
        input.style.marginBottom = "1rem";

        dropdown.style.marginBottom = "1rem";
        radioDiv.style.marginBottom = "1rem";
        footer.style.flexDirection = "row";
        footer.style.margin = "0rem";
        footer.style.flexWrap = "wrap";
        footer.style.maxWidth = "100%";
        enter.style.marginBottom = "2rem";
        cardArea.style.flexDirection = "row-reverse";
        cardArea.style.flexWrap ="wrap-reverse";
        cardArea.style.alignItems = "center";
        cardArea.style.justifyContent = "center";
    }
  }
  
  let x = window.matchMedia("(min-width: 768px) and (max-width: 1166px)")
  myFunctionx(x) 
  x.addListener(myFunctionx) 

  function myFunctiony(y) {
    if (y.matches) { 
        root.style.margin = "1rem";
        body.style.display = "flex";
        body.style.flexDirection = "column";
        root.style.paddingLeft = "2rem";
        left.style.width = "90%";
        right.style.width = "90%";
        itemsContainer.style.flexWrap = "wrap";
        form.style.flexWrap = "wrap";
        input.style.marginBottom = "1rem";
        dropdown.style.marginBottom = "1rem";
        radioDiv.style.marginBottom = "1rem";
        footer.style.flexDirection = "row";
        footer.style.margin = "0rem";
        footer.style.flexWrap = "wrap";
        footer.style.maxWidth = "100%";
        enter.style.marginBottom = "2rem";
        cardArea.style.marginTop = "2rem";
        cardArea.style.flexDirection = "column-reverse";
        cardArea.style.flexWrap ="wrap";
        cardArea.style.alignItems = "center";
        cardArea.style.justifyContent = "center";
    } 
  }
  
  let y = window.matchMedia("(min-width:482px) and (max-width: 767px)")
  myFunctiony(y) 
  y.addListener(myFunctiony)

  function myFunctionz(z) {
    if (z.matches) { 
        root.style.margin = "1rem";
        body.style.display = "flex";
        body.style.flexDirection = "column";
        left.style.width = "90%";
        right.style.width = "90%";
        itemsContainer.style.flexWrap = "wrap";
        form.style.flexWrap = "wrap";
        input.style.marginBottom = "1rem";
        dropdown.style.marginBottom = "1rem";
        radioDiv.style.marginBottom = "1rem";
        footer.style.flexDirection = "row";
        footer.style.margin = "0rem";
        footer.style.flexWrap = "wrap";
        footer.style.maxWidth = "100%";
        enter.style.marginBottom = "2rem";
        cardArea.style.marginTop = "2rem";
        cardArea.style.flexDirection = "column-reverse";
        cardArea.style.flexWrap ="wrap";
        cardArea.style.alignItems = "center";
        cardArea.style.justifyContent = "center";
    } 
  }
  
  let z = window.matchMedia("(min-width: 321px) and (max-width: 481px)")
  myFunctionz(z) 
  z.addListener(myFunctionz) 

  function myFunctionw(w) {
    if (w.matches) { 
      root.style.margin = "1rem";
      body.style.display = "flex";
      body.style.flexDirection = "column";
      left.style.width = "90%";
      right.style.width = "90%";
      itemsContainer.style.flexWrap = "wrap";
      form.style.flexWrap = "wrap";
      input.style.marginBottom = "1rem";
      dropdown.style.marginBottom = "1rem";
      radioDiv.style.marginBottom = "1rem";
      footer.style.flexDirection = "row";
      footer.style.margin = "0rem";
      footer.style.flexWrap = "wrap";
      footer.style.maxWidth = "100%";
      enter.style.marginBottom = "2rem";
      cardArea.style.marginTop = "2rem";
      cardArea.style.flexDirection = "column-reverse";
    } 
  }
  
  let w = window.matchMedia("(max-width: 320px)")
  myFunctionw(w) 
  w.addListener(myFunctionw) 
