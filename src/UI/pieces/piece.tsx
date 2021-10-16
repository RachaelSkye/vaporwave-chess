import React from "react";
import {Knight} from './knight';
import {Queen} from './queen'
import {King} from './king'
import {Bishop} from './bishop'
import {Rook} from './rook'
import {Pawn} from './pawn'


interface Props {
  name?: string
  blackSquare: boolean
}

export function Piece({name, blackSquare}: Props) {
  const knight = name?.includes('knight');
  const queen = name?.includes('queen')
  const bishop = name?.includes('bishop')
  const pawn = name?.includes('pawn')
  const rook = name?.includes('rook')
  const king = name?.includes('king')

  switch (knight || queen || bishop || pawn || rook || king || name === undefined ) {
    case knight:
      return <Knight blackSquare={blackSquare} />
    case queen:
      return <Queen blackSquare={blackSquare}/>
    case bishop:
      return <Bishop blackSquare={blackSquare}/>
    case pawn:
        return <Pawn blackSquare={blackSquare}/>
    case rook:
      return <Rook blackSquare={blackSquare}/>
    case king:
      return <King blackSquare={blackSquare}/>
    default:
      return <></>;
  }
}
