    var timer = 60;
    var score = 0;
    var hitvalue = 0;
    function bubbleFunc() {
        var clutter = "";
        
        for( let i = 1; i <= 231; i++ ) {
             
         clutter += `<div class="bubble"><h5>${Math.floor(Math.random() * 10)}</h5></div>`;
        }
        
        const game = document.querySelector("#innerdivbottom");
        game.innerHTML = clutter;
    
    }

        
    function bubbleTimer() {

     var setTimer = setInterval(function(){
        if(timer >= 0) {
           document.querySelector("#timerval").textContent = timer--;
        }
        else {
            clearInterval(setTimer);
            // console.log("hey");
            document.querySelector("#innerdivbottom").innerHTML = "GAME OVER";
            // document.querySelector("#innerdivbottom").textContent = "GAME OVER";
            
        }
    
        }, 1000);

    
    }
       function scorefunc() {
          score += 10;
          document.querySelector("#scoreVal").textContent = score;


       }

       function hitTimer() {
          hitvalue = Math.floor(Math.random() * 10);
         document.querySelector("#hitnum").textContent = hitvalue;
       }

    document.querySelector("#innerdivbottom").addEventListener("click",function(details) {
        if(Number(details.target.textContent) === hitvalue) {
            scorefunc();
            bubbleFunc();
            hitTimer();
        }
    } )
   bubbleTimer();
   bubbleFunc();
   hitTimer();
   
   