// Change link color of the current page with CSS
function highlightCurrent() {
    const curPage = document.URL;
    const links = document.getElementsByTagName('a');
    for (let link of links) {
        if (link.href == curPage) {
            link.classList.add("active");
        }
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        highlightCurrent()
    }
};

const nextButton = document.getElementById('quize-button');
const QUESTIONS = ["What is your gender?", "What is your profession?", "What is your Nationality?", "Where do you live?"];
var i = 0;
const numbers = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five'
}
const choices = {
    1: ['Male', "Female", 'Prefer not to say', "Others"],
    2: ["Doctor", "Engineer", "Teacher", "Epidemiologist"],
    3: ['Kenyan', "Egyptian", "Ugandan", "Nigerian"],
    4: ['Nairobi', "Kampala", "Lagos", "Cairo", "Others"],
    5: ['Five']
}

function getNextQuestion(){
    let temp = i
    document.getElementById("number").innerHTML = `Question ${numbers[temp+1]}`;
    document.getElementById("question").innerHTML = QUESTIONS[i];
    let questionChoices = "";
    for(let choice of choices[temp+1]){
        questionChoices += `<li id="chioce">${choice}</li>`
        
    }
    document.getElementById("chioces").innerHTML = questionChoices;
    console.log(temp+1, QUESTIONS[i]);
    i++;
}
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    getNextQuestion();
  };
}


nextButton.addEventListener('click', getNextQuestion);