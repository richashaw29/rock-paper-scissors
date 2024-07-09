let opponentChoice;
let opponentScore=Number(document.querySelector('opponent-score'));
let yourChoice;
let yourScore=Number(document.querySelector('Your-score'));

const choices=['rock','paper','scissors'];
const choicespath=['rock.png','paper.png','scissors.png']
window.onload=function(){
    for(let i=0;i<3;i++)
        {
let choice=document.createElement('img');
choice.id=choices[i];
choice.src=choicespath[i];
choice.onclick=makeyourchoice;
document.getElementById('choices').append(choice);

        }
}
function makeyourchoice(){
    // console.log('hello');
    yourChoice=this.id;
document.getElementById('your-choice').src=this.src;
// opponent-choice

let opponent=Math.floor(Math.random()*3);
opponentChoice=choices[opponent];
console.log(choicespath[opponent]);
document.getElementById('oppenent-choice').src=choicespath[opponent];
if(yourChoice =='rock')
    {
 if(opponentChoice == 'rock')
    {
        yourScore+=1;
        opponentScore+=1;
    }
else if(opponentChoice == 'paper')
{
    opponentScore+=1;
}
else
{
    yourScore+=1;
}

    }

    if(yourChoice =='paper')
        {
     if(opponentChoice == 'rock')
        {
            yourScore+=1;
        
        }
    else if(opponentChoice == 'paper')
    {
        opponentScore+=1;
        yourScore+=1;
    }
    else
    {
        opponentScore+=1;
    }
    
        }


        if(yourChoice =='scissors')
            {
         if(opponentChoice == 'rock')
            {
                
                opponentScore+=1;
            }
        else if(opponentChoice == 'paper')
        {
            yourScore+=1;
        }
        else
        {
            yourScore+=1;
            opponentScore+=1;
  
        }
        
            }


    console.log(yourScore);
    console.log(opponentScore);
    document.getElementById('opponent-score').textContent=opponentScore;
    document.getElementById('Your-score').textContent=yourScore;

}