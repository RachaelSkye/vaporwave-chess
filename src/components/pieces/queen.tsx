import React from "react";
import {Armor} from './styles'
import { IPawn, IPiece } from "../../controllers/pieces/piece-controller";

interface Props {
  blackSquare: boolean
  piece?: IPiece | IPawn

}
export function Queen({blackSquare, piece}: Props) {
  const id = piece ? piece.id : ''

  return <Armor blackSquare={blackSquare} onDragStart={(e) => e.dataTransfer.setData('id', id)}>&#x2655;</Armor>;
}
