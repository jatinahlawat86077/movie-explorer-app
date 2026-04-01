const API_KEY = "c741c71";

async function searchMovies() {
  const query = document.getElementById("searchInput").value;
  const moviesDiv = document.getElementById("movies");

  moviesDiv.innerHTML = "<p>Loading...</p>";

  try {
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await res.json();

    if (!data.Search) {
      moviesDiv.innerHTML = "<p>No results found</p>";
      return;
    }

    moviesDiv.innerHTML = data.Search.map(movie => `
      <div class="card">
        <img src="${movie.Poster}" />
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      </div>
    `).join("");

  } catch (err) {
    moviesDiv.innerHTML = "<p>Error fetching data</p>";
  }
}