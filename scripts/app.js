const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieRelease = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlStorage = localStorage.getItem('imageUrl');
let yearStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlStorage && yearStorage) {
    movieTitleToDisplay.textContent = `${titleInStorage} (${yearStorage})`;
    container.style.backgroundImage = `linear-gradient(rgba(69, 69, 161, 0.643),rgba(45, 39, 39, 0.598)),
    url ('${imageUrlStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieReleaseInput = movieRelease.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieReleaseInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(69, 69, 161, 0.643),rgba(45, 39, 39, 0.598)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieRelease.value = '';
});



