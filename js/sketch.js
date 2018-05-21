var n1 = 3;
var n2 = 7;
var n3 = 9;

var unit_1 = [];
var unit_2 = [];
var unit_3 = [];
var grid = [];



function setup() {
  createCanvas (1000,1000);
  background(255);

}



function draw() {
  unit_3 = arrayFiller(n3, n3);
  fill(100,1);

  unit_2 = arrayFiller(n2, n2);
  fill(150,1);

  unit_1 = arrayFiller(n1, n1);
  fill(200,1);

}



function make2DArray(col, row){
  var arr = new Array(col);
  for(var i = 0; i<arr.length; i++){
    arr[i] = new Array(row);
  }
  return arr;
}



function arrayFiller(v1, v2){
  grid = make2DArray(v1, v2);

  for(i=0; i<v1; i++){
    for(j=0; j<v2; j++){
      grid [i][j]=j;
    }
  }
  for(i=0; i<v1; i++){
    for(j=0; j<v2; j++){
      ellipse((grid[i][j]*(width/v1))+(width/(v1*2)),(grid[j][i]*(height/v2)+(height/(v2*2))),(150/v1) * mouseX/500, (150/v2) * mouseX/500);
    }
  }

  return grid;
}

function bubblePos(){

}
