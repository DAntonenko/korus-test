const timeline = document.querySelector('.timeline');

const appearanceLineRadiobutton = document.getElementById('step-is-line');
const appearancePointRadiobutton = document.getElementById('step-is-point');

const positionTopRadiobutton = document.getElementById('top-labels');
const positionBottomRadiobutton = document.getElementById('bottom-labels');

const forwardButton = document.getElementById('forward-button');

// const timelineSteps = document.querySelectorAll('.timeline__step');
// const timelineStepsQuantity = timelineSteps.length;

document.addEventListener('change', function() {
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
const stepsQuantity = 4;

forwardButton.addEventListener('click', function() {
  if (currentStep < stepsQuantity) {
    document.querySelectorAll('.timeline__step')[currentStep].classList.remove('timeline__step--uncompleted');
    document.querySelectorAll('.timeline__step')[currentStep].classList.add('timeline__step--current');
  }

  if (currentStep > 0) {
    document.querySelectorAll('.timeline__step')[currentStep - 1].classList.add('timeline__step--completed');
  };

  if (currentStep < stepsQuantity) {
    currentStep += 1
  };
});


