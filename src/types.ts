export interface Piece {
  face: any,//TODO: this should be a react element. react.dropdown thingy is not giving me what i expect
  livery: Livery,
  coordinates: Coordinates,
  captured: boolean,
}

export interface Pawn extends Piece {
  promoted: boolean,
  firstMove: boolean
}

export type Coordinates = number[]
export type Livery = 'cyan' | 'hotpink'
