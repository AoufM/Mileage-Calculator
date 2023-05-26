let mileageb = document.getElementById("mileage");
let distanceb = document.getElementById("distance");
let priceb= document.getElementById("price");
let boxb = document.getElementById("box");
let button = document.getElementById("button");
let meter = document.getElementById("meter");
let kmeter = document.getElementById("kmeter");

button.onclick = () => {
    if(mileageb.value=== ""|| distanceb.value===""|| priceb.value===""){
        boxb.innerText="Please enter some values"
    }
    else{
  let a = parseFloat(distanceb.value);
  let b = parseFloat(mileageb.value);
  let c= parseFloat(priceb.value);
  if (a <= 0 || b <= 0|| c<=0) {
    boxb.innerText = "Please Enter positive values";
  } else {
    let d = a / b;
    boxb.innerText = `It will cost Rs.${d*c} to drive ${a} kilometers`;
  }}
};
