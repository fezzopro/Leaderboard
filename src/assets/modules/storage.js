class Storage {
  constructor() {
    this.localStorage = localStorage;
    this.GAMENAME = 'Monopoly';
    if (!this.isLocalStorage()) {
      this.createLocalStorage();
    }
  }

  isLocalStorage = () => {
    const storage = this.localStorage.getItem(this.GAMENAME);
    return storage;
  }

  createLocalStorage = () => {
    this.localStorage.setItem(this.GAMENAME, JSON.stringify([]));
  }

  readLocalStorage = () => {
    const storage = JSON.parse(this.localStorage.getItem(this.GAMENAME));
    return storage;
  }

  saveToLocalStorage = (gameInfo) => {
    this.localStorage.setItem(this.GAMENAME,
      JSON.stringify([...this.readLocalStorage(), gameInfo]));
  }
}

export default new Storage();