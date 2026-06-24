const count = document.getElementById('count')
const voteButton = document.querySelectorAll('.voteClass')
const ballot_btn = document.getElementById('ballot-btn');

let votingOpen = false;

function disableButton(){
    voteButton.forEach(element => {
        element.disabled = true;
    })
}

function enableButton(){
    voteButton.forEach(element => {
        element.disabled = false;
    })
}

disableButton();

ballot_btn.addEventListener('click' , (button) => {
    if(!votingOpen){
        votingOpen = true;
        enableButton();
        console.log("Voting Open ");
    }
    
})


voteButton.forEach(element => {
    element.addEventListener('click' , (ele) => {
        

        if(!votingOpen) return;

        const value = ele.target.value;
        console.log("Vote is Casted to ",value);

        let vote = count.innerText;
        let voteCount = parseInt(vote);
        count.innerText = voteCount + 1;
        console.log(count.innerText);
        
        votingOpen = false;
        disableButton();

    })
})






