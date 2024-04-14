/*
function play(){
    // Step-1: hide the home screen. To hide the screen add the class hidden to the home screen

    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    
    // To see the class list in homeSection
    //console.log(homeSection.classList);

    //console.log('Play button connected');


    // show the playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
    // To see the class list in playgroundSection
    //console.log(playgroundSection.classList);
}
*/

function continueGame(){
    // step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();  
    console.log('Your random alphabet', alphabet);

     // set randomly generated alphabet to the screen (show it)
     const currentAlphabetElement = document.getElementById('current-alphabet');
     currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet); 
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}