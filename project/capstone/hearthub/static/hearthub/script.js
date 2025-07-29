// create a user, who has water intake, history of weight, and medications

// 1) Showing and Hiding the Menu

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("show_menu_button").addEventListener("click", () => show_menu())
  document.getElementById("hide_menu_button").addEventListener("click", () => hide_menu())

  display_view('home');

  // Menu Bar Links
  document.getElementById("HomeLink").addEventListener("click", ()=> {display_view('home'); hide_menu()});
  document.getElementById("AboutLink").addEventListener("click", ()=> {display_view('about_card'); hide_menu()});
  document.getElementById("WaterLink").addEventListener("click", ()=> {display_view('water_card'); hide_menu()});
  document.getElementById("WeightLink").addEventListener("click", ()=> {display_view('weight_card'); hide_menu()});
  document.getElementById("SymptomLink").addEventListener("click", ()=> {display_view('symptom_card'); hide_menu()});


  // Water Card
  print_water_scale();
  edit_cups();
  document.getElementById("FR").addEventListener("click", () => displaySaveButton("changeFR"))

  // Weight Card
  document.getElementById("IBW").addEventListener("click", () => displaySaveButton("changeIBW"))
  document.getElementById("weight_today").addEventListener("click", () => displaySaveButton("changeWeightToday"))
})

function show_menu() {
  document.querySelector(".menu").classList.add("menu-display");
  document.querySelector(".menu").classList.remove("menu-hide");
  document.querySelector(".banner").style.opacity = "0.2";
  document.querySelector(".main-contents").style.opacity = "0.2";

  document.querySelector(".menu button").classList.add("animate-rotate");
}

function hide_menu() {
  document.querySelector(".menu").classList.add("menu-hide");
  document.querySelector(".menu").classList.remove("menu-display");
  document.querySelector(".banner").style.opacity = "1";
  document.querySelector(".main-contents").style.opacity = "1";
  document.querySelector(".menu button").classList.remove("animate-rotate");
}

function print_water_scale() {
  let FR = document.querySelector("#FR").value;

  // Returns array [displayed_cups, cupCapacity]
  let displayCups = calculate_cup_capacity(FR);
  let maxCups = (document.querySelector("#water_today").value) / (displayCups[1])
  number_cups = displayCups[0];

  draw_cups(number_cups, maxCups);
}

function calculate_cup_capacity(fluidrestriction) {
  let displayed_cups = 0;
  let cupCapacity = 0;

  if (fluidrestriction % 300 == 0) {
    cupCapacity = 300;
  }
  else {
    cupCapacity = 200;
  }
  displayed_cups = Math.floor(fluidrestriction / cupCapacity);

  document.querySelector("#capacity").value = `${cupCapacity}`;

  return [displayed_cups, cupCapacity];
}

function draw_cups(number_cups, maxCups) {
  let edit = "";

  if (number_cups >= maxCups) {
    for (let i = 0; i < number_cups; i++)
      edit += `<div id=cup${i}><h2>🥛 </h2></div>`;
  }
  else {
    for (let i = 0; i < maxCups; i++)
      edit += `<div id=cup${i}><h2>🥛 </h2></div>`;
  }
  document.querySelector(".cups").innerHTML = edit;
}

function edit_cups() {
  let consumed = parseInt(document.querySelector("#water_today").value);
  let FR = parseInt(document.querySelector("#FR").value);
  let capacity = parseInt(document.querySelector("#capacity").value);
  let drunk = consumed / capacity;

  console.log(`Drunk ${drunk} cups of water.`);

  if (consumed <= FR) {
    for (let i = 0; i < drunk; i++) {
      highlight_cup("drunk", i);
    }
  }
  else if (consumed > FR) {
    for (let i = 0; i < FR / capacity; i++) {
      highlight_cup("drunk", i);
    }
    for (let i = FR / capacity; i < consumed / capacity; i++) {
      highlight_cup("toodrunk", i)
    }
    document.querySelector("#water-message").innerHTML = "Too drunk too soon!!"
  }

}

