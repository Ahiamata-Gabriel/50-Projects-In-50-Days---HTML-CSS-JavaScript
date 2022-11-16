const breed = document.getElementById('breed');
const slideshow = document.getElementById('slideshow');

async function getDog() {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  createBreedList(data.message);
}

getDog();

const createBreedList = (breedlist) => {
  breed.innerHTML = `
  <select onchange="loadBreed(this.value)">
        <option>Choose Breed</option>
        ${Object.keys(breedlist)
          .map(function (breed) {
            return `<option>${breed}</option>`;
          })
          .join('')}
  </select>`;
};

const loadBreed = async (breed) => {
  if (breed != 'Choose Breed') {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    createSlideshow(data.message);
  }
};

const createSlideshow = (images) => {
  const random = Math.floor(Math.random() * 15);
  console.log(random);
  slideshow.innerHTML = `<div class="slide" style="background-image: url('${images[random]}')"></div>`;
};
