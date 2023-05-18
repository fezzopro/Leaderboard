import eventHandlers from './eventHandlers';

class Components {
  RenderScoreList = (scores) => {
    const ul = document.querySelector('.score-boad > ul');
    ul.textContent = '';

    if (scores.length > 0) {
      scores.forEach((score) => {
        const li = document.createElement('li');
        li.className = 'score-item';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'nameSpan';
        nameSpan.textContent = `${score.user}: `;

        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'scoreSpan';
        scoreSpan.textContent = score.score;

        li.appendChild(nameSpan);
        li.appendChild(scoreSpan);

        ul.appendChild(li);
      });
    }
  };

  displayFormMessage = async (message) => {
    const form = document.querySelector('.submit-bnt');
    const messageSpan = document.createElement('span');
    messageSpan.className = 'form-message';
    messageSpan.textContent = message;
    form.insertAdjacentElement('beforebegin', messageSpan);
  };

  clearInputs = () => {
    setTimeout(() => {
      document.querySelector('form').reset();
    }, 500);
    setTimeout(() => {
      document.querySelector('form').removeChild(document.querySelector('.form-message'));
    }, 1000);
  };

  submitScoreEvent = () => {
    document.querySelector('.submit-bnt').addEventListener('click', (event) => {
      event.preventDefault();
      const message = eventHandlers.submitScoreHandler();
      message.then(async (msg) => {
        this.displayFormMessage(msg.result);
        this.clearInputs();
      });
    });
  };

  refreshList = async () => {
    document.querySelector('.refresh-btn').addEventListener('click', (event) => {
      event.preventDefault();
      eventHandlers.refreshHandler().then((response) => {
        this.RenderScoreList(response.result);
      });
    });
  };
}

export default new Components();