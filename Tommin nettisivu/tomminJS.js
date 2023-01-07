//Tommi Salos code
//lets start by making two variables used in calculating the amount of correct answers and answerred questions
let correctAns = Number(0);
let answered = Number(0);


//then I add some variables to place the text that contains the amount of correct answers and the text that contains the number of answered questions
let resultAns = document.getElementById("resultANS");
let answereed = document.getElementById("resultCorrect");

//this function is a random number generator, used alot in this code
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//this is the function that happens after clicking the first button
//this function makes all the questions visible and hides the first button
function aloita(){
    let aloita = document.getElementById("buttonDiv");
    let q1 = document.getElementById("show1");
    let q2 = document.getElementById("show2");
    let q3 = document.getElementById("show3");
    let q4 = document.getElementById("show4");
    let q5 = document.getElementById("show5");
    toggleHide(aloita);
    toggleHide(q1);
    toggleHide(q2);
    toggleHide(q3);
    toggleHide(q4);
    toggleHide(q5);
    question1();
    question2();
    question3();
    question4();
    question5();
    let button = document.getElementById("end");
    toggleHide(button);
  
}

//this is the function that hides or shows the wanted thing
function toggleHide(x){
    x.classList.toggle("hide");
}

//this function makes the order of the correct answer random
function choices(correct,wrong1,wrong2,wrong3,wrong4,choice1,choice2,choice3,choice4,choice5,rand){
    if(rand === 1){
        choice1.textContent = correct;
        choice2.textContent = wrong1;
        choice3.textContent = wrong3;
        choice4.textContent = wrong4;
        choice5.textContent = wrong2;
    }
    else if(rand === 2){
        choice1.textContent = wrong1;
        choice2.textContent = correct;
        choice3.textContent = wrong3;
        choice4.textContent = wrong4;
        choice5.textContent = wrong2;
    }
    else if(rand === 3){
        choice1.textContent = wrong3;
        choice2.textContent = wrong1;
        choice3.textContent = correct;
        choice4.textContent = wrong4;
        choice5.textContent = wrong2;
    }    
    else if(rand === 4){
        choice1.textContent = wrong4;
        choice2.textContent = wrong1;
        choice3.textContent = wrong3;
        choice4.textContent = correct;
        choice5.textContent = wrong2;
    }else{
        choice1.textContent = wrong2;
        choice2.textContent = wrong1;
        choice3.textContent = wrong4;
        choice4.textContent = wrong3;
        choice5.textContent = correct;
    }
}
//the first question function and this is copy and paste in the other questions aswell, with a bit of mixing in each question
function question1(){
    //make a variable that has the number of the question
    let quenum = Number(1);
    //get the question from HTML and put it into a variable
    let q1 = document.getElementById("question1");
    //use the information in the function
    q1.addEventListener("submit", calculate1);
    //get the place of the text to put the result in
    let result = document.getElementById("result1");
    //get two random numbers and make them numbers
    let q1numx1 = getRndInteger(1, 15);
    let num1 = Number(q1numx1);
    let q1numx2 = getRndInteger(1, 15);
    let num2 = Number(q1numx2);
    //get the place of the calculation
    let showNum1 = document.getElementById("num1");

    
    
    showNum1.textContent = num1 +" + " +num2;
    //make all the answers choices
    let correct = num1+num2;
    let wrong1 = num1+num2+Number(7);
    let wrong2 = (num1+num2)*Number(2);
    let wrong3 = num1-num2;
    let wrong4 = num1+num2+Number(1);
    //get the places for all the radio buttons
    let choice1 = document.getElementById("1.1");
    let choice2 = document.getElementById("1.2");
    let choice3 = document.getElementById("1.3");
    let choice4 = document.getElementById("1.4");
    let choice5 = document.getElementById("1.5");
    //get the random number that makes the question have random choises
    let rand2 = getRndInteger(1, 5);
    let numrand2 = Number(rand2);
    //make the correct answer a random one with the random number gotten
    choices(correct,wrong1,wrong2,wrong3,wrong4,choice1,choice2,choice3,choice4,choice5,numrand2);
    
    
    //this function happens after the check button is clicked
    function calculate1(event){
        event.preventDefault();
        //get the form data
        let qu1 = new FormData(q1);
        //use the gotten formdata to get the chosen radiobutton
        let arit1 = qu1.get("arit1")
        let calculation = num1 + num2;
        
        //get the question to make it dissapear later
        let que1 = document.getElementById("show1");
        //make what the correct answer what it should be
        let aritnum = "sum" + numrand2;

        //print text of, number of correct answers, number of answerred questions and if answer was right or wrong 
        ansText(quenum,arit1,aritnum,que1,calculation,result);
  
    }

}
//mostly same as last one with a bit of difference
function question2(){
    let quenum = Number(2);

    let q2 = document.getElementById("question2");
    q2.addEventListener("submit", calculate2);
    let result = document.getElementById("result2");

    let q2numx1 = getRndInteger(10, 20);
    let num1 = Number(q2numx1)
    let showNum1 = document.getElementById("num2");

    let q2numx2 = getRndInteger(1, 7);
    let num2 = Number(q2numx2);
    showNum1.textContent = num1 +" - " +num2;

    let correct = num1-num2;
    let wrong1 = num1-num2+Number(12);
    let wrong2 = (num1-num2)*Number(2);
    let wrong3 = num1;
    let wrong4 = num1-num2+Number(1);

    let choice1 = document.getElementById("2.1");
    let choice2 = document.getElementById("2.2");
    let choice3 = document.getElementById("2.3");
    let choice4 = document.getElementById("2.4");
    let choice5 = document.getElementById("2.5");

    let rand2 = getRndInteger(1, 5);
    let numrand2 = Number(rand2);

    choices(correct,wrong1,wrong2,wrong3,wrong4,choice1,choice2,choice3,choice4,choice5,numrand2);
 
    function calculate2(event){
        event.preventDefault();
    
        let qu2 = new FormData(q2);
    
    

        let arit2 = qu2.get("arit2")
        let calculation = num1 - num2;

        let que1 = document.getElementById("show2");
        let aritnum = "sub" + numrand2;

        //
        ansText(quenum,arit2,aritnum,que1,calculation,result);
    }
}
//same as the first one with a difference of having a random question of a possible 3
function question3(){
    let quenum = Number(3);
    //this is used in determening what the question is
    let numrand1 = getRndInteger(1, 3);
    let rand = Number(numrand1);

    let q3 = document.getElementById("question3");
    q3.addEventListener("submit", calculate3);
    let result = document.getElementById("result3");
    let q3numx1;
    let num1;
    let showNum1;
    let q3numx2;
    let num2;

    if(rand === 1){
        //get a random number that determines the numbers
        let rand3 = getRndInteger(1, 5);
        if(rand3 === 1){
            q3numx1 = 2;
        }
        else if(rand3 === 2){
            q3numx1 = 10;
        }
        else if(rand3 === 3){
            q3numx1 = 90;
        }
        else if(rand3 === 4){
            q3numx1 = 150;
        }else{
            q3numx1 = 1000; 
        }
        num1 = Number(q3numx1);
        showNum1 = document.getElementById("num3");
    
        q3numx2 = 2;
        num2 = Number(q3numx2);
        showNum1.textContent = num1 +" / " +num2;
          
    }      
    else if(rand === 2){   
        q3numx1 = 280;
        num1 = Number(q3numx1);
        showNum1 = document.getElementById("num3");
        

        q3numx2 = 10;
        num2 = Number(q3numx2);
        showNum1.textContent = num1 +" / " +num2;

    }else{   
        q3numx1 = 30;
        num1 = Number(q3numx1);
        showNum1 = document.getElementById("num3");

        q3numx2 = 2;
        num2 = Number(q3numx2);
        showNum1.textContent = num1 +" / " +num2;
        
    }
    let correct = num1/num2;
    let wrong1 = num1/num2+Number(12);
    let wrong2 = (num1/num2)*Number(2);
    let wrong3 = num1+num2+num1+num2-13;
    let wrong4 = num1/num2+Number(1);
        
    let choice1 = document.getElementById("3.1");
    let choice2 = document.getElementById("3.2");
    let choice3 = document.getElementById("3.3");
    let choice4 = document.getElementById("3.4");
    let choice5 = document.getElementById("3.5");
        

    let rand2 = getRndInteger(1, 5);
    let numrand2 = Number(rand2);

    choices(correct,wrong1,wrong2,wrong3,wrong4,choice1,choice2,choice3,choice4,choice5,numrand2);
    
    
    
    function calculate3(event){
        event.preventDefault();

        let qu3 = new FormData(q3);

    

        let arit3 = qu3.get("arit3")
        let calculation = num1 / num2;
        
        let que1 = document.getElementById("show3");
        let aritnum = "div" + numrand2;

        ansText(quenum,arit3,aritnum,que1,calculation,result);
        
    }
    
}
//basically same as the last one with different questions
function question4(){
    let quenum = Number(4);

    let numrand1 = getRndInteger(1, 3);
    let rand = Number(numrand1);

    let q4 = document.getElementById("question4");
    q4.addEventListener("submit", calculate4);
    let result = document.getElementById("result4");
    let q4numx1;
    let num1;
    let showNum1;
    let q4numx2;
    let num2;

    if(rand === 1){
        let rand3 = getRndInteger(1, 5);
        if(rand3 === 1){
            q4numx1 = 1;
        }
        else if(rand3 === 2){
            q4numx1 = 25;
        }
        else if(rand3 === 3){
            q4numx1 = 12;
        }
        else if(rand3 === 4){
            q4numx1 = 75;
        }else{
            q4numx1 = 50; 
        }
        num1 = Number(q4numx1);
        showNum1 = document.getElementById("num4");
    
        q4numx2 = 2;
        num2 = Number(q4numx2);
        showNum1.textContent = num1 +" * "+ num2;
          
    }      
    else if(rand === 2){   
        let rand3 = getRndInteger(1, 5);
        if(rand3 === 1){
            q4numx1 = 1;
        }
        else if(rand3 === 2){
            q4numx1 = 20;
        }
        else if(rand3 === 3){
            q4numx1 = 12;
        }
        else if(rand3 === 4){
            q4numx1 = 73;
        }else{
            q4numx1 = 50; 
        }
        num1 = Number(q4numx1);
        showNum1 = document.getElementById("num4");
        

        q4numx2 = 10;
        num2 = Number(q4numx2);
        showNum1.textContent = num1 +" * " +num2;

    }else{   
        q4numx1 = getRndInteger(1, 5000);
        num1 = Number(q4numx1);
        showNum1 = document.getElementById("num4");

        q4numx2 = 0;
        num2 = Number(q4numx2);
        showNum1.textContent = num1 +" * " +num2;
        
    }
    let correct = num1*num2;
    let wrong1 = num1-num2+Number(12);
    let wrong2 = (num1-num2)*Number(2);
    let wrong3 = num1+num2+num1+num2-13;
    let wrong4 = num1*num2+Number(1);
        
    let choice1 = document.getElementById("4.1");
    let choice2 = document.getElementById("4.2");
    let choice3 = document.getElementById("4.3");
    let choice4 = document.getElementById("4.4");
    let choice5 = document.getElementById("4.5");
        

    let rand2 = getRndInteger(1, 5);
    let numrand2 = Number(rand2);

    choices(correct,wrong1,wrong2,wrong3,wrong4,choice1,choice2,choice3,choice4,choice5,numrand2);
    
    function calculate4(event){
        event.preventDefault();

        let qu4 = new FormData(q4);

    

        let arit4 = qu4.get("arit4")
        let calculation = num1 * num2;

        let aritnum = "add" + numrand2;
        

        let que1 = document.getElementById("show4");

        ansText(quenum,arit4,aritnum,que1,calculation,result);     
    }
}
//the last question that doesn't have a specific theme, but still made with the same base
//it is a mix of different questions determined by a random number
function question5(){
    let quenum = Number(5);

    let numrand1 = getRndInteger(1, 3);
    let rand = Number(numrand1);

    let result = document.getElementById("result5");
    let q5numx1;
    let num1;
    let showNum1;
    let q5numx2;
    let num2;
    let q5numx3;
    let num3;
    let calculation;

    if(rand === 1){
        q5numx1 = 2 
        num1 = Number(q5numx1);
        showNum1 = document.getElementById("num5");
    
        q5numx2 = 3 ;
        num2 = Number(q5numx2);

        q5numx3 = 10
        num3 = Number(q5numx3);

        showNum1.textContent ="("+ num1 +" + " +num3+") * " +num2;
        calculation = (num1 + num3) * num2;
          
    }      
    else if(rand === 2){   
        q5numx1 = 5;
        num1 = Number(q5numx1);
        showNum1 = document.getElementById("num5");
        

        q5numx2 = 15;
        num2 = Number(q5numx2);

        q5numx3 = 3;
        num3 = Number(q5numx3);

        showNum1.textContent = num1 +" * " +num3+" + "+ num2;
        calculation = num1 * num3 + num2;
        
    }else{   
        q5numx1 = 50;
        num1 = Number(q5numx1);
        showNum1 = document.getElementById("num5");

        q5numx2 = 10;
        num2 = Number(q5numx2);

        q5numx3 = 4;
        num3 = Number(q5numx3);

        showNum1.textContent = num1 +" / " + num2 + " * " +num3;
        calculation = num1 / num2 * num3;
        
    }
    let correct = calculation;
    let wrong1 = num1-num2+Number(12);
    let wrong2 = (num1-num2)*Number(2);
    let wrong3 = num1+num2+num1+num2-13;
    let wrong4 = num1*num2+Number(1);
        
    let choice1 = document.getElementById("5.1");
    let choice2 = document.getElementById("5.2");
    let choice3 = document.getElementById("5.3");
    let choice4 = document.getElementById("5.4");
    let choice5 = document.getElementById("5.5");
        

    let rand2 = getRndInteger(1, 5);
    let numrand2 = Number(rand2);
    
    choices(correct,wrong1,wrong2,wrong3,wrong4,choice1,choice2,choice3,choice4,choice5,numrand2);
    
    let q5 = document.getElementById("question5");
    q5.addEventListener("submit", calculate5);
    
    function calculate5(event){
        event.preventDefault();

        let qu5 = new FormData(q5);

    

        let arit5 = qu5.get("arit5");
        
        let aritnum = "mix" + numrand2;
        

        let que1 = document.getElementById("show5");
        
        ansText(quenum,arit5,aritnum,que1,calculation,result);
    }
}
//this is the function that gives the text if the question was correct or not
function ansText(quenum,arit,aritnum,que1,calculation,result){
    if(arit === aritnum){
        //add text that says the answer was correct
        result.textContent="Kysymys"+quenum+": Vastasit oikein";
        //add 1 to the correct and answered questions
        correctAns++;
        answered++;
        //print the amount of correct answers and the amount of answered questions
        resultAns.textContent = "Olet vastannut yhteensä oikein "+ correctAns +"/5 kysymyksestä.";
        answereed.textContent = "Olet vastannut yhteensä "+ answered +"/5 kysymyksestä."
        //hide the question
        toggleHide(que1);
    }else{
        //add text that says the answer was wrong and give the correct answer
        result.textContent="Kysymys"+quenum+": Vastasit väärin. Oikea vastaus olisi ollut: "+calculation; 
        //add 1 to the answered questions
        answered++;
        //print the amount of correct answers and the amount of answered questions
        resultAns.textContent = "Olet vastannut yhteensä oikein "+ correctAns +"/5 kysymyksestä.";
        answereed.textContent = "Olet vastannut yhteensä "+ answered +"/5 kysymyksestä."
        //hide the question
        toggleHide(que1);
    }
}

