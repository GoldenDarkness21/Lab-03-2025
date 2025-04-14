  
  export async function fetchGames() {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games`);
    if (!response.ok) {
      throw new Error('Error fetching games');
    }
    return await response.json();
  }
  
  export async function fetchGameById(id: string) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=${id}`);
    if (!response.ok) {
      throw new Error('Error fetching game by ID');
    }
    return await response.json();
  }