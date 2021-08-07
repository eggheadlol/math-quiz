player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn - "+player2_name;

question_turn="player1";
answer_turn="player2";

function send(){
    
    get_1=document.getElementById("no1").value;
    get_2=document.getElementById("no2").value;
    no=get_1*get_2;
    
    
    question="<h4 id='word_display'>Q."+get_1+" X "+get_2+"</h4>";
    box="<br>answer:<input type='text' id='input_check_box'>";
    check1="<br> <br> <button class='btn btn-info' onclick='check()'>CHECK</button>";
    
    row=question+box+check1;
    document.getElementById("output").innerHTML=row;
    
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";
}
console.log(question_turn);
function check(){
answer=document.getElementById("input_check_box").value;
  if (answer==no) {
      if (answer_turn=="player1") {
          player1_score=player1_score+1;
          document.getElementById("player1_score").innerHTML=player1_score;
      }else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;

      }
  }

  if(question_turn=="player1"){

    question_turn="player2";
    document.getElementById("player_question").innerHTML="question turn - "+player2_name;

  }
  else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="question turn - "+player1_name;

  }
console.log(question_turn);
if(answer_turn=="player1"){

    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="answer turn - "+player2_name;

  }
  else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="answer turn - "+player1_name;

  }  
  document.getElementById("output").innerHTML="";
}