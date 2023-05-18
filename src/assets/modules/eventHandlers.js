import game from './game';

class EventHandler {
  refreshHandler = async () => await game.getScores();

  submitScoreHandler = () => {
    const name = document.querySelector('.names').value;
    const score = document.querySelector('.score').value;
    return game.saveScore({user: name, score});
  };
}

export default new EventHandler();