import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const response = await read();
      const data = await json(response);
      return data;
    } catch (e) {
      return e;
    }
  }
}

GameSavingLoader.load().then((saving) => JSON.parse(saving));
