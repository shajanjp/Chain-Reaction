//I am not busy at all.
//==Sets the delay
var delay=1000;

//I like this function very much and i use this in my every script.
//==Welcome message
function huhu() {
  alert("Welcome to Chain Reaction Beta");
}


//Sorry green, Let the Red play first :)
//==Sets current player as red
var currrentplayer="r";

//Dont worry green, i have an option for you.
//==Changes the current player
function changeplayer() {
  if(currrentplayer=="r"){
    currrentplayer="g";
  }
  else
  {
    currrentplayer = "r";
  }
}

//I wont confuse you with colors
//==Sets the hint color
function changeplyrhint() {
  var phc = "plyh"+currrentplayer;
  document.getElementById('playhint').className = "";
  document.getElementById('playhint').className = phc;
}

//You bloody cell, in what class you belong to ?
//==Returns array[2], class of the x,y cell.
function classofxy(x,y) {
  var clsofxy = document.getElementById(x + "-" + y).className;
  clsofxy = clsofxy.split("");
  return clsofxy;
}

//You are eating too much, how much is your weight ?
//==Returns the number of bubbles in the x,y cell
function bubofxy(x,y){
  var col = classofxy(x,y);
  if (typeof col[2]=='undefined') {
    col[2] = 0;
  };
  return parseInt(col[2]);
}

//you can tell me your correct address, so that i can come there directly and kill you.
//==Returns array[1] containing the x and y values of ID
function getpos(dummipos) {
  var cellpos = dummipos.getAttribute('cellpos').split(',');
  return cellpos;
}

//No more jokes ! Lets get into trouble
//==Adds a circle in the position x,y with color c
function addcir(x,y,color) {
  setTimeout(function () {
    var xyv = x + "-" + y;
    x = parseInt(x);
    y = parseInt(y);
    makecir(x,y,color,bubofxy(x,y)+1);
    switch(xyv){
      case "1-1":
      if(bubofxy(x,y)>1) {
        emptycir(x,y);
        addcir(x+1,y,color);
        addcir(x,y+1,color);
      }
      break;

      case "1-10":
      if(bubofxy(x,y)>1) {
        emptycir(x,y);
        addcir(x+1,y,color);
        addcir(x,y-1,color);
      }
      break;
      case "6-1":
      if(bubofxy(x,y)>1) {
        emptycir(x,y);
        addcir(x-1,y,color);
        addcir(x,y+1,color);
      }
      break;

      case "6-10":
      if(bubofxy(x,y)>1) {
        emptycir(x,y);
        addcir(x-1,y,color);
        addcir(x,y-1,color);
      }
      break;

      case "2-1":
      case "3-1":
      case "4-1":
      case "5-1":
      if(bubofxy(x,y)>2) {
        emptycir(x,y);
        addcir(x-1,y,color);
        addcir(x,y+1,color);
        addcir(x+1,y,color);
      }
      break;

      case "2-10":
      case "3-10":
      case "4-10":
      case "5-10":
      if(bubofxy(x,y)>2) {
        emptycir(x,y);
        addcir(x-1,y,color);
        addcir(x,y-1,color);
        addcir(x+1,y,color);
      }
      break;

      case "1-2":
      case "1-3":
      case "1-4":
      case "1-5":
      case "1-6":
      case "1-7":
      case "1-8":
      case "1-9":
      if(bubofxy(x,y)>2) {
        emptycir(x,y);
        addcir(x,y-1,color);
        addcir(x+1,y,color);
        addcir(x,y+1,color);
      }
      break;

      case "6-2":
      case "6-3":
      case "6-4":
      case "6-5":
      case "6-6":
      case "6-7":
      case "6-8":
      case "6-9":
      if(bubofxy(x,y)>2) {
        emptycir(x,y);
        addcir(x,y-1,color);
        addcir(x-1,y,color);
        addcir(x,y+1,color);
      }
      break;      


      default:
      if(bubofxy(x,y)>3) {
        emptycir(x,y);
        addcir(x,y-1,color);
        addcir(x,y+1,color);
        addcir(x-1,y,color);
        addcir(x+1,y,color);
      }
      break;
    }
  },100);
};


//Are you ready for the game ?
//==Main play function
function playthis(dumy){
  xy=getpos(dumy);
  cls = classofxy(xy[0],xy[1]);
  if (cls.length==0) {
    cls[1] = currrentplayer;
  };
  if(cls[1]!=currrentplayer){
    return;
  }
  addcir(xy[0],xy[1],cls[1]);
  changeplayer();
  changeplyrhint();
}

//Circles, circles everywhere !
//==Creates a circle with the color col number num and in the cell x y
function makecir(x,y,col,number) {
  var cls = classofxy(x,y);
  var newcls = "c" + col + number;
  document.getElementById(x + "-" + y).className = "";
  document.getElementById(x + "-" + y).className = newcls;  
}

//I dont want this guy to sit in any class
//==Empty the class of cell x,y
function emptycir(x,y){
  document.getElementById(x + "-" + y).className = "";
}