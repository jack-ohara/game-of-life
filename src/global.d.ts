/// <reference types="@sveltejs/kit" />

export interface CellInfo {
  coordinates: { x: number; y: number };
  isAlive: boolean;
}
