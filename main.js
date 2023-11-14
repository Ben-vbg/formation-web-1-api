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


  // API dynamique (url avec des données a récupérer)
  // https://opendata.infrabel.be/api/explore/v2.1/catalog/datasets/belangrijkste-incidenten/records?limit=20

  // Voir dans la console de votre navigateur ce que l'API vous donne :

  async function fetchData() {

    // URl / API
    const url = "https://opendata.infrabel.be/api/explore/v2.1/catalog/datasets/belangrijkste-incidenten/records?limit=20";

    try {

      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

      console.log(data.results)

      const resultat = data.results;

      for (let i = 0; i < resultat.length; i++) {
        console.log("Incident: " + resultat[i].description_de_l_incident)
        console.log("Date: " + resultat[i].date)
        console.log("Lieu: " + resultat[i].lieu)
        console.log("Place: " + resultat[i].place)
      }

    } catch (error) {
      console.error('Fetch error:', error);
    }

  }

  // Call the function
  fetchData();
