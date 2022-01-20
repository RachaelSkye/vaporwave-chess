import React from "react";
import {Armor} from './styles'
import { IPawn, IPiece } from "../../controllers/pieces/piece-controller";

interface Props {
  blackSquare: boolean
  piece?: IPiece | IPawn

}
export function Pawn({blackSquare, piece}: Props) {
  const id = piece ? piece.id : ''
  function handleDragStart(e: React.DragEvent<HTMLSpanElement>) {
    e.dataTransfer.setData('id', id)
    console.log('drag started')
  }

  return <Armor draggable={true} onDragStart={(e) => handleDragStart(e)} blackSquare={blackSquare} >&#x2659;</Armor>;
}
