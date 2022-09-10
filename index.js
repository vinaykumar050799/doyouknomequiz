var readlineSync = require('readline-sync')

//ask username
var userName = readlineSync.question('what is your name: ')
console.log('welcome '+userName+' to Do You Know VINAY!')

//questions array
var questions = [
  {
    question:'were do i live? ',
    answer:'armoor',
  },
  {
    question:'which colour i like? ',
    answer:'blue',
  },
  {
    question:'I work in which company? ',
    answer:'tcs',
  },
  {
    question:'what i eat everyday? ',
    answer:'egg',
  },
   {
    question:'My birthday month? ',
    answer:'july',
  },
  
]

//function 
score = 0
function quiz(question,answer){
  var uans = readlineSync.question(question)

  if (uans.toLowerCase() == answer.toLowerCase()){
    console.log('right!');
    score = score +1;
  }else{
    console.log('wrong!')
    score = score -1;
  }
  console.log("current Score: "+score);
  console.log('*************************')
}

//for loop
for(var i =0;i<questions.length;i=i+1){
  quiz(questions[i].question,questions[i].answer)
}