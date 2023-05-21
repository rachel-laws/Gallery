// const pictureContainer = document.querySelector('#pictureContainer');
// const pictureDisplay = document.querySelector('#pictureDisplay');
// const closeButton = document.querySelector('#closePictureDisplay');
// const pictures = Array.from(document.querySelectorAll('.grid__image'));
// const currentPicture = document.querySelector('#currentPicture');
// const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const selectedIndex = null;

// imageIndexes.forEach(i => {
//   const image = document.createElement('img');
//   image.src = `/images/img-${i}.jpg`;
//   image.classList.add('currentPicture');
//   pictureDisplay.appendChild(image);

//   image.addEventListener('click', () => {
//     pictureContainer.style.display = 'flex';
//   });
// });

// pictures.forEach(picture => {
//   picture.addEventListener('click', event => {
//     const id = event.target.id;
//     const image = document.createElement('img');
//     image.src = `/assets/img-${id}.jpg`;
//     pictureDisplay.appendChild(image);
//     pictureContainer.style.display = 'flex';
//   });
// });
