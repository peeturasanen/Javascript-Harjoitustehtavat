const tvSeriesForm = document.querySelector('#tv-series-form');
const resultsContainer = document.querySelector('#results');

tvSeriesForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const searchQuery = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchQuery}`);
    const jsonData = await response.json();
    console.log(jsonData);

    resultsContainer.innerHTML = '';

    for (const tvShow of jsonData) {
      const article = document.createElement('article');

      const heading = document.createElement('h2');
      heading.textContent = tvShow.show.name;

      const link = document.createElement('a');
      link.href = tvShow.show.url;
      link.target = '_blank';

      const imageUrl = tvShow.show.image ?
          tvShow.show.image.medium :
          'https://via.placeholder.com/210x295?text=Not%20Found';

      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = tvShow.show.name;

      const summary = document.createElement('div');
      summary.innerHTML = tvShow.show.summary;

      link.append(image);

      article.append(heading, link, summary);
      resultsContainer.append(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});
