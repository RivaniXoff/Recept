document.addEventListener('DOMContentLoaded', function() {
    const pizza1Btn = document.getElementById('pizza1-btn');
    const pizza2Btn = document.getElementById('pizza2-btn');
    const pizzaImg = document.getElementById('pizza-img');
    const pizzaRecipe = document.getElementById('pizza-recipe');

    // Данные о пиццах
    const pizzaData = {
        margarita: {
            image: 'https://media.istockphoto.com/id/1168754685/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BC%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0-%D1%81-%D1%81%D1%8B%D1%80%D0%BE%D0%BC-%D0%B2%D0%B8%D0%B4-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=2DI8tUW4BmtQKGNl81LzgfxUoXcsmsgk5I5jd1UypI8=',
            recipe: 'Ингредиенты: тесто, томатный соус, моцарелла, базилик.\n\nПриготовление: Разогрейте духовку до 220°C. Раскатайте тесто и положите его на противень. Смажьте тесто томатным соусом, затем добавьте моцареллу. Выпекайте пиццу в течение 10-12 минут или до золотистого цвета. Добавьте свежий базилик перед подачей.'
        },
        pepperoni: {
            image: 'https://spb13saransk.ru/images/virtuemart/product/1_pepperoni_kvadrat.jpg',
            recipe: 'Ингредиенты: тесто, томатный соус, моцарелла, пепперони.\n\nПриготовление: Разогрейте духовку до 220°C. Раскатайте тесто и положите его на противень. Смажьте тесто томатным соусом, затем добавьте моцареллу и пепперони. Выпекайте пиццу в течение 10-12 минут или до золотистого цвета.'
        }
    };

    // Функция для отображения данных о пицце
    function showPizzaData(pizzaType) {
        pizzaImg.src = pizzaData[pizzaType].image;
        pizzaRecipe.textContent = pizzaData[pizzaType].recipe;
    }

    // Обработчики событий для кнопок
    pizza1Btn.addEventListener('click', function() {
        showPizzaData('margarita');
    });

    pizza2Btn.addEventListener('click', function() {
        showPizzaData('pepperoni');
    });
});
