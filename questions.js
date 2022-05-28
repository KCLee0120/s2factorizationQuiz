// quesiton: acx + bc
function factorizationType1(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(1, 8);
  do{
    var b = getRndInteger(1, 8);
  }while(gcd_two_numbers(a, b)!=1 || a==b);
  var c = getRndInteger(2, 8);

  var question = "$" + value2FirstCoe(a*c) + unknowns[unknownNumber] + value2Constant(b*c) + "$";
  var correctOption = "$" + value2FirstCoe(c) + "(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(c) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(a) + ")$";
  var wrongOption2 = "$" + value2FirstCoe(c) + "(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b*c) + ")$";
  var wrongOption3 = "$" + value2FirstCoe(a*c) + "(" + value2FirstCoe(a*c) + unknowns[unknownNumber] + value2Constant(b) + ")$";

  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " +  correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " +wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " +wrongOption3;

  return{question, option, answer};

}

//Type2 : abx+ac, where x is an unknown, a is a random common factor, b is a positive constant and c is a negative constant
function factorizationType2(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(1, 10);

  do{
    var c = getRndInteger(-10, -1);
  }while(gcd_two_numbers(b, c)!=1);


  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber] + value2Constant(a*c) + "$";
  var correctOption = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(c) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(a*c) + ")$";
  var wrongOption2 = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-c) + ")$";
  var wrongOption3 = "$" + value2FirstCoe(-a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(-c) + ")$";

  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[((randomOption+3)%4)] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};

}

//Type3 : abx^2+acx, where x is an unknown, a is a random common factor, b and c are random constant
function factorizationType3(){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(2, 8);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0 || gcd_two_numbers(b, c)!=1);

  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber] + "^2" + value2Constant(a*c) + unknowns[unknownNumber] + "$";
  var correctOption = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(c) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + "^2" + value2Coe(-c) + unknowns[unknownNumber] + ")$";
  var wrongOption2 = "$" + value2FirstCoe(-a) + unknowns[unknownNumber] + "(" + value2FirstCoe(-b) + unknowns[unknownNumber] + value2Constant(c) + ")$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(-c) + ")$";

  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";

  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};

}

//Type4 : abxy+acx, where x is an unknown, a is a random common factor, b and c are random constant
function factorizationType4(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(2, 6);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0 || gcd_two_numbers(b, c)!=1);


  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*c) + unknowns[unknownNumber][0]  + "$";
  var correctOption = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Constant(c) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Constant(-c) + ")$";
  var wrongOption2 = "$" + value2FirstCoe(-a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(-b) + unknowns[unknownNumber][1] + value2Constant(c) + ")$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Constant(c) + ")$";

  var option = [];

  var randomOption = getRndInteger(0, 3);
  if(randomOption==0)
      var answer = "optionA";
  else if (randomOption==1)
      var answer = "optionB";
  else if (randomOption==2)
      var answer = "optionC";
  else if (randomOption==3)
      var answer = "optionD";
  option[randomOption] = String.fromCharCode(randomOption+65) + ". " + correctOption;
  option[(randomOption+1)%4] = String.fromCharCode((randomOption+1)%4+65) + ". " + wrongOption1;
  option[(randomOption+2)%4] = String.fromCharCode((randomOption+2)%4+65) + ". " + wrongOption2;
  option[(randomOption+3)%4] = String.fromCharCode((randomOption+3)%4+65) + ". " + wrongOption3;

  return{question, option, answer};

}

var getType1Info = factorizationType1();
var getType2Info = factorizationType2();
var getType3Info = factorizationType3();
var getType4Info = factorizationType4();

// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "因式分解 " + getType1Info.question + "。",
    answer: getType1Info.answer,
    options: getType1Info.option
  },
    {
    numb: 2,
    question: "因式分解 " + getType2Info.question +　"。",
    answer: getType2Info.answer,
    options: getType2Info.option,
  },
    {
    numb: 3,
    question: "因式分解 " + getType3Info.question + "。",
    answer: getType3Info.answer,
    options: getType3Info.option,
  },
    {
    numb: 4,
    question: "因式分解 " + getType4Info.question + "。",
    answer: getType4Info.answer,
    options: getType4Info.option,
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

// returns H.C.F. of x and y
function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// returns a random integer between min and max (both included)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function value2FirstCoe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return n;
    else
      return "";
}

function value2Constant(n){
  if(n>0)
    return "+" + n;
  else if(n<0)
    return "-" + Math.abs(n);
  else
    return "";
}

function value2Coe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return "+" + n;
    else
      return "+";
}
