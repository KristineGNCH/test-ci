import sortPC from '../matchers';

test('sorted by PC health', () => {
  let infoPC = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedInfoPC = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  infoPC = sortPC(infoPC);

  expect(infoPC).toEqual(sortedInfoPC);
});
