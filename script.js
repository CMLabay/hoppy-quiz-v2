'use strict'

let questionNum = 1;
let correct = 0;
let incorrect = 0;
//this will hold all of the questions
const myQuestion = [
  {
    question: 'This is the first question',
    choices: ['ans 1', 'ans 2', 'ans 3', 'ans 4'],
    answer: 1
  },
  {
    question:'This is the second question',
    choices: ['ans a', 'ans b', 'ans c', 'ans d'],
    answer: 3
  },
  {
    question:'This is the third question',
    choices: ['ans a', 'ans b', 'ans c', 'ans d'],
    answer: 3
  },
  {
    question:'This is the fourth question',
    choices: ['ans a', 'ans b', 'ans c', 'ans d'],
    answer: 3
  },
  {
    question:'This is the fifth question',
    choices: ['ans a', 'ans b', 'ans c', 'ans d'],
    answer: 3
  },
  {
    question:'This is the sixth question',
    choices: ['ans a', 'ans b', 'ans c', 'ans d'],
    answer: 3
  },
  {
    question:'This is the seventh question',
    choices: ['ans a', 'ans b', 'ans c', 'ans d'],
    answer: 3
  },
  {
    question:'This is the eighth question',
    choices: ['ans a', 'ans b', 'ans c', 'ans d'],
    answer: 3
  },
  {
    question:'This is the nineth question',
    choices: ['ans a', 'ans b', 'ans c', 'ans d'],
    answer: 3
  },
  {
    question:'This is the tenth question',
    choices: ['ans a', 'ans b', 'ans c', 'ans d'],
    answer: 3
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
    yayOrNay = '<h1>Woohoo! You know your stuff!</h1>';
    correct++;
  }
  else{
    yayOrNay = `<h1>Boo. Better luck next time.<h1>
      <p>The correct answer is: ${currQuestion.choices[currQuestion.answer - 1]}</p>`;
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
    '<form class="question-form">' +
      '<fieldset>'+
        '<h2>'+nextQuest.question+'<h2>' +
        '<input name="choice" type="radio" value="1" checked>'+nextQuest.choices[0]+'<br>'+
        '<input name="choice" type="radio" value="2">'+nextQuest.choices[1]+'<br>'+
        '<input name="choice" type="radio" value="3">'+nextQuest.choices[2]+'<br>'+
        '<input name="choice" type="radio" value="4">'+nextQuest.choices[3]+'<br>'+
      '</fieldset>'+
      '<button class="submit" id="js-submit-btn">Submit</button>'+
      '<section class="quiz-tracker">' +
        '<p>Question '+questionNum+' out of 10</p>'+
        '<p>Correct: '+ correct+' Incorrect: '+incorrect+
      '</section>'+
    '</form>';
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
