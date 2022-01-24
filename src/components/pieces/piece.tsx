import { IPawn, IPiece } from "../../types/types";
import {Armor} from './styles'


interface Props {
  piece?: IPiece | IPawn
  blackSquare: boolean
}

export function Piece({piece, blackSquare}: Props) {

  switch (piece?.name ) {
    case 'knight':
      return <Armor blackSquare={blackSquare} >&#x2658;</Armor>;
    case 'queen':
      return <Armor blackSquare={blackSquare} >&#x2655;</Armor>;
    case 'bishop':
      return <Armor blackSquare={blackSquare} >&#x2657;</Armor>;
    case 'pawn':
      return <Armor blackSquare={blackSquare} >&#x2659;</Armor>;
    case 'rook':
      return <Armor blackSquare={blackSquare} >&#x2656;</Armor>;
    case 'king':
      return <Armor blackSquare={blackSquare} >&#x2654;</Armor>
    default:
      return <></>;
  }
}
