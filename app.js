let root = document.querySelector("#root");

// Setting entire body font to Monteserrat.
document.body.style.fontFamily = "Montserrat";

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
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.justifyContent = "flex-start";
root.style.alignItems = "flex-center";
root.style.margin = "1rem 5rem";
root.style.padding = "1rem 2rem";


// Creating a head element for Bling!! heading.
let head = createEle('div');

head.textContent = "BLING!"

head.style.display = "block";
head.style.textAlign = "center";
head.style.fontWeight = "bold";
head.style.margin = "2rem";
head.style.fontSize = "2rem";
head.style.textShadow = "0.15rem 0.15rem #FFA500";

root.appendChild(head);

// Creating body element for content and splitting the screen into two: right and left.
let body = createEle('div');
let left = createEle('div');
let right = createEle('div');

appendCh([left, right], body);
// body.appendChild(left);
// body.appendChild(right);

body.style.display = "flex";
body.style.flexDirection = "row";
body.style.justifyContent = "space-between";
body.style.alignItems = "center";

left.style.display = "flex";
left.style.flexDirection = "column";
left.style.justifyContent = "flex-start";
left.style.alignItems = "flex-start";

right.style.display = "flex";
right.style.flexDirection = "column";
right.style.justifyContent = "center";
right.style.alignItems = "center";
right.style.marginRight = "1rem";
right.style.padding = "1rem";
right.style.width = "25rem";
right.style.height = "20rem";

root.appendChild(body);

// Creating variable for content appearing on the left.
let text = createEle('h1');

text.style.fontSize = "4rem";
text.style.fontWeight = "bolder";
text.style.textAlign = "center";
text.style.textShadow = "0.15rem 0.15rem gray";
text.style.marginTop = "-13rem";

right.appendChild(text);

// Intro wraps the first two sentences appearing on the left side.
let intro = createEle('div');
let introPara = createEle('p');
let introHead = createEle('h1');

introPara.textContent = "Sizzle your Life";
introHead.innerHTML = "Make a Card<br/>";

introPara.style.fontSize = "1.5rem";
introPara.style.marginTop = "1rem";
introPara.style.marginBottom = "1rem";

introHead.style.fontSize = "4rem";
introHead.style.marginTop = "1rem";
introHead.style.marginBottom = "1rem";
introHead.style.fontWeight = "bolder";

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

itemsContainer.style.display = "flex";
itemsContainer.style.flexDirection = "row";
itemsContainer.style.justifyContent = "flex-start";
itemsContainer.style.alignItems = "stretch";
itemsContainer.style.marginTop = "rem";

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
    tileItem.style.backgroundColor = "transparent";
    tileItem.style.border = "0.20rem solid black";
    tileItem.style.borderRadius = "0.5rem";
    tileItem.style.marginRight = "1rem";
    tileItem.style.marginTop = "1rem";
    tileItem.style.marginBottom = "1rem";
    tileItem.style.padding = "1rem";
    tileItem.style.boxShadow = "0.25rem 0.25rem grey";
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

        imgElement.style.display = "block",
        imgElement.style.width = "10rem";
        imgElement.style.height = "10rem";
        imgElement.style.marginTop = "3rem";
        imgElement.style.position = "absolute";
        
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

form.style.display = "flex";
form.style.flexDirection = "row";
form.style.justifyContent = "flex-start";
form.style.alignItems = "stretch";
form.style.marginTop = "2rem";

let input = createEle('input');

input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.setAttribute("placeholder", "Name Your Bling!");

input.addEventListener("input", (e) => {
    console.log(e.target.value);
    text.textContent = e.target.value;
    

});

input.style.width = "10rem";
input.style.borderRadius = "0.5rem";
input.style.border = "1px solid grey";
input.style.color = "white";
input.style.padding = "1rem";
input.style.marginRight = "1rem";
input.style.backgroundColor = "black";
input.style.boxShadow = "0.25rem 0.25rem grey";
input.style.outline = "none";

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

dropdown.style.width = "10rem";
dropdown.style.borderRadius = "0.5rem";
dropdown.style.border = "1px solid grey";
dropdown.style.color = "gray";
dropdown.style.padding = "1rem";
dropdown.style.marginRight = "1rem";
dropdown.style.backgroundColor = "black";
dropdown.style.boxShadow = "0.25rem 0.25rem grey";
dropdown.style.outline = "none";

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
    radioDiv.style.borderRadius = "0.5rem";
    radioDiv.style.backgroundColor = "black";
    radioDiv.style.boxShadow = "0.25rem 0.25rem grey";
    radioDiv.style.color = "white";
    radioDiv.style.width = "10rem";
    radioDiv.style.padding = "0.5rem";
    radioDiv.style.paddingTop = "1rem";
    radioDiv.style.outline = "none";

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

        imgBlob.style.display = inline-block,
        imgBlob.style.width = "18rem";
        imgBlob.style.height = "17rem";
        imgBlob.style.marginTop = "3rem";
        imgBlob.style.position = "absolute";
        imgBlob.style.zIndex = "-1";
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

enter.style.marginTop = "2rem";
enter.style.backgroundImage = `url("./assets/images/camera.png")`;
enter.style.width = "4rem";
enter.style.height = "4rem";
enter.style.fontSize = "1rem";
enter.style.backgroundSize = "2rem 2rem";
enter.style.padding = "1rem";
enter.style.backgroundRepeat = "no-repeat";
enter.style.backgroundPosition = "center";
enter.style.borderRadius = "0.5rem";
enter.style.backgroundColor = "transparent";
enter.style.border = "0.20rem solid black";
enter.style.boxShadow = "0.25rem 0.25rem grey";
enter.style.outline = "none";

// Area where the card is generated.
let cardArea = createEle('div');

cardArea.style.display = "flex";
cardArea.style.flexDirection = "row-reverse";
cardArea.style.flexWrap = "wrap-reverse";
cardArea.style.alignItems = "center";
cardArea.style.justifyContent = "center";
cardArea.style.position = "relative";
cardArea.style.zIndex = "1";
cardArea.style.marginTop = "1rem";

root.appendChild(cardArea);

let card = createEle('div');

cardArea.appendChild(card);

// Function for generation of card.
function cardGen(el1, el2) {
    let card = createEle('div');

    card.style.width = "20rem";
    card.style.height = "25rem";
    card.style.margin = "1rem";
    card.style.border = "0.25rem solid black";
    card.style.zIndex = "2";
    card.style.boxShadow = "0.25rem 0.25rem grey";

    card.style.backgroundColor = backdrop;
    cardArea.appendChild(card);

    let clone = right.cloneNode(true);
    
    clone.style.display = "flex";
    clone.style.flexDirection = "column";
    clone.style.justifyContent = "center";
    clone.style.alignItems = "flex-start";
    clone.style.width = "15rem";
    clone.style.height = "20rem";
    clone.style.marginLeft = "2rem";
    clone.style.position = "absolute";
    clone.style.zIndex = "3";
    
    let imgDel = createEle('input');
    imgDel.setAttribute("type","image");
    imgDel.setAttribute("src", "./assets/images/icon_delete.png");

    imgDel.style.width = "3rem";
    imgDel.style.height = "3rem";
    imgDel.style.position = "relative";
    imgDel.style.marginLeft = "16.5rem";
    imgDel.style.zIndex = "4";

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

item1.style.margin = "1rem";
item1.style.padding = "1rem";
item1.style.fontWeight = "bold";

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

    aItem.style.margin = "1rem";
    aItem.style.padding = "1rem";
    aItem.style.fontWeight = "bold";
    aItem.style.textDecoration = "none";
    aItem.style.color = "black";
}

footer.style.order = "5";
footer.style.display = "flex";
footer.style.flexDirection = "row";
footer.style.justifyContent = "center";
footer.style.alignItems = "flex-end";
footer.style.marginTop = "5rem";

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
