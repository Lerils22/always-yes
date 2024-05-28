// Get the YES and NO buttons


const yesButton = document.getElementById('YES');
const noButton = document.getElementById('NO');
const cta = document.querySelector('.buttons');

// Add event listener to the NO button
noButton.addEventListener('mouseover', swapButtons);

function swapButtons() {
    // Check if the YES button is before the NO button
    if (cta.contains(yesButton) && cta.contains(noButton)) {
        const yesIndex = Array.from(cta.children).indexOf(yesButton);
        const noIndex = Array.from(cta.children).indexOf(noButton);
        if (yesIndex < noIndex) {
            // Swap the buttons
            cta.insertBefore(noButton, yesButton);
        } else {
            // Swap the buttons
            cta.insertBefore(yesButton, noButton);
        }
    }
}


