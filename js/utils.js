// Change link color of the current page link with CSS
function highlightCurrent() {
    const curPage = document.URL;
    const links = document.getElementsByTagName('a');
    for (let link of links) {
        if (link.href == curPage) {
            link.classList.add("active");
        }
    }
}


const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const QUESTIONS = [
    "What is your Gender?", 
    "What is your Specialization?", 
    "What is your Nationality?", 
    "Where do you live (City)?", 
    "What are skilled at (Primary Languange)?"
];
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
    2: ["Backend Engineer", "Frontend Engineer", "Full-stack Engineer", "DevOps Engineer", "Machine Learning Engineer"],
    3: ['Kenyan', "Egyptian", "Ugandan", "Nigerian"],
    4: ['Nairobi', "Kampala", "Lagos", "Cairo", "Others"],
    5: ['Python', 'Java', 'PHP', 'JavaScript', 'Typescript', 'Go', 'Ruby']
}

// generate li element tags
function listElement(index, choicesVals){
    return `
        <li>
            <input type="radio" id="choice${index}" name=${choicesVals[index]} value=${choicesVals[index]}>
            <label for=${choicesVals[index]}>${choicesVals[index]}</label><br>
        </li>
        `
}

// previous button
function getPrevQuestion(){
    if(i > 1){
        i -= 1;
        document.getElementById("number").innerHTML = `Question ${numbers[i]}`;
        document.getElementById("question").innerHTML = QUESTIONS[i];
        let questionChoices = "";
        let choicesVals = choices[i];
        for(let j=0; j < choicesVals.length; j++){
            questionChoices += listElement(j, choicesVals);
        }
        document.getElementById("choices").innerHTML = questionChoices;
    }
}

// next button
function getNextQuestion(){
    if(i < QUESTIONS.length){
        let temp = i
        document.getElementById("number").innerHTML = `Question ${numbers[temp+1]}`;
        document.getElementById("question").innerHTML = QUESTIONS[i];
        let questionChoices = "";
        let choicesVals = choices[temp+1];
        for(let j=0; j < choicesVals.length; j++){
            questionChoices += listElement(j, choicesVals);
            
        }
        document.getElementById("choices").innerHTML = questionChoices;
        i++;
    }
    
}


document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    highlightCurrent();
    getNextQuestion();
  };
}

prevButton.addEventListener('click', getPrevQuestion);
nextButton.addEventListener('click', getNextQuestion);
