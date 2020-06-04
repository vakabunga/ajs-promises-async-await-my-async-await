import GameSavingLoader from '../gameSavingLoader';

describe('GameSavingLoader:', () => {
  test('should return Object', async () => {
    const result = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };
    const data = await GameSavingLoader.load();
    expect(JSON.parse(data)).toEqual(result);
  });
});
