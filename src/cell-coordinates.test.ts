import { rows, columns } from './board-store';
import convertCellIndexToCoordinates from './cell-coordinates';

describe('converting a cell index into co-ordinates', () => {
  test('0 should return [0,0]', () => {
    const result = convertCellIndexToCoordinates(0);

    expect(result).toMatchObject({ x: 0, y: 0 });
  });

  describe('in a 2x2 grid', () => {
    beforeAll(() => {
      rows.set(2);
      columns.set(2);
    });

    const cases: { index: number; expected: { x: number; y: number } }[] = [
      { index: 0, expected: { x: 0, y: 0 } },
      { index: 1, expected: { x: 1, y: 0 } },
      { index: 2, expected: { x: 0, y: 1 } },
      { index: 3, expected: { x: 1, y: 1 } }
    ];

    test.each(cases)('$index should resolve to $expected', ({ index, expected }) => {
      const result = convertCellIndexToCoordinates(index);

      expect(result).toMatchObject(expected);
    });
  });

  describe('in a 3x3 grid', () => {
    beforeAll(() => {
      rows.set(3);
      columns.set(3);
    });

    const cases: { index: number; expected: { x: number; y: number } }[] = [
      { index: 0, expected: { x: 0, y: 0 } },
      { index: 1, expected: { x: 1, y: 0 } },
      { index: 2, expected: { x: 2, y: 0 } },
      { index: 3, expected: { x: 0, y: 1 } },
      { index: 4, expected: { x: 1, y: 1 } },
      { index: 5, expected: { x: 2, y: 1 } },
      { index: 6, expected: { x: 0, y: 2 } },
      { index: 7, expected: { x: 1, y: 2 } },
      { index: 8, expected: { x: 2, y: 2 } }
    ];

    test.each(cases)('$index should resolve to $expected', ({ index, expected }) => {
      const result = convertCellIndexToCoordinates(index);

      expect(result).toMatchObject(expected);
    });
  });

  describe('in a 4x5 grid', () => {
    beforeAll(() => {
      rows.set(4);
      columns.set(5);
    });

    const cases: { index: number; expected: { x: number; y: number } }[] = [
      { index: 0, expected: { x: 0, y: 0 } },
      { index: 1, expected: { x: 1, y: 0 } },
      { index: 2, expected: { x: 2, y: 0 } },
      { index: 3, expected: { x: 3, y: 0 } },
      { index: 4, expected: { x: 4, y: 0 } },
      { index: 5, expected: { x: 0, y: 1 } },
      { index: 6, expected: { x: 1, y: 1 } },
      { index: 7, expected: { x: 2, y: 1 } },
      { index: 8, expected: { x: 3, y: 1 } },
      { index: 9, expected: { x: 4, y: 1 } },
      { index: 10, expected: { x: 0, y: 2 } },
      { index: 11, expected: { x: 1, y: 2 } },
      { index: 12, expected: { x: 2, y: 2 } },
      { index: 13, expected: { x: 3, y: 2 } },
      { index: 14, expected: { x: 4, y: 2 } },
      { index: 15, expected: { x: 0, y: 3 } },
      { index: 16, expected: { x: 1, y: 3 } },
      { index: 17, expected: { x: 2, y: 3 } },
      { index: 18, expected: { x: 3, y: 3 } },
      { index: 19, expected: { x: 4, y: 3 } }
    ];

    test.each(cases)('$index should resolve to $expected', ({ index, expected }) => {
      const result = convertCellIndexToCoordinates(index);

      expect(result).toMatchObject(expected);
    });
  });

  describe('in a 5x4 grid', () => {
    beforeAll(() => {
      rows.set(5);
      columns.set(4);
    });

    const cases: { index: number; expected: { x: number; y: number } }[] = [
      { index: 0, expected: { x: 0, y: 0 } },
      { index: 1, expected: { x: 1, y: 0 } },
      { index: 2, expected: { x: 2, y: 0 } },
      { index: 3, expected: { x: 3, y: 0 } },
      { index: 4, expected: { x: 0, y: 1 } },
      { index: 5, expected: { x: 1, y: 1 } },
      { index: 6, expected: { x: 2, y: 1 } },
      { index: 7, expected: { x: 3, y: 1 } },
      { index: 8, expected: { x: 0, y: 2 } },
      { index: 9, expected: { x: 1, y: 2 } },
      { index: 10, expected: { x: 2, y: 2 } },
      { index: 11, expected: { x: 3, y: 2 } },
      { index: 12, expected: { x: 0, y: 3 } },
      { index: 13, expected: { x: 1, y: 3 } },
      { index: 14, expected: { x: 2, y: 3 } },
      { index: 15, expected: { x: 3, y: 3 } },
      { index: 16, expected: { x: 0, y: 4 } },
      { index: 17, expected: { x: 1, y: 4 } },
      { index: 18, expected: { x: 2, y: 4 } },
      { index: 19, expected: { x: 3, y: 4 } }
    ];

    test.each(cases)('$index should resolve to $expected', ({ index, expected }) => {
      const result = convertCellIndexToCoordinates(index);

      expect(result).toMatchObject(expected);
    });
  });
});
