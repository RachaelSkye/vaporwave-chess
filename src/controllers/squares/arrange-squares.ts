import { Coordinates } from "../../types/types";

function renderSquare(i: number) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const color: 'black' | 'white' = black ? 'black' : 'white';
  const coordinates: Coordinates = [x,y]

  const square = {
    color,
    coordinates,
  }
  return square
}


export function arrangeSquares() {
  const squares = []
  for (let i = 63; i >= 0; i--) {
    squares.push(renderSquare(i));
  }
  return squares
}