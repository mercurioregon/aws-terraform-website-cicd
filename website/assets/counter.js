
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");

// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;

// }
// decreaseBtn.onclick=function(){
//     count--;
//     countLabel.textContent = count;

// }


    let visitCount = localStorage.getItem('visitCount');

    if (visitCount) {
      visitCount = parseInt(visitCount) + 1;
    } else {
      visitCount = 1;
    }
    
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('counter').textContent = visitCount;
