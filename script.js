// Array of photos and texts
const photos = [
    { src: 'photos/photo1.jpg', text: 'i am very happy with you।' },
    { src: 'photos/photo2.jpg', text: 'तुमसे मिलकर दिल खुश हो जाता है।' },
    { src: 'photos/photo3.jpg', text: 'तुम्हारी smile bohot achi hai।' },
    { src: 'photos/photo4.jpg', text: 'will you be mine?' },
    { src: 'photos/photo5.jpg', text: 'I Love You please ❤️' },
];

let currentIndex = 0;

// Select elements
const photoContainer = document.getElementById('photo-container');
const nextButton = document.getElementById('next-button');

// Function to load a photo
function loadPhoto(index) {
    photoContainer.innerHTML = `
        <img src="${photos[index].src}" alt="Photo">
        <h2>${photos[index].text}</h2>
    `;
}

// Event listener for button
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < photos.length) {
        loadPhoto(currentIndex);
    } else {
        nextButton.style.display = 'none'; // Hide button after the last photo
    }
});

// Load the first photo on page load
loadPhoto(currentIndex);
