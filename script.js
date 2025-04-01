function fetchMeals() {
    fetch('meals.json')
        .then(response => response.json())
        .then(meals => {
            const today = new Date().toISOString().split('T')[0];
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

            displayMeal(meals, today, 'today', 'Dziś');
            displayMeal(meals, yesterday, 'yesterday', 'Wczoraj');
        })
        .catch(error => console.error('Błąd wczytywania JSON:', error));
}

function displayMeal(meals, date, elementId, label) {
    const meal = meals.find(m => m.date === date);
    if (meal) {
        document.getElementById(elementId).innerHTML = `
            <div class="meal">
                <h2>${label}</h2>
                <p>${meal.description}</p>
                <a href="${meal.link}" target="_blank">Link do Fitatu</a>
            </div>`;
    } else {
        document.getElementById(elementId).innerHTML = `<p>${label}: Brak danych</p>`;
    }
}

function fetchByDate() {
    fetch('meals.json')
        .then(response => response.json())
        .then(meals => {
            const selectedDate = document.getElementById('datePicker').value;
            displayMeal(meals, selectedDate, 'selectedDate', `Obiad z ${selectedDate}`);
        })
        .catch(error => console.error('Błąd wczytywania JSON:', error));
}

fetchMeals();
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cookie-popup").style.display = "block"; // Pokaż okienko od razu
  
    document.getElementById("accept-btn").addEventListener("click", function () {
      document.getElementById("cookie-popup").style.display = "none"; // Schowaj okienko
      document.getElementById("rickroll").style.display = "block"; // Pokaż odtwarzacz
  
      setTimeout(function () {
        window.location.href = "https://www.instagram.com/lasa.nie.nasa/";
      }, 2500); // Przekierowanie po 5 sekundach
    });
  });
  
