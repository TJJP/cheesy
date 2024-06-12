const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');
const extraFields = document.getElementById('fran-cheese-ad-form-extra');

function checkFields() {
  if (fname.value.trim() !== '' && lname.value.trim() !== '') {
    fadeIn(extraFields);
  } else {
    extraFields.classList.add('hidden');
  }
};

function fadeIn(element) {
  if (extraFields.classList.contains('hidden')){
    element.style.opacity = 0;
    element.classList.remove('hidden');
  
    const interval = setInterval(() => {
      const opacity = parseFloat(element.style.opacity);
      if (opacity >= 1) {
        clearInterval(interval);
        return;
      }
      element.style.opacity = opacity + 0.1;
    }, 100); // <-- Adjust the time interval
  }
}

fname.addEventListener('keyup', checkFields);
lname.addEventListener('keyup', checkFields);

// Call checkFields initially
checkFields();