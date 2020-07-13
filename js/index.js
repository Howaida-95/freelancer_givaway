// Set a Valid End Date
let deadline = new Date('Aug 31, 2020 15:37:25').getTime();

let x = setInterval(function() { 
  // calculate remaining time ==> deadline - now
  let now = new Date().getTime();
  let t = deadline - now ;
  var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
  var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
  var seconds = Math.floor((t % (1000 * 60)) / 1000); 
  // output the result 
  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;
  // Write some text if the countdown is over
  if (t < 0) { 
    clearInterval(x); 
    document.querySelector('.msg').innerHTML = "TIME UP"; 
    document.querySelector('.days').innerHTML = '00';
    document.querySelector('.hours').innerHTML = '00';
    document.querySelector('.minutes').innerHTML = '00';
    document.querySelector('.seconds').innerHTML = '00';
  } 
}, 1000); 
