// Paramètres du graphique
const ctx = document.getElementById('chart-1');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      },
      {
        label: 'Dataset 2',
        data: [5, 21, 38, 26, 12, 3],
        borderWidth: 1
      }
  ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Fonction pour calculer le temps de lecture
function readingTime() {
  const text = document.getElementById("article").innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById("temps").innerText = "~ " + time + " minutes";
}
// lancement de la fonction
readingTime();

const element = document.getElementById("image-compare");
const viewer = new ImageCompare(element).mount();

// ---------------------------------

// Making a simple GET request
fetch('https://opendata.infrabel.be/api/explore/v2.1/catalog/datasets/belangrijkste-incidenten/records?limit=10')
.then(response => {
return response.json();
})

.then(data => {

// console.log(data.results);

const htmlApi = document.getElementById('api');

for (let i = 0; i < data.results.length; i++) {

  // console.log(data.results[i].description_de_l_incident);
  // console.log(data.results[i].date);
  // console.log(data.results[i].lieu);
  // console.log(data.results[i].min_delay);

  let incident = data.results[i].description_de_l_incident;
  let date = data.results[i].date;
  let lieu = data.results[i].lieu;
  let min_delay = data.results[i].min_delay;

  let paragraph = document.createElement("p");
  paragraph.textContent = incident + " " + date + " " + lieu + " " + min_delay;

  // paragraph.textContent = data.results[i].description_de_l_incident + " " + data.results[i].date + " " + data.results[i].lieu + " " + data.results[i].min_delay;

  htmlApi.appendChild(paragraph)

}

});


// Function to fetch and update the joke -- https://v2.jokeapi.dev/ --
function fetchJoke() {
  // API URL
  const apiUrl = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

  // Fetch data from the API
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Check if the response contains a joke
          const joke = data.joke || `${data.setup} ${data.delivery}`;

          // Update the content of the div with the new joke
          document.getElementById('joke-container').innerHTML = `<p>${joke}</p>`;
      })
      .catch(error => {
          console.error('Error fetching joke:', error);
      });
}

// Fetch the joke initially
fetchJoke();

// Set up an interval to fetch and update the joke every 30 seconds
setInterval(fetchJoke, 30000);
