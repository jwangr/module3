class GamesService {
    // class automatically understands function, without needing to write that
    async getGames() {

        // fetch can get data from an external URL, via a Http Request
        // fetch gives you a response (contains a lot of excess info, including the JSON data)
        // fetch is generally considered asynchronous: user can still press on links, etc. on your page while this fetch fn loads in the background. Note the syntax: async, await
        const url = `https://raw.githubusercontent.com/dasingh9/public/refs/heads/main/games-data.json`;
        const response = await fetch(url);

        // extract the JSON data from the response object
        const games = response.json();
        return games;
    }
}

// // get games for server
// const gamesService = new GamesService();
// const games = await gamesService.getGames();