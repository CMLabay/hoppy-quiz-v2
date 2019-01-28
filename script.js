'use strict'

let questionNum = 1;
let correct = 0;
let incorrect = 0;
//this will hold all of the questions
const myQuestion = [
  {
    question: 'What are the 4 ingredients of beer?',
    choices: ['Hops, water, grains, yeast', 'Hops, water, malt, yeast', 'Hops, water, grains, malt', 'Hops, grains, malt, yeast'],
    answer: 1
  },
  {
    question:'What does the term IPA stand for?',
    choices: ['Imperial Pale Ale', 'India’s Preferred Ale', 'Imperial Preferred Ale', 'India Pale Ale'],
    answer: 4
  },
  {
    question:'What ancient civilization is credited with discovering beer?',
    choices: ['Babylon', 'Egypt', 'Mesopotamia', 'Harappan'],
    answer: 3
  },
  {
    question:'Which gas gives beer its fizziness?',
    choices: ['Carbon Dioxide', 'Nitrogen', 'Either carbon dioxide or nitrogen', 'Who actually knows this?'],
    answer: 3
  },
  {
    question:'What flavor profile is standard in a berlinerweisse style beer?',
    choices: ['Sour', 'Bitter', 'Sweet', 'Spicy'],
    answer: 1
  },
  {
    question:'The head of a beer refers to ?',
    choices: ['The bottle cap', 'The foam on top', 'The strength of the beer’s flavor', 'The color of the beer'],
    answer: 2
  },
  {
    question:'Fermentation of the beer is caused when yeast consumes what?',
    choices: ['Water', 'Hops', 'Carbon dioxide', 'Sugar'],
    answer: 4
  },
  {
    question:'What style of beer is typically the darkest in color?',
    choices: ['Barleywine', 'Berlinerweisse', 'Pilsner', 'Bock'],
    answer: 1
  },
  {
    question:'Brasserie Cantillon is a belgian brewery famous for brewing what style of beer?',
    choices: ['Lager', 'Lambic', 'Stout', 'IPA'],
    answer: 2
  },
  {
    question:'What is the oldest independent brewery in Texas?',
    choices: ['Saint Arnold', 'Jester King', 'Real Ale', 'Spoetzl'],
    answer: 1
  }

]
//When the user clicks start button
function handleStartClick(){
  //first hide the quizBegin
  $('#js-start-btn').click(function(event) {
    $('.quizBegin').hide();
    //display the first question
    renderQuestion(myQuestion[questionNum - 1]);
  });
 
}
//when the user clicks submit
function handleSubmitClick(){
  $('.quiz').on('click', '#js-submit-btn', function(event){
    //check if answer is correct
    checkAnswer(myQuestion[questionNum - 1]);
    questionNum++;
  });
}
//when the user clicks next
function handleNextClick(){
  $('.quiz').on('click', '#js-next-btn', function(event){
    if(questionNum <= 10){
      const nextQuestion = myQuestion[questionNum - 1];
      renderQuestion(nextQuestion);
    }
    else{
    //when the user submits the last question display the results page and display restart button
      displayResults(correct);
    };
  });
}
//when the user clicks restart
function handleRestartClick(){
  $('.quiz').on('click', '#js-restart-btn', function(event){
    //reset question number to 1.
    questionNum = 1;
    correct = 0;
    incorrect = 0;
    //redisplay the first question
    renderQuestion(myQuestion[questionNum - 1]);
  });
}
function checkAnswer(currQuestion){ 
  let yayOrNay = '';
  let selected = $("input[type='radio']:checked").val();
  if(selected == currQuestion.answer){
    yayOrNay = `<h1>Cheers! You know your stuff!</h1>
    <img class='js-answer-img' src="Assets/Cheers.jpg" alt="two beers cheers"/>`;
    correct++;
  }
  else{
    yayOrNay = `<h1>Boo. Better luck next time.</h1>
      <p>The correct answer is: ${currQuestion.choices[currQuestion.answer - 1]}</p>
      <img class="js-answer-img" src="Assets/ouch.jpg" alt="man who looks hurt" />`;
    incorrect++;
  }
  yayOrNay+='<button id="js-next-btn">Next</button>';
  $('.quiz').html(yayOrNay);
}

//display the results after the user clicks through each question
function displayResults(correct){
  const results = `<h2>You answered ${correct} correct<h2>
  <button id="js-restart-btn">Restart</button>`;
  $('.quiz').html(results);
}

//to display each question
function renderQuestion(nextQuest){
  console.log('inside render question');
  const currentQuestion =
    `<form class="question-form">
      <fieldset>
        <legend>${nextQuest.question}</legend>
        <label>
          <input name="choice" class="form-radio" type="radio" value="1" checked>${nextQuest.choices[0]}<br>
        <label>
          <input name="choice" class="form-radio" type="radio" value="2">${nextQuest.choices[1]}<br>
        </label>
        <label>
          <input name="choice" class="form-radio" type="radio" value="3">${nextQuest.choices[2]}<br>
        </label>
        <label>
          <input name="choice" class="form-radio" type="radio" value="4">${nextQuest.choices[3]}<br>
        </label>
      </fieldset>
      <button class="submit" id="js-submit-btn">Submit</button>
      <section class="quiz-tracker">
        <p class="progress">Question ${questionNum} out of 10</p>
        <p class="score">Correct: ${correct} Incorrect: ${incorrect}</p>
      </section>
    </form>`;
    $('.quiz').html(currentQuestion);
};

function handleQuiz(){
  handleStartClick();
  handleSubmitClick();
  handleNextClick();
  handleRestartClick();
}
//When the page load
$(handleQuiz);
