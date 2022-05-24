// every 1000 miliseconds pick a number between 0 and 1
// each time number is picked add 1 to counter
//if number > .75 stop timer and console.log the n of tries




function randomGame(){
    let counter = 0; 
    let timer = setInterval(function(){
        let number = Math.random();
        counter++;
        if (number > .75){
            clearInterval(timer);
            console.log(counter);
    }
    },1000)    
}