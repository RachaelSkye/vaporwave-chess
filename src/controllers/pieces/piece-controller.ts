import { Observable, of } from "rxjs";
import {Coordinates, Livery } from '../../types'

export interface PieceConfig {
  livery: Livery;
  index: number | '';
  name: string;
  coordinates: Coordinates;
}

export interface IPiece {
  coordinates: Coordinates
captured: Observable<boolean>
id: string;
livery: Livery
name: string
}

export interface IPawn extends Piece {
  firstMove: Observable<boolean>
  promoted: Observable<boolean>

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





}


export class Pawn extends Piece {
  public firstMove: Observable<boolean> = of(true) 
  public promoted: Observable<boolean> = of(false)

  //checks if it is a first move, if it is and it's a valid move, we set the firstMove property to false for the rest of the game.
  isFirstMove(){

  }

  //should change the pawn's face if the promotion condition is met
  promote(){

  }
}