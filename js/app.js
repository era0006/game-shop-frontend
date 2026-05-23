console.log("Game Shop Frontend loaded");

async function loadGames() {
    try {
        const response = await fetch('http://localhost:8080/games');
        const games = await response.json();

        console.log('Games received:', games);

        const container = document.getElementById('games');
        container.innerHTML = '';

        if (games.length === 0) {
            container.innerHTML = '<p>No games yet. Add some!</p>';
            return;
        }

        games.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <h3>🎮 ${game.title}</h3>
                <p>💰 Price: $${game.price}</p>
                <p>⭐ Rating: ${game.rating || 'N/A'}</p>
                <p>📦 In stock: ${game.in_stock ? '✅ Yes' : '❌ No'}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('games').innerHTML = '<p style="color:red">❌ Failed to load games</p>';
    }
}

window.onload = loadGames;