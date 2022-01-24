
export type Coordinates = number[]
export type Livery = 'cyan' | 'hotpink'
export interface IPiece {
  coordinates: Coordinates
captured: boolean
id: string;
livery: Livery
name: string
}

export interface IPawn extends IPiece {
  firstMove: boolean
  promoted: boolean

}

export interface ISquare {
  color: 'black' | 'white',
  coordinates: Coordinates
}