let scoreHome = document.getElementById('score-home');
let scoreGuest = document.getElementById('score-guest');

let homeAddScoreBtnList = document.querySelectorAll('#add-score-home > .score-btn');
let guestAddScoreBtnList = document.querySelectorAll('#add-score-guest > .score-btn');

let button = document.getElementsByTagName('button');

let buttons = Array.from(button);

let scoreHomeCount = 0;
let scoreGuestCount = 0;

scoreHome.textContent = String(scoreGuestCount);

buttons.forEach(btn => {
    btn.addEventListener('click', addPoints)
})

function addPoints(event) {
    //console.log(event);
    //console.log(event.target);
    let btn = event.target;
    //console.log(typeof btn);
    //console.log(btn.getAttribute('id'));  
    switch (btn.getAttribute('id')) {
        case 'btn-home-1':
            scoreHomeCount += 1;
            scoreHome.textContent = String(scoreHomeCount);
            break;
        case 'btn-home-2':
            scoreHomeCount += 2;
            scoreHome.textContent = String(scoreHomeCount);
            break;
        case 'btn-home-3':
            scoreHomeCount += 3;
            scoreHome.textContent = String(scoreHomeCount);
            break;
        case 'btn-guest-1':
            scoreGuestCount += 1;
            scoreGuest.textContent = String(scoreGuestCount);
            break;
        case 'btn-guest-2':
            scoreGuestCount += 2;
            scoreGuest.textContent = String(scoreGuestCount);
            break;
        case 'btn-guest-3':
            scoreGuestCount += 3;
            scoreGuest.textContent = String(scoreGuestCount);
            break;
    }
}