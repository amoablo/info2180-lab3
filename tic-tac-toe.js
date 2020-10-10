//global variables 

var state = [];
var dict = {0:"",1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:""};
var game_state = ["","","","","","","","",];
var click_count = 0;


window.onload = () => { 
   // ending();
    // code that will run when the page is loaded
    var board_pieces = document.getElementById("board").querySelectorAll("div"); //get all the divs inside the board div
    var no_of_pieces = document.getElementById("board").children.length;

    for(i=0;i<no_of_pieces;i++){
        board_pieces[i].setAttribute("id",i); //assign a index id to each element
        board_pieces[i].setAttribute("class","square"); //assign the sqare class to each element
        movingMouse(board_pieces[i],i);
    }

}


movingMouse = (item,index) =>{

    var id = index;
    // Mouse hover listener
    
    item.onmouseover = function(){
        item.classList.add("hover");
    }
    // Mouse leave listener
    item.onmouseleave = function(){
        item.classList.remove("hover");
    } 
    
    // First click
    item.onclick = function(){
        if (state.length == 0){
            item.classList.add("X");
            item.innerHTML = "X";
            state.push("X");
            game_state[id] = "X";
            cancel(item);
            
        }
        // Click for O
        else if (state[state.length-1] == "X") {
            item.classList.add("O");
            item.innerHTML = "O";
            state.push("O");
            game_state[id] = "O";
            cancel(item);
          
            // Click for X
        } else {
            item.classList.add("X");
            item.innerHTML = "X";
            state.push("X");
            game_state[id] = "X";
            cancel(item);
        }
        click_count++;
        console.log(game_state);
        winner(); 
    } 
    
    var buttton = document.getElementsByClassName("btn")[0];// new game button
    buttton.onclick = function(){
        document.location.reload();// restarts the game by reloading the page and calling the onload function
    }
}

// Stop player from selecting a square twice and changing value
cancel = (item)=>{ item.onclick = function(){}}

// check for 3 in a row
winner = () =>{
    //checks clicks by 3s for X
    if(game_state[0]== "X" && game_state[1]== "X" && game_state[2] == "X"){
       congatsMessage("X");
    }
    else if(game_state[3]== "X" && game_state[4]== "X" && game_state[5] == "X"){
        congatsMessage("X");
     }
     else if(game_state[6]== "X" && game_state[7]== "X" && game_state[8] == "X"){
        congatsMessage("X");
     }
     else if(game_state[0]== "X" && game_state[3]== "X" && game_state[6] == "X"){
       congatsMessage("X");
    }
    else if(game_state[1]== "X" && game_state[4]== "X" && game_state[7] == "X"){
        congatsMessage("X");
     }
    else if(game_state[2]== "X" && game_state[5]== "X" && game_state[8] == "X"){
        congatsMessage("X");
     }
    else if(game_state[2]== "X" && game_state[4]== "X" && game_state[6] == "X"){
        congatsMessage("X");
     }
     else if(game_state[0]== "X" && game_state[4]== "X" && game_state[8] == "X"){
        congatsMessage("X");
     }
     //checks clicks by 3s for X
     if(game_state[0]== "O" && game_state[1]== "O" && game_state[2] == "O"){
        congatsMessage("O");
     }
     else if(game_state[3]== "O" && game_state[4]== "O" && game_state[5] == "O"){
         congatsMessage("O");
      }
      else if(game_state[6]== "O" && game_state[7]== "O" && game_state[8] == "O"){
         congatsMessage("O");
      }
      else if(game_state[0]== "O" && game_state[3]== "O" && game_state[6] == "O"){
        congatsMessage("O");
     }
     else if(game_state[1]== "O" && game_state[4]== "O" && game_state[7] == "O"){
         congatsMessage("O");
      }
     else if(game_state[2]== "O" && game_state[5]== "O" && game_state[8] == "O"){
         congatsMessage("O");
      }
     else if(game_state[2]== "O" && game_state[4]== "O" && game_state[6] == "O"){
         congatsMessage("O");
      }
      else if(game_state[0]== "O" && game_state[4]== "O" && game_state[8] == "O"){
         congatsMessage("O");
      }
    
}
// display winner message
congatsMessage =(el) =>{
    // status id for message board
    var message = document.getElementById("status");

    if (el == "X"){
            // winner message for X
            message.innerHTML = "Congratulations! X is the Winner!";
            message.className = "you-won";
    }
    else if (el == "O"){
            // winner message for X
            message.innerHTML = "Congratulations! O is the Winner!";
            message.className = "you-won";
    }
}

