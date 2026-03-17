console.log("Game Shop Frontend loaded");

const games = [
    { title: "The Witcher 3", genre: "RPG", price: 39.99 },
    { title: "Cyberpunk 2077", genre: "RPG", price: 49.99 },
    { title: "Mario Kart", genre: "Racing", price: 44.99 }
];

function displayGames() {
    const container = document.getElementById('games');
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <h3>${game.title}</h3>
            <p>Genre: ${game.genre}</p>
            <p>Price: $${game.price}</p>
        `;
        container.appendChild(card);
    });
}

window.onload = displayGames;