import React from "react";
import {Knight} from './knight';
import {Queen} from './queen'
import {King} from './king'
import {Bishop} from './bishop'
import {Rook} from './rook'
import {Pawn} from './pawn'
import { IPawn, IPiece } from "../../controllers/pieces/piece-controller";


interface Props {
  piece?: IPiece | IPawn
  blackSquare: boolean
}

export function PieceConfig({piece, blackSquare}: Props) {
  switch (piece?.name ) {
    case 'knight':
      return <Knight blackSquare={blackSquare} piece={piece}/>
    case 'queen':
      return <Queen blackSquare={blackSquare} piece={piece}/>
    case 'bishop':
      return <Bishop blackSquare={blackSquare} piece={piece}/>
    case 'pawn':
        return <Pawn blackSquare={blackSquare} piece={piece}/>
    case 'rook':
      return <Rook blackSquare={blackSquare} piece={piece}/>
    case 'king':
      return <King blackSquare={blackSquare} piece={piece}/>
    default:
      return <></>;
  }
}
