document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('btnBuscar');
    const platosDiv = document.getElementById('platos');

    boton.addEventListener('click', function () {
        platosDiv.innerHTML = ""; 
        const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

        fetch(URL)
        .then(response => response.json()) 
        .then(data => {
            const meals = data.meals || []; 

            meals.forEach(meal => {
                
                const card = document.createElement('div');
                card.classList.add('card', 'mb-3');

                    card.innerHTML = `
                    <div class="card-body">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}" style="width: 70%;" margin-left: auto; margin-right: auto; >
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">Categoría: ${meal.strCategory}</p>
                    <p class="card-text">Origen: ${meal.strArea}</p>
                    <a href="${meal.strYoutube}" class="btn btn-primary" class="btn btn-primary mt-2" target="_blank">Ver en YouTube</a>
                
                    </div>
                    `;
                    platosDiv.appendChild(card);
            });
        });
    });
});
