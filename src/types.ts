import { BehaviorSubject, Observable } from "rxjs"

export type Coordinates = number[]
export type Livery = 'cyan' | 'hotpink'
export interface IPiece {
  coordinates: Coordinates
captured: BehaviorSubject<boolean>
id: string;
livery: Livery
name: string
}

export interface IPawn extends IPiece {
  firstMove: Observable<boolean>
  promoted: Observable<boolean>

}

export interface ISquare {
  color: 'black' | 'white',
  coordinates: Coordinates
}