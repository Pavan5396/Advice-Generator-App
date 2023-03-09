const btn = document.querySelector(".circle");
const advice = document.querySelector(".advice-text");
const adviceNo = document.querySelector(".advice-no");

btn.addEventListener("click", function(){
    let slip_id =  Math.floor(Math.random() * 224);
    fetch(`https://api.adviceslip.com/advice/${slip_id}`)
    .then(response => response.json())
    .then(data =>advice.innerHTML= data.slip.advice)

 });

