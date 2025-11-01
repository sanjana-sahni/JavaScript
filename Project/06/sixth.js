setInterval(()=>{

    const result = document.getElementById("result")

const currentTime = Date.now();
// millisecond
const olympicTime = new Date(2028,6,14).getTime();
 let timer = olympicTime-currentTime;
// console.log(olympicTime);

// millisecond 
 const day = Math.floor((timer)/(1000*60*60*24));
 timer%=1000*60*60*24;
 const hour = Math.floor((timer)/(1000*60*60));
 timer%=1000*60*60;
 const minutes = Math.floor((timer)/(1000*60));
 timer%=1000*60;
 const second = Math.floor((timer)/(1000));
 timer%=1000;

 result.textContent = `${day} : Days ${hour} :Hour ${minutes} : Minutes ${second} : Seconds`;
},1000);