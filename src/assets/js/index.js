import '../css/style.css';
import game from '../modules/game';
import components from '../modules/components';

components.submitScoreEvent();
components.refreshList();
game.getScores().then((scores) => {
  components.RenderScoreList(scores.result);
});