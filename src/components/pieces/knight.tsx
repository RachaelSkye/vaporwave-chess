import React from "react";
import { IPawn, IPiece } from "../../controllers/pieces/piece-controller";
import {Armor} from './styles'
interface Props {
  blackSquare: boolean
  piece?: IPiece | IPawn
}
export function Knight({blackSquare, piece}: Props) {
  const id = piece ? piece.id : ''

  return <Armor blackSquare={blackSquare} onDragStart={(e) => e.dataTransfer.setData('id', id)}>&#x2658;</Armor>;
}
