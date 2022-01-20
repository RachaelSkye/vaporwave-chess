import { Coordinates } from "../../types";

export interface SquareConfig {
  color: 'black' | 'white';
  coordinates: Coordinates;
}

export interface ISquare {
  color: 'black' | 'white',
  coordinates: Coordinates
}

export class Square {
  public color: 'black' | 'white';
  public coordinates: Coordinates
  constructor(config: SquareConfig){
    this.color = config.color
    this.coordinates = config.coordinates
  }
}