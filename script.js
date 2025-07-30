document.addEventListener('DOMContentLoaded', () => {
    const numeralDisplay = document.getElementById('current-numeral');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    const numerals = Array.from({ length: 101 }, (_, i) => i); // Dynamically create numbers from 0 to 100
    let currentIndex = 0;

    // Function to update the displayed numeral
    function updateNumeralDisplay() {
        if (numeralDisplay) {
            numeralDisplay.textContent = numerals[currentIndex];
        }
    }

    // Event listener for the 'Next' button
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= numerals.length) {
                currentIndex = 0; // Loop back to the first numeral
            }
            updateNumeralDisplay();
        });
    }

    // Event listener for the 'Previous' button
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = numerals.length - 1; // Loop back to the last numeral
            }
            updateNumeralDisplay();
        });
    }

    // Initialize the display with the first numeral
    updateNumeralDisplay();
});
