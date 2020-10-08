//global variables 

var state = [];


window.onload = () => { 
    // code that will run when the page is loaded
    var board_pieces = document.getElementById("board").querySelectorAll("div"); //get all the divs inside the board div
    var no_of_pieces = document.getElementById("board").children.length;

    for(i=0;i<no_of_pieces;i++){
        board_pieces[i].setAttribute("id",i); //assign a index id to each element
        board_pieces[i].setAttribute("class","square"); //assign the sqare class to each element
        movingMouse(board_pieces[i]);
    }

}


movingMouse = (item) =>{

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
            cancel(item);
        }
        // Click for O
        else if (state[state.length-1] == "X") {
            item.classList.add("O");
            item.innerHTML = "O";
            state.push("O");
            cancel(item);
          
            // Click for X
        } else {
            item.classList.add("X");
            item.innerHTML = "X";
            state.push("X");
            cancel(item);
        }
    }    


}


cancel = (item)=>{
    var comments = [];
    var click_count = 0;
    item.onclick = function(){
        alert("Yuh too thief man !!");
    }
}







