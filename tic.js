let boxes = document.getElementsByClassName('box');
let turn = "X";
let intext = document.getElementById('info');
let flag = 0;
let reset = document.getElementById('reset');
// let gameOver = false;
//turn change
function changeTurn(){
      if(turn==="X"){
          turn = "0";
      }
      else{
          turn = "X";
      }
}

//moves
let put = document.getElementsByClassName('turn');
for(let i=0;i<9;i++){
   
    boxes[i].addEventListener('click' , ()=>{
        // if(!gameOver){
        if(put[i].innerHTML===''){
            if(turn==='X'){
         intext.innerHTML = "Turn of "+ "0";
            }
            if(turn==='0'){
            intext.innerHTML = "Turn of "+ "X";
            }
            put[i].innerHTML = turn;
            changeTurn();
        }

    // }
        
//logic
         let winArray = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let j=0;j<8;j++){
         
            if((put[winArray[j][0]].innerText === put[winArray[j][1]].innerText) && (put[winArray[j][1]].innerText === put[winArray[j][2]].innerText) && put[winArray[j][0]].innerText!==""){
                intext.innerHTML = put[winArray[j][0]].innerText + " Won";
                flag = 1;
                break;
            }
        }
         
     })
    if(flag===1){
        break;
    }
}
// reset
 
reset.addEventListener('click',function(){
     for(let i=0;i<9;i++){
         put[i].innerText = '';
     }
     intext.innerHTML = "Turn of X"; 
    //  console.log("click");
})
