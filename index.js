let mileageb = document.getElementById("mileage");
let distanceb = document.getElementById("distance");
let priceb= document.getElementById("price");
let boxb = document.getElementById("box");
let button = document.getElementById("button");
let meters= document.getElementById('meter');
let radio= document.querySelector('input[name="meter"]:checked');



button.onclick = () => {
  
    if(mileageb.value=== ""|| distanceb.value===""|| priceb.value===""||radio==null){
        boxb.innerText="Please enter all values"
    }
    else{
  let a = parseFloat(distanceb.value);
  let b = parseFloat(mileageb.value);
  let c= parseFloat(priceb.value);
  if (a <= 0 || b <= 0|| c<=0) {
    boxb.innerText = "Please Enter positive values";
  } else {
   
    if(meters.checked==true){
      console.log('meter is checked');
      let mtok= a/1000;
      let z= mtok/b;
      boxb.innerText= `It will cost approximately Rs.${z*c} to drive ${mtok} kilometers`;
    }else{
    let d = a / b;
    boxb.innerText = `It will cost approximately Rs.${Math.round(d*c)} to drive ${a} kilometers`;
}}}};
