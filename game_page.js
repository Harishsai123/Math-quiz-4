player1_name = localStorage.getItem("player_1_name");
player2_name = localStorage.getItem("player_2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = player1_name + " : ";
document.getElementById("player_2_name").innerHTML = player2_name + " : ";

document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -  " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


function send() {
    number1 = document.getElementById("word1").value;
    number2 = document.getElementById("word2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>"+number1+" x "+number2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='inout_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output_div").innerHTML = row;
    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
}
question_turn = "player_1";
answer_turn = "player_2";
function check() {
    get_answer = document.getElementById("inout_check_box").value;
    if(answer_turn == actual_answer) {
      if(answer_turn == "player_1"){
         update_player1_score = player1_score + 1;
         document.getElementById("player_1_score").innerHTML = update_player1_score;
      }
      else{
          update_player2_score = player2_score + 1;
          document.getElementById("player_2_score").innerHTML = update_player2_score;

      }
    }

    if( question_turn == "player_1"){
         question_turn = "player_2";
         document.getElementById("player_question").innerHTML = "Question - " + player2_name;

    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Answer - "+ player1_name;        
    }
    document.getElementById("output_div").innerHTML = "";
} 