function highlight_cup(className, cup_id) {
  cup = document.querySelector(`#cup${cup_id}`);
  cup.classList.remove('drunk', 'toodrunk');
  cup.classList.add(className);
}

function displaySaveButton(id){
  document.getElementById(id).classList.remove("display_none");
}

// toggle to edit weight restriction
function editweightrestriction() {
  const instruction = document.querySelector("#editWeightRestriction").innerText;

  if (instruction.includes('Edit')) {
    console.log("Will edit weight IBW");
    document.querySelector("#changeIBW").style.display = "block";
    document.querySelector("#IBW").disabled = false;
    document
      .querySelector("#editWeightRestriction")
      .classList.remove("btn-primary");
    document.querySelector("#editWeightRestriction").classList.add("btn-danger");
    document.querySelector("#editWeightRestriction").innerHTML = "Cancel ✖";

  } else {
    console.log("Cancel IBW edit");
    document.querySelector("#changeIBW").style.display = "none";
    document.querySelector("#IBW").disabled = true;
    document
      .querySelector("#editWeightRestriction")
      .classList.add("btn-primary");
    document
      .querySelector("#editWeightRestriction")
      .classList.remove("btn-danger");
    document.querySelector("#editWeightRestriction").innerHTML =
      "Edit Ideal Body Weight";
  }
}

// user presses a button to rate their symptoms - display message
// e.g. user presses symptoms('breathlessness'), for 1

function symptoms(topic, element) {
  let message = document.getElementById(`${topic}_message`)
  let rating;
  switch (Number(element.innerHTML)) {
    case 1:
      rating = "one";
      break;
    case 2:
      rating = "two";
      break;
    case 3:
      rating = "three";
      break;
  }

  // constructing objects using a class template
  class Topic {
    constructor(param1, param2, param3) {
      this.one = param1;
      this.two = param2;
      this.three = param3;
    }
  }
  const topics = {
    breathlessness: new Topic(
      "No new or worsening shortness of breath",
      "Worsening shortness of breath with activity",
      "Shortness of breath at rest"),
    cough: new Topic(
      "None or normal cough",
      "Dry, hacking cough",
      "Frequent hacking cough - either dry or wet sounding"
    ),
    leg_swelling: new Topic(
      "No new swelling; feet, ankles and legs look normal for you",
      "Increased swelling of legs, ankles and feet",
      "Increased discomfort or swelling in the lower body"
    ),
    abdomen_swelling: new Topic(
      "No new swelling: abdomen looks normal for you",
      "Mild discomfort or swelling in the abdomen",
      "Increased discomfort or swelling in the abdomen, may include a loss of appetite or nausea"
    ),
    sleeping: new Topic(
      "Sleeping is normal",
      "Mild trouble sleeping",
      "Increased trouble sleeping; need extra pillows"
    ),
    other: new Topic(
      "No chest pain, dizziness or confusion",
      "",
      "New or worsening dizziness, confusion, sadness or depression"
    )
  }

  message.innerHTML = topics[topic][rating];
}

function display_view(topic) {
  document.querySelectorAll('.main-contents > div.card').forEach(element => {
    element.classList.add("display_none");
    if (element.classList.contains("description")) {
      element.classList.remove("flexColumnCenter")
    }
  })

  document.querySelectorAll(`.main-contents > div.${topic}`).forEach(element => {
    element.classList.remove("display_none");
    if (element.classList.contains("description")) {
      element.classList.add("flexColumnCenter")
    }
  });
}

function expand_view(topic, element) {
  if (element.innerHTML.includes('Information')) {
    element.innerHTML = 'Go Back';
    display_view(topic);
  }
  else {
    element.innerHTML = 'More Information';
    display_view('home');
  }
}
