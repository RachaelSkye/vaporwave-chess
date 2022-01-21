import React from "react";
import {Knight} from './knight';
import {Queen} from './queen'
import {King} from './king'
import {Bishop} from './bishop'
import {Rook} from './rook'
import {Pawn} from './pawn'
import { IPawn, IPiece } from "../../types";
import {isPawn} from "../../type-guard"

interface Props {
  piece?: IPiece | IPawn
  blackSquare: boolean
}

export function PieceConfig({piece, blackSquare}: Props) {
  const pawn = isPawn(piece) ? piece : undefined
  const titledPiece = isPawn(piece) ? undefined : piece

  switch (piece?.name ) {
    case 'knight':
      return <Knight blackSquare={blackSquare} piece={titledPiece}/>
    case 'queen':
      return <Queen blackSquare={blackSquare} piece={titledPiece}/>
    case 'bishop':
      return <Bishop blackSquare={blackSquare} piece={titledPiece}/>
    case 'pawn':
        return <Pawn blackSquare={blackSquare} piece={pawn}/>
    case 'rook':
      return <Rook blackSquare={blackSquare} piece={titledPiece}/>
    case 'king':
      return <King blackSquare={blackSquare} piece={titledPiece}/>
    default:
      return <></>;
  }
}
