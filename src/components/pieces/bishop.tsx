import React from "react";
import { IPawn, IPiece } from "../../controllers/pieces/piece-controller";
import {Armor} from './styles'
interface Props {
  blackSquare: boolean
  piece?: IPiece | IPawn
}
export function Bishop({blackSquare, piece}: Props) {
  const id = piece ? piece.id : ''
  
  return <Armor blackSquare={blackSquare} draggable={true} onDragStart={(e) => e.dataTransfer.setData('id', id)}>&#x2657;</Armor>;
}
