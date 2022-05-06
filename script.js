// Este es un archivo javascript. Lo saben porque tiene de extension .js

// Aca es donde pasa la verdadera magia...
function normalize(text) {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

document.getElementById('search').addEventListener('keyup', function(event) {
    const searchValue = normalize(event.target.value);
    const cards = document.getElementsByClassName("card");
    for (const card of cards) {
        cardTitle = card.getElementsByTagName("h2")
        if (
            !searchValue ||
            (
                cardTitle.length > 0 &&
                normalize(cardTitle[0].innerText).includes(searchValue)
            )
        ) {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    }
})

