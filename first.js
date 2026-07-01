// const inp = document.getElementById("inp");
const sub_btn = document.getElementById("btn");
const res = document.getElementById("ans");
const limit = 1000;

function getNumArray(input) {
  return input
    .split(",")
    .map((v) => v.trim())
    .filter((v) => v !== "")
    .map(Number);
}

function isSortedAes(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
function isSortedDes(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  }
  return true;
}
const numFrq = (arr) =>{
  const frq = {};

  for(let num of arr){
    if(frq[num]) frq[num]++;
    else frq[num] = 1;
  }
  let entries = Object.entries(frq).filter(([num,count]) => count > 1).map(([num,count])=> num);
  return entries;
}
const strictlyIn = (arr) =>{
  for(let i=0; i<arr.length-1; i++){
    if(arr[i] >= arr[i+1]){
      return false;
    }
  }
  return true;
}
const strictlyDe = (arr) =>{
 for(let i=0; i<arr.length-1; i++){
    if(arr[i] <= arr[i+1]) return false;
}
  return true;
}
function secondLarge(arr){
  if(arr.length < 2) return false;
  
  let large = -Infinity;
  let seclarge = -Infinity;

  for(let num of arr){
    if(num > large){
      seclarge = large;
      large = num;
    }else if( num < large && num > seclarge){
      seclarge = num;
    }
  }
  return seclarge === -Infinity ? false : seclarge;
}

sub_btn.onclick = () => {
  const inpVal = document.getElementById("inp").value.trim();

  if (!inpVal) {
    res.innerText = "Input is empty";
    return;
  }

  const arr = getNumArray(inpVal);

  for (let num of arr) {
    if (Number.isNaN(num)) {
      res.innerText = "Invalid input";
      return;
    }
    if (num < -limit || num > limit) {
      res.innerText = "Limit Exceeded";
      return;
    }
  }
  if (arr.length === 0) {
    res.innerText = "No valid number entered";
    return;
  }

  let isacs = isSortedAes(arr);
  let isdcs = isSortedDes(arr);
  let duNum = numFrq(arr);
  let secl = secondLarge(arr);
  let sticIn = strictlyIn(arr);
  let sticDe = strictlyDe(arr);

  let message = "";
  if(isacs && isdcs){
    message = arr.length === 1 ? "Contain only one element" : "All elements are equal";
  }else if(isacs){
    message = "Array is sorted in Ascending order";
  }else if(isdcs){
    message = "Array is sorted in Decending order";
  }else{
    message = "Array is Unsorted";
  }
  if(isacs || isdcs){
    if(sticIn){
      message += " its strictly increasing "
    }
    if(sticDe){
      message += " its strictly decreasing "
    }
  }
  if(duNum.length > 0){
    message += `, duplicated element : ${duNum}`;
  }
  if(secl !== false){
    message += ` and second large Number is ${secl}`;
  }
  res.innerText = message;
};
