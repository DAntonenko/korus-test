const timeline = document.querySelector('.timeline');

const appearanceLineRadiobutton = document.getElementById('step-is-line');
const appearancePointRadiobutton = document.getElementById('step-is-point');

const positionTopRadiobutton = document.getElementById('top-labels');
const positionBottomRadiobutton = document.getElementById('bottom-labels');

const forwardButton = document.getElementById('forward-button');


window.addEventListener('change', () => {
  if (appearanceLineRadiobutton.checked) {
    timeline.classList.remove('timeline--step-is-point');
  }
  
  if (appearancePointRadiobutton.checked) {
    timeline.classList.add('timeline--step-is-point');
  }

  if (positionTopRadiobutton.checked) {
    timeline.classList.remove('timeline--label-bottom');
  }
  
  if (positionBottomRadiobutton.checked) {
    timeline.classList.add('timeline--label-bottom');
  }
});

let currentStep = 0;
let stepsQuantity = getComputedStyle(timeline).getPropertyValue('--stepsQuantity');

forwardButton.addEventListener('click', () => {
  if (currentStep < stepsQuantity) {
    document.querySelectorAll('.timeline__step')[currentStep].classList.remove('timeline__step--uncompleted');
    document.querySelectorAll('.timeline__step')[currentStep].classList.add('timeline__step--current');
    console.log('currentStep after orange: ' + currentStep);
  }

  if (currentStep > 0) {
    document.querySelectorAll('.timeline__step')[currentStep - 1].classList.add('timeline__step--completed');
    console.log('currentStep after green: ' + currentStep);
  };

  if (currentStep < stepsQuantity) {
    currentStep += 1
  };
  console.log('currentStep after add: ' + currentStep);
});


