import { Observable, of } from "rxjs";
import {Coordinates, Livery } from '../../types'

export interface PieceConfig {
  livery: Livery;
  index: number | '';
  name: string;
  coordinates: Coordinates;
}

export class Piece {
public coordinates: Coordinates
public captured: Observable<boolean> = of(false);
public id: string;
public livery: Livery
public name: string

constructor(config: PieceConfig) {
  this.coordinates = config.coordinates
  this.id = config.livery + config.name + config.index
  this.name = config.name
  this.livery = config.livery


}

//checks for a valid move and updates the coordinates property. actual logic for these will come from the game file
public move() {

}

//a piece is dragged from the board and dropped on the table
public capture() {

}

}


export class Pawn extends Piece {
  public firstMove: Observable<boolean> = of(false) 
  public promoted: Observable<boolean> = of(false)

  //checks if it is a first move, if it is and it's a valid move, we set the firstMove property to false for the rest of the game.
  isFirstMove(){

  }

  //should change the pawn's face if the promotion condition is met
  promote(){

  }
}