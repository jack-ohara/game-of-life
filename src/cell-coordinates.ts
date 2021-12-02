import { get } from 'svelte/store';
import { columns } from './board-store';

export default function convertCellIndexToCoordinates(cellIndex: number): { x: number; y: number } {
  let x = 0;
  let y = 0;

  const column_count = get(columns);

  if (cellIndex === 0) return { x, y };

  x = cellIndex % column_count;
  y = cellIndex >= column_count ? Math.floor(cellIndex / column_count) : 0;

  return { x, y };
}
