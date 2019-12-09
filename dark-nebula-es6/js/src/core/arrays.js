
// do below but in a different way, put it in an array


removeWithoutCopy = (arr, item) => {
  for( var i = 0; i < arr.length; i++){
    if ( arr[i] === item) {
      arr.splice(i,2);
   }
}
  console.log(arr)
  return arr
};



append = (arr, item) => {
  arr.push(item)
  return arr
};

truncate = (arr) => {
  arr.pop();
  return arr

};

prepend = (arr, item) => {
  arr.unshift(item);
  return arr

};

curtail = (arr) => {
  arr.shift();
  return arr

};

concat = (arr1, arr2) => {
  var array = arr1.concat(arr2)
  return array

};

insert = (arr, item, index) => {
  
}

count = (arr, item) => {

};

duplicates = (arr) => {

};

square = (arr) => {

};

findAllOccurrences = (arr, item) => {

};
