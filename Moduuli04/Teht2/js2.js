const tvSeriesForm = document.querySelector('#tv-series-form');
tvSeriesForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const searchQuery = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchQuery}`);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  }
});