class GamesContainer {
    getGameCards(gamesArray) {
        let allgamesHtml = "";
        gamesArray.forEach(game => {
            const gameHtml = `
                <div class="card">
                    <div class="img-container" style="background-image: url(${game.thumbnail});"></div>
                    <div>
                        <h2>${game.title}</h2>
                    </div>
                    <div class="genre">
                        <div>${game.genre}</div>
                        <a class="playButton" target="_blank" href=${game.gameUrl}>Play</a>                        
                    </div>
                </div>        
            `
            allgamesHtml += gameHtml;
        })
        return allgamesHtml;
    }
}