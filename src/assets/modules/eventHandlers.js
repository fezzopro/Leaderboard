import game from "./game";

class EventHandler{
  refreshHandler = async () => {
    return await game.getScores();
  };

  submitScoreHandler = () => {
    const name = document.querySelector('.names').value;
    const score = document.querySelector('.score').value;
    return game.saveScore({user: name, score: score});
  };
}

export default new EventHandler();