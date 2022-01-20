import React from "react";
import {Armor} from './styles'
import { IPawn, IPiece } from "../../controllers/pieces/piece-controller";

interface Props {
  blackSquare: boolean
  piece?: IPiece | IPawn

}
export function King({blackSquare, piece}: Props) {
  const id = piece ? piece.id : ''
  function handleDragStart(e: React.DragEvent<HTMLSpanElement>) {
    e.preventDefault();

    e.dataTransfer.setData('id', id)
    console.log('drag started')
  }

  return <Armor blackSquare={blackSquare} onDragStart={handleDragStart}>&#x2654;</Armor>
}
