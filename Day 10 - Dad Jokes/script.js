const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const getJokes = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await fetch('https://icanhazdadjoke.com', config);
  const data = await response.json();

  jokeEl.innerHTML = data.joke;
};

getJokes();

jokeBtn.addEventListener('click', getJokes);
