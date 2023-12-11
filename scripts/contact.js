// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.


// Get the submit button element
let submitButton = document.getElementById('submit-button');

// Add event listener to the submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Get the contact page element
    let contactPage = document.getElementById('contact-page');

    // Clear the contents of the contact page
    contactPage.innerHTML = '';

    // Create a new <p> element
    let thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for your message!';
    thankYouMessage.style.fontSize = '24px';

    // Add the <p> element to the contact page
    contactPage.appendChild(thankYouMessage);
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

