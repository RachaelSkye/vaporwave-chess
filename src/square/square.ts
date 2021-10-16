// import { tap } from "rxjs";
import { Piece } from "../pieces/piece";
import { Coordinates } from "../types";

export interface SquareConfig {
  color: 'black' | 'white';
  coordinates: Coordinates;
  piece?: Piece
}


export class Square {
  public color: string;
  public coordinates: Coordinates
  public piece?: Piece
  constructor(config: SquareConfig){
    this.color = config.color
    this.coordinates = config.coordinates
    this.piece = config.piece
  }
}