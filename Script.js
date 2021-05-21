count = 0
var tl, t, tr, ml, m, mr, bl, b, br; // all paragraph tags
tl = document.getElementById('top-left-fl');
t = document.getElementById('top-fl');
tr = document.getElementById('top-right-fl');

ml = document.getElementById('mid-left-fl');
m = document.getElementById('mid-fl');
mr = document.getElementById('mid-right-fl');

bl = document.getElementById('bottom-left-fl');
b = document.getElementById('bottom-fl');
br = document.getElementById('bottom-right-fl');

var tlb, tb, trb, mlb, mb, mrb, blb, bb, brb;

tlb = document.getElementById('top-left');
tb = document.getElementById('top');
trb = document.getElementById('top-right');
mlb = document.getElementById('mid-left');
mb = document.getElementById('mid');
mrb = document.getElementById('mid-right');
blb = document.getElementById('bottom-left');
bb = document.getElementById('bottom');
brb = document.getElementById('bottom-right');



function countit(){
  count ++ ;
  return count;
}

function turn(){
  if (count % 2 == 1){
    document.getElementById('trileft').hidden = true;
    document.getElementById('triright').hidden = false;
  }

  else{
    document.getElementById('triright').hidden = true;
    document.getElementById('trileft').hidden = false;
  }
}

function topLeftFl(){
  if (count % 2 == 1){
    tl.innerHTML = "X";
    tl.classList.add("X")
    tlb.disabled = true;
  }
  else if (count % 2 == 0){
    tl.innerHTML = "O";
    tl.classList.add("O")
    tlb.disabled = true;
  }
  turn()
}







function topFl(){
  if (count % 2 == 1){
    t.innerHTML = "X";
    t.classList.add("X")
    tb.disabled = true;
  }
  else if (count % 2 == 0){
    t.innerHTML = "O";
    t.classList.add("O")
    tb.disabled = true;
  }
  turn()
}







function topRightFl(){
  if (count % 2 == 1){
    tr.innerHTML = "X";
    tr.classList.add("X")
    trb.disabled = true;
  }
  else if (count % 2 == 0){
    tr.innerHTML = "O";
    tr.classList.add("O")
    trb.disabled = true;
  }
  turn()
}






function leftFl(){
  if (count % 2 == 1){
    ml.innerHTML = "X";
    ml.classList.add("X")
    mlb.disabled = true;
  }
  else if (count % 2 == 0){
    ml.innerHTML = "O";
    ml.classList.add("O")
    mlb.disabled = true;
  }
  turn()
}






function midFl(){
  if (count % 2 == 1){
    m.innerHTML = "X";
    m.classList.add("X")
    mb.disabled = true;
  }
  else if (count % 2 == 0){
    m.innerHTML = "O";
    m.classList.add("O")
    mb.disabled = true;
  }
  turn()
}







function rightFl(){
  if (count % 2 == 1){
    mr.innerHTML = "X";
    mr.classList.add("X")
    mrb.disabled = true;
  }
  else if (count % 2 == 0){
    mr.innerHTML = "O";
    mr.classList.add("O")
    mrb.disabled = true;
  }
  turn()
}





function bottomLeftFl(){
  if (count % 2 == 1){
    bl.innerHTML = "X";
    bl.classList.add("X")
    blb.disabled = true;
  }
  else if (count % 2 == 0){
    bl.innerHTML = "O";
    bl.classList.add("O")
    blb.disabled = true;
  }
  turn()
}






function bottomFl(){
  if (count % 2 == 1){
    b.innerHTML = "X";
    b.classList.add("X")
    bb.disabled = true;
  }
  else if (count % 2 == 0){
    b.innerHTML = "O";
    b.classList.add("O")
    bb.disabled = true;
  }
  turn()
}




function bottomRightFl(){
  if (count % 2 == 1){
    br.innerHTML = "X";
    br.classList.add("X")
    brb.disabled = true;
  }
  else if (count % 2 == 0){
    br.innerHTML = "O";
    br.classList.add("O")
    brb.disabled = true;
  }
  turn()
}





function resizewarn(){
  alert("Resizing this window might cause issues while playing")
}

window.onload = function rules(){
  alert("The game starts with Player X")
}

function disableGame(){
  tlb.disabled = true;
  tb.disabled = true;
  trb.disabled = true;
  mlb.disabled = true;
  mb.disabled = true;
  mrb.disabled = true;
  blb.disabled = true;
  bb.disabled = true;
  brb.disabled = true;
}

function Xwin(){
  document.getElementById("Xwin").style.opacity = "80%";
  document.getElementById('triright').hidden = true;
  document.getElementById('trileft').hidden = false;


}

function Owin(){
  document.getElementById("Owin").style.opacity = "80%";
  document.getElementById('triright').hidden = true;
  document.getElementById('trileft').hidden = false;
}

function wintest(){
  console.log("Wintest")
  if (tl.innerHTML == t.innerHTML && t.innerHTML == tr.innerHTML && tr.innerHTML == "X"){
    Xwin()
    disableGame()
  }
  else if (ml.innerHTML == m.innerHTML && m.innerHTML == mr.innerHTML && mr.innerHTML == "X"){
    Xwin()
    disableGame()
  }
  else if (bl.innerHTML == b.innerHTML && b.innerHTML == br.innerHTML && br.innerHTML == "X"){
    Xwin()
    disableGame()
  }

  else if (tl.innerHTML == ml.innerHTML && ml.innerHTML == bl.innerHTML && bl.innerHTML == "X"){
    Xwin()
    disableGame()
  }
  else if (t.innerHTML == m.innerHTML && m.innerHTML == b.innerHTML && b.innerHTML == "X"){
    Xwin()
    disableGame()
  }
  else if (tr.innerHTML == mr.innerHTML && mr.innerHTML == br.innerHTML && br.innerHTML == "X"){
    Xwin()
    disableGame()
  }

  else if (tl.innerHTML == m.innerHTML && m.innerHTML == br.innerHTML && br.innerHTML == "X"){
    Xwin()
    disableGame()
  }
  else if (tl.innerHTML == m.innerHTML && m.innerHTML == bl.innerHTML && bl.innerHTML == "X"){
    Xwin()
    disableGame()
  }





  else if (tl.innerHTML == t.innerHTML && t.innerHTML == tr.innerHTML && tr.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (ml.innerHTML == m.innerHTML && m.innerHTML == mr.innerHTML && mr.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (bl.innerHTML == b.innerHTML && b.innerHTML == br.innerHTML && br.innerHTML == "O"){
    Owin()
    disableGame()
  }

  else if (tl.innerHTML == ml.innerHTML && ml.innerHTML == bl.innerHTML && bl.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (t.innerHTML == m.innerHTML && m.innerHTML == b.innerHTML && b.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (tr.innerHTML == mr.innerHTML && mr.innerHTML == br.innerHTML && br.innerHTML == "O"){
    Owin()
    disableGame()
  }

  else if (tl.innerHTML == m.innerHTML && m.innerHTML == br.innerHTML && br.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (tl.innerHTML == m.innerHTML && m.innerHTML == bl.innerHTML && bl.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (tlb.disabled && tb.disabled && trb.disabled && mlb.disabled && mb.disabled && mrb.disabled && blb.disabled && bb.disabled && brb.disabled){
    alert("Game Drawn")
  }
}