//this is the function that after all the questions are answered and the last button is pressed, it gives a trophy depending on the success
function end(){
    let num1 = Number(answered);
    let num2 = Number(correctAns);
        //this makes sure that the trophy is not given untill all of the questions are answered
        if(num1 === 5){
            //this gives gold for getting most questions correct and tells the user
            if (num2 === 4 || num2 === 5) {
                //hide the last button and show the user their price
                let button = document.getElementById("end");
                toggleHide(button);

                let image = document.getElementById("gold");
                toggleHide(image);

                let endText = document.getElementById("endtext");
                endText.classList.toggle("end");
                endText.textContent="Hyvin tehty!! Sait todella monta oikein!!";
                //show the try again button
                let tryAgain = document.getElementById("again");
                toggleHide(tryAgain);
                //next gives silver for two or three correct answers and tells the user to try again
            } else if (num2 === 2 || num2 === 3) {
                let button = document.getElementById("end");
                toggleHide(button);

                let image = document.getElementById("silver");
                toggleHide(image);

                let endText = document.getElementById("endtext");
                endText.classList.toggle("end");
                endText.textContent="Hyvä yritys. Sait muutaman oikein, kannattaa kokeilla uudestaan.";

                let tryAgain = document.getElementById("again");
                toggleHide(tryAgain);
                //next gives the user a price for trying and says to try again
            }else{
                let button = document.getElementById("end");
                toggleHide(button);

                let image = document.getElementById("bronse");
                toggleHide(image);

                let endText = document.getElementById("endtext");
                endText.classList.toggle("end");
                endText.textContent="Nyt ei mennyt kovin hyvin, yritä uudelleen."

                let tryAgain = document.getElementById("again");
                toggleHide(tryAgain);
            }
        }
}