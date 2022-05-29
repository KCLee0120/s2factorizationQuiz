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

//Type5 : abx+acx^2y+adxy, where x is an unknown, a is a random common factor, b and c are random constant
function factorizationType5(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(1, 10);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0 || gcd_two_numbers(b, c)!=1);
  do{
    var d = getRndInteger(-10, 10);
  }while(d==0 || gcd_two_numbers(c, d)!=1 || gcd_two_numbers(b, d)!=1);

  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + value2Coe(a*c) + unknowns[unknownNumber][0] + "^2" + unknowns[unknownNumber][1] + value2Coe(a*d) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "$";
  var correctOption = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + b + value2Coe(c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(d) + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][1] + "(" + b + value2Coe(c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(d) + unknowns[unknownNumber][0] + ")$";
  var wrongOption2 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + b + value2Coe(-c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(-d) + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$" + value2FirstCoe(a) + "(" + b + value2Coe(c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(d) + unknowns[unknownNumber][1] + ")$";

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

// Type6 : abxy^m+acx^nyz^i+adx^ny^kz, where x and y are unknowns, a is a random common factor, b is a positive constant and c is a negative constant
function factorizationType6(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);

  var a = getRndInteger(2, 12);
  do{
    var b = getRndInteger(2, 6);
  }while(a*b>40);
  do{
  var c = getRndInteger(-10, 10);
}while(c==0);
  do{
    var d = getRndInteger(-10, 10);
}while(d==0||(gcd_two_numbers(b, d)!=1&&gcd_two_numbers(c, d)!=1));

  var m = getRndInteger(2, 4);
  do{
    var k = getRndInteger(2, 4);
  }while(m==k);
  var n = getRndInteger(2, 3);
  var i = getRndInteger(2, 3);

  var question = "$" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "^" + m + value2Coe(a*c) + unknowns[unknownNumber][0] + "^" + n + unknowns[unknownNumber][1] + unknowns[unknownNumber][2] + "^" + i + value2Coe(a*d) + unknowns[unknownNumber][0] + "^" + n + unknowns[unknownNumber][1] + "^" + k + unknowns[unknownNumber][2] + "$";
  var correctOption = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) +　unknowns[unknownNumber][1] + value2Index(m-1) + value2Coe(c) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][2] + value2Index(i) + value2Coe(d) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][1] + value2Index(k-1) + unknowns[unknownNumber][2] + ")" + "$";
  var wrongOption1 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) +　unknowns[unknownNumber][1] + value2Index(m-1) + value2Coe(-c) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][2] + value2Index(i) + value2Coe(-d) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][1] + value2Index(k-1) + unknowns[unknownNumber][2] + ")" + "$";
  var wrongOption2 = "$" + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) +　unknowns[unknownNumber][1] + value2Index(m-1) + value2Coe(c) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][2] + value2Index(i) + value2Coe(-d) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][1] + value2Index(k-1) + unknowns[unknownNumber][2] + ")" + "$";
  var wrongOption3 = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "^2" + "(" + value2FirstCoe(b) +　unknowns[unknownNumber][1] + value2Index(m-1) + value2Coe(c) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][2] + value2Index(i) + value2Coe(d) + unknowns[unknownNumber][0] + value2Index(n-1) + unknowns[unknownNumber][1] + value2Index(k-1) + unknowns[unknownNumber][2] + ")" + "$";

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

// Type7 : ax(bx+cy)+d(bx+cy)
function factorizationType7(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(a, d)!=1)

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")" + value2Coe(d) + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var correctOption = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(d) + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a*d) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption2 = "$" + value2FirstCoe(a+d) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(-d) + ")$";
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

// Type8 : ax(bx+cy)+dy(bx+cy)
function factorizationType8(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(a, d)!=1)

  var question = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")" + value2Coe(d) + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var correctOption = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(d) + unknowns[unknownNumber][1] + ")$";
  var wrongOption1 = "$" + value2FirstCoe(a*d) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption2 = "$" + value2FirstCoe(a+d) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-d) + unknowns[unknownNumber][1] + ")$";
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

//a(bx+cy)^2+d(bx+cy)
function factorizationType9(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(a, d)!=1)

  var question = "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")^2" + value2Coe(d) + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  var correctOption = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + value2Coe(a*c) + unknowns[unknownNumber][1] + value2Constant(d) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + value2Constant(d) + ")$";
  var wrongOption2 = "$" + value2FirstCoe(a) +"(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + value2Constant(d) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + value2Coe(-a*c) + unknowns[unknownNumber][1] + value2Constant(-d) + ")$";
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

//acxy+abx+cdy+bd
function factorizationType10(){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(1, 10);
  }while(gcd_two_numbers(c, b)!=1);
  do{
    var d =getRndInteger(-6, -2);
  }while(gcd_two_numbers(a, d)!=1);

  var question = "$" + value2FirstCoe(a*c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*b) + unknowns[unknownNumber][0] + value2Coe(c*d) + unknowns[unknownNumber][1] + value2Coe(b*d) + "$";
  var correctOption = "$(" + value2FirstCoe(c) + unknowns[unknownNumber][1] + value2Constant(b) + ")(" + value2FirstCoe(a) +  unknowns[unknownNumber][0] + value2Constant(d) + ")$";
  var wrongOption1 = "$(" + value2FirstCoe(c) + unknowns[unknownNumber][1] + value2Constant(b) + ")(" + value2FirstCoe(a) +  unknowns[unknownNumber][0] + value2Constant(-d) + ")$";
  var wrongOption2 = "$(" + value2FirstCoe(c) + unknowns[unknownNumber][1] + value2Constant(-b) + ")(" + value2FirstCoe(a) +  unknowns[unknownNumber][0] + value2Constant(d) + ")$";
  var wrongOption3 = "$(" + value2FirstCoe(c) + unknowns[unknownNumber][1] + value2Constant(b) + ")(" + d + value2Coe(-a) + unknowns[unknownNumber][0] + ")$";
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
var getType5Info = factorizationType5();
var getType6Info = factorizationType6();
var getType7Info = factorizationType7();
var getType8Info = factorizationType8();
var getType9Info = factorizationType9();
var getType10Info = factorizationType10();

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
    {
    numb: 5,
    question: "因式分解 " + getType5Info.question + "。",
    answer: getType5Info.answer,
    options: getType5Info.option,
  },
    {
    numb: 6,
    question: "因式分解 " + getType6Info.question + "。",
    answer: getType6Info.answer,
    options: getType6Info.option,
  },
    {
    numb: 7,
    question: "因式分解 " + getType7Info.question + "。",
    answer: getType7Info.answer,
    options: getType7Info.option,
  },
    {
    numb: 8,
    question: "因式分解 " + getType8Info.question + "。",
    answer: getType8Info.answer,
    options: getType8Info.option,
    },
    {
    numb: 9,
    question: "因式分解 " + getType9Info.question + "。",
    answer: getType9Info.answer,
    options: getType9Info.option,
    },
    {
    numb: 10,
    question: "因式分解 " + getType10Info.question + "。",
    answer: getType10Info.answer,
    options: getType10Info.option,
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

function value2Index(n){
  if(n==1)
    return "";
  else if (n>1)
    return ("^" + n);
}

