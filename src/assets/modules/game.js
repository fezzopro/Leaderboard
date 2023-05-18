import storage from './storage';

class GameAPI {
  constructor() {
    this.baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    // Create and save the game if it's your first time playing
    if (storage.readLocalStorage().length === 0) {
      this.createGame()
        .then((response) => storage
          .saveToLocalStorage({ gameId: this.splitForGameId(response.result) }));
    }
  }

  createGame = async () => {
    try { // eslint-disable-line no-useless-catch
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        body: JSON.stringify({ name: storage.GAMENAME }),
        headers: this.headers,
      });

      return response.json();
    } catch (error) {
      throw error;
    }
  };

  splitForGameId = (string) => string.split(' ')[3];

  getGameId = () => storage.readLocalStorage()[0].gameId;

  saveScore = async (score) => {
    try { // eslint-disable-line no-useless-catch
      const response = await fetch(`${this.baseUrl}${this.getGameId()}/scores/`,
        {
          method: 'POST',
          body: JSON.stringify(score),
          headers: this.headers,
        });

      return response.json();
    } catch (error) {
      throw error;
    }
  };

  getScores = async () => {
    try { // eslint-disable-line no-useless-catch
      const response = await fetch(`${this.baseUrl}${this.getGameId()}/scores/`,
        {
          method: 'GET',
        });

      return response.json();
    } catch (error) {
      throw error;
    }
  };
}

export default new GameAPI();