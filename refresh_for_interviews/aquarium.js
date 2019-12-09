const popLimit = 10;

let fish = 0;

while (fish < popLimit) {
  fish ++;
  console.log("theres room for" + (popLimit - fish) + "more fish");
}


const iceCapsAreMelting = true;
let polarBears = 5;

while(iceCapsAreMelting){
  console.log(`there are ${polarBears} polar bears`);
  polarBears--;

  if (polarBears === 0){
    console.log('there are no polar bears left');
    break
  }
}



function testNum(a){
  if (a > 0) {
    return "positive";
  }else{
    return "NOT positive"
  }
}

console.log(testNum(-5));
