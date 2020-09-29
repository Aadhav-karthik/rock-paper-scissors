var user;
var computer = getRandomInt(1,3);
var scoreElem = document.getElementById('score');
scoreElem.innerText = 0 | sessionStorage.getItem('score');



function fun(x){
    document.getElementById('step-1').style.display = "none";
    document.getElementById('step-2').style.display = "block";
    i = x.id+"1";
    document.getElementById(i).style.display = "block";
    user = x.id;
   setTimeout(function(){
   document.getElementById('computer').style.display = "none";
   document.getElementById('computer1').style.display = "block";
            if(computer==1){
            document.getElementById('rock2').style.display = "block"
        }else if(computer==2){
            document.getElementById('paper2').style.display = "block"
        }else{
            document.getElementById('sci2').style.display = "block"
        }
    }, 2000);
    setTimeout(function(){
    document.getElementById('computer1').classList.remove("col-md-4");
   document.getElementById('computer1').classList.add("col-md-5");
   document.getElementById("before").classList.remove("col-md-2");
      document.getElementById('before1').classList.remove("col-md-2");
       document.getElementById('block').style.display = "block";
   document.getElementById('after').classList.add("col-md-2");
   document.getElementById('block1').style.display = "block";
      document.getElementById('after1').classList.remove("col-md-4");
      document.getElementById('after1').classList.add("col-md-5");
    if (user == 'rock') {
        if (computer == 3) {
            document.getElementById('result').innerText = 'You win';
            document.getElementById('result1').innerText = 'You win';
            document.getElementById('after1').classList.add("radial");

            scoreElem.innerHTML++;
        } else if (computer == 2){
            document.getElementById('result').innerText = 'You Lose';
            document.getElementById('result1').innerText = 'You Lose';
            document.getElementById('computer1').classList.add("radial");
            if (scoreElem.innerText != 0){
               scoreElem.innerHTML--;
                  }

            }
        else{
            document.getElementById('result').innerText = 'Draw';
            document.getElementById('result1').innerText = 'Draw';
            }
    } else if (user == 'paper') {
        if (computer == 3) {
            document.getElementById('result').innerText = 'You Lose';
            document.getElementById('result1').innerText = 'You Lose';
            document.getElementById('computer1').classList.add("radial");
            if (scoreElem.innerText != 0){
               scoreElem.innerHTML--;
                  }
        } else if (computer == 1) {
            document.getElementById('result').innerText = 'You Win';
            document.getElementById('result1').innerText = 'You Win';
            document.getElementById('after1').classList.add("radial");

            scoreElem.innerHTML++;
        } else {
            document.getElementById('result').innerText = 'Draw';
            document.getElementById('result1').innerText = 'Draw';
        }
    } else {
        if (computer == 2) {
            document.getElementById('result').innerText = 'You win';
            document.getElementById('result1').innerText = 'You win';
            document.getElementById('after1').classList.add("radial");
            scoreElem.innerHTML++;
        } else if (computer == 1) {
            document.getElementById('result').innerText = 'You Lose';
            document.getElementById('result1').innerText = 'You Lose';
            document.getElementById('computer1').classList.add("radial");
            if (scoreElem.innerText != 0){
               scoreElem.innerHTML--;
                  }
        } else {
            document.getElementById('result').innerText = 'Draw';
            document.getElementById('result1').innerText = 'Draw';
        }
    }
    sessionStorage.setItem('score',scoreElem.innerText)
    },3000);


};


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};


